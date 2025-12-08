import BaseHoverCard from "@/components/report/hover-card";

export default function Vision2036HoverCard() {
  const visionData = {
    triggerText: "Pillar 1 of Vision 2036",
    category: "Vision 2036",
    title: "Sustainable Economic Development",
    description:
      "By 2036 Botswana will be a high-income country, with an export-led economy underpinned by diversified, exclusive and sustainable growth.",
    tags: [
      "Knowledge Based Economy",
      "Human Capital",
      "Infrastructure Development",
      "Manufacturing & Tourism",
    ],
    footerLeft: {
      label: "Target Status",
      value: "High-Income Country",
    },
    footerRight: {
      label: "Strategy",
      value: "Export-Led Growth",
    },
  };

  return <BaseHoverCard {...visionData} />;
}
