import BaseHoverCard from "../hover-card";

export default function PCBHoverCard() {
  return (
    <BaseHoverCard
      triggerText="PCB Printing"
      category="Electronics"
      title="PCB Fabrication"
      description="The process of creating Printed Circuit Boards using chemical etching or mechanical milling to define conductive pathways."
      tags={[
        "Circuit Design",
        "Copper Etching",
        "Solder Masking",
        "Component Assembly",
      ]}
      footerLeft={{ label: "Output", value: "Electronic Circuits" }}
      footerRight={{ label: "Essential For", value: "Modern Electronics" }}
    />
  );
}
