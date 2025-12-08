import BaseHoverCard from "../hover-card";

export default function CEDAHoverCard() {
  return (
    <BaseHoverCard
      triggerText="Citizen Entrepreneurial Development Agency (CEDA)"
      category="Development Finance"
      title="CEDA"
      description="A government agency established to provide financial and technical support for business development, fostering citizen entrepreneurship and empowerment."
      tags={[
        "Subsidized Funding",
        "Equity Investment",
        "Business Mentoring",
        "SME Development",
      ]}
      footerLeft={{ label: "Core Mandate", value: "Citizen Empowerment" }}
      footerRight={{ label: "Focus Area", value: "Entrepreneurship" }}
    />
  );
}
