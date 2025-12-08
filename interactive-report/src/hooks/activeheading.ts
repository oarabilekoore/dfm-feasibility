import { useState, useRef, useEffect, type Ref } from "react";

// Intersection observer options
const observerOptions = {
  root: null,
  threshold: 0.1, // Trigger when at least 10% of the section is visible
  rootMargin: "-10% 0% -40% 0%", // Adjust focus area to the top-center of screen
};

type StrOrNil = string | null;

export function useActiveHeading(): StrOrNil {
  const [activeId, setActiveId] = useState<StrOrNil>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const headingElementsRef = useRef<Record<string, number>>({});

  useEffect(() => {
    // 1. UPDATED: Find all <section> tags with IDs inside the report container
    const headingElements = Array.from(
      document.querySelectorAll("#report-content section[id]"),
    );

    // 2. Initialize observer
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (!id) return;

        // Add or remove from map based on intersection
        if (entry.isIntersecting) {
          headingElementsRef.current[id] = entry.intersectionRatio;
        } else {
          delete headingElementsRef.current[id];
        }
      });

      // 3. Determine the *most* visible section
      const visibleHeadings = Object.keys(headingElementsRef.current);

      if (visibleHeadings.length === 0) {
        setActiveId(null);
      } else if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0]);
      } else {
        // Find the one with the highest intersectionRatio
        const mostVisibleId = visibleHeadings.reduce((a, b) =>
          headingElementsRef.current[a] > headingElementsRef.current[b] ? a : b,
        );
        setActiveId(mostVisibleId);
      }
    }, observerOptions);

    headingElements.forEach((elem) => observer.current?.observe(elem));

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  return activeId;
}
