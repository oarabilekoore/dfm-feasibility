import BaseHoverCard from "../hover-card";

export default function CNCHoverCard() {
  return (
    <BaseHoverCard
      triggerText="CNC Machining"
      category="Manufacturing Tech"
      title="Computer Numerical Control"
      description="A subtractive manufacturing process where pre-programmed computer software dictates the movement of factory tools and machinery."
      tags={[
        "Subtractive Process",
        "G-Code Automation",
        "High Precision",
        "Multi-Axis Control",
      ]}
      footerLeft={{ label: "Precision Level", value: "Micron Scale" }}
      footerRight={{ label: "Application", value: "Prototyping & Production" }}
    />
  );
}
