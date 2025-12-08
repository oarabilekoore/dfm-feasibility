import BaseHoverCard from "../hover-card";

export default function IMTSReportHoverCard() {
  return (
    <BaseHoverCard
      triggerText="International Merchandise Trade Statistics (IMTS) monthly digest (June 2025)"
      category="Statistical Report"
      title="IMTS Digest: June 2025"
      description="A comprehensive analysis of external trade flows, highlighting trade balance, major commodities, and market trends for the period."
      tags={[
        "Trade Balance",
        "Export Data",
        "Import Metrics",
        "Commodity Analysis",
      ]}
      footerLeft={{ label: "Author", value: "Zibo Albert" }}
      footerRight={{ label: "Period", value: "June 2025" }}
    />
  );
}
