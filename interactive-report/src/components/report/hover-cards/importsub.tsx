import BaseHoverCard from "../hover-card";

export function ImportSubstitutionHoverCard() {
  return (
    <BaseHoverCard
      triggerText="Botswana’s import substitution policy"
      category="Economic Policy"
      title="Import Substitution"
      description="A trade strategy advocating for replacing foreign imports with domestic production to boost local industry and reduce dependency."
      tags={[
        "Local Production",
        "Job Creation",
        "Trade Balance",
        "Economic Resilience",
      ]}
      footerLeft={{ label: "Primary Goal", value: "Self-Sufficiency" }}
      footerRight={{ label: "Strategy", value: "Domestic Manufacturing" }}
    />
  );
}
