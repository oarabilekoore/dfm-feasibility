import { Footer } from "@/components/footer";
import { TableOfContents } from "@/components/toc";

import { createSignal } from "@materialthing/core";

export function ArticlePage() {
  type ctxPosData = {
    x: number;
    y: number;
    open: boolean;
  };
  const [ctxMenuState, setCTXctxMenuState] = createSignal<ctxPosData>({
    x: 0,
    y: 0,
    open: false,
  });

  const handleSelection = (event: MouseEvent) => {
    const selection = window.getSelection();
    const selectedText = selection?.toString().trim();

    if (selectedText) {
      setCTXctxMenuState({
        x: event.clientX,
        y: event.clientY,
        open: true,
      });
      console.log(selectedText);
      // TODO
    } else {
      setCTXctxMenuState((prev) => ({ ...prev, open: false }));
    }
  };

  const handleOpenChange = (isOpen: boolean) => {
    setCTXctxMenuState((prev) => ({ ...prev, open: isOpen }));
  };

  const tocData = [
    { label: "Executive Summary", id: "summary" },
    { label: "Financial Projections", id: "financials" },
    { label: "Market Analysis", id: "market" },
    { label: "Conclusion", id: "conclusion" },
  ];

  return (
    <div className="pt-16">
      <div className="grid-cols-[var(--container-2xs)_2.5rem_minmax(0,1fr)_2.5rem]">
        <main className="cols-start-1" onMouseUp={handleSelection}>
          <div className="prose prose-lg prose-slate max-w-none">
            fhvujvfbawk
          </div>
        </main>

        <aside className=" col-start-2 row-span-full row-start-1 max-lg:hidden">
          <TableOfContents items={tocData} />
        </aside>
      </div>
      <Footer />
    </div>
  );
}
