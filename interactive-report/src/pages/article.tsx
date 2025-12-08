//import { SelectionMenu } from "@/components/custom-ui/selection-menu";
import { TableOfContents } from "@/components/custom-ui/toc";
import { useActiveHeading } from "@/hooks/activeheading";
import Report from "@/components/report/report.mdx";
import { components } from "@/components/report/mdx";

const tocItems = [
  { id: "introduction", title: "Business Overview" },
  { id: "solving-challenges", title: "Problem & Solution" },
  { id: "economic-contribution", title: "Economic Impact" },
  { id: "strategic-location", title: "Strategic Location" },
  { id: "market-research", title: "Market Analysis" },
  { id: "funding", title: "Funding Strategy" },
  { id: "startup-costs", title: "Startup Costs & Assets" },
  { id: "profit-projections", title: "Financial Projections" },
  { id: "discussion-conclusion", title: "Conclusion" },
];

export default function Article() {
  const activeId = useActiveHeading();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:gap-12">
        <aside className="hidden md:block w-64 shrink-0">
          <div className="sticky top-24">
            <TableOfContents contents={tocItems} activeId={activeId || ""} />
          </div>
        </aside>
        {/*<SelectionMenu /> Removed Its Buggy */}
        <main id="report-content" className="flex-1 min-w-0">
          <Report components={components} />
        </main>
      </div>
    </div>
  );
}
