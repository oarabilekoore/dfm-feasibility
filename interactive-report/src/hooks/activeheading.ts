import { useState, useRef, useEffect, type Ref } from "react";

// intersection observer points
const observerOptions = {
  root: null,
  threshold: 0,
  rootMargin: "0% 0% -60% 0%",
};

type StrOrNil = string | null;

export function useActiveHeading(): StrOrNil {
  const [activeId, setActiveId] = useState<StrOrNil>(null);
  const observer = useRef<null | Ref>(null);
  const headingElementsRef = useRef({});

  useEffect(() => {
    // 1. Find all target heading elements (e.g., h2, h3)
    const headingElements = Array.from(
      document.querySelectorAll("#content h2, #content h3"),
    );

    // 2. Initialize or reuse the observer
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");

        // Add or remove headings from the map based on intersection
        if (entry.isIntersecting) {
          headingElementsRef.current[id] = entry.intersectionRatio;
        } else {
          delete headingElementsRef.current[id];
        }
      });

      // 3. Determine the *most* visible heading
      const visibleHeadings = Object.keys(headingElementsRef.current);

      if (visibleHeadings.length === 0) {
        // If no headings are visible (e.g., scrolled to top/bottom past all headings)
        setActiveId(null);
      } else if (visibleHeadings.length === 1) {
        // If only one heading is visible, it's the active one
        setActiveId(visibleHeadings[0]);
      } else {
        // If multiple are visible, find the one with the highest intersectionRatio (most visible)
        const mostVisibleId = visibleHeadings.reduce((a, b) =>
          headingElementsRef.current[a] > headingElementsRef.current[b] ? a : b,
        );
        setActiveId(mostVisibleId);
      }
    }, observerOptions);

    headingElements.forEach((elem) => observer.current.observe(elem));

    return () => {
      observer.current.disconnect();
    };
  }, []);

  return activeId;
}
