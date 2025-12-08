import BaseHoverCard from "../hover-card";

export default function AdditiveHoverCard() {
  return (
    <BaseHoverCard
      triggerText="Additive Engineering"
      category="Industry 4.0"
      title="Additive Manufacturing"
      description="The industrial production process commonly known as 3D printing, building objects layer-by-layer from digital 3D models."
      tags={[
        "Rapid Prototyping",
        "Complex Geometries",
        "Waste Reduction",
        "Material Versatility",
      ]}
      footerLeft={{ label: "Methodology", value: "Layer-by-Layer" }}
      footerRight={{ label: "Benefit", value: "Design Freedom" }}
    />
  );
}
