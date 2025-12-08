import BaseHoverCard from "../hover-card";

export default function BIHHoverCard() {
  return (
    <BaseHoverCard
      triggerText="Botswana Innovation Hub Complex"
      category="Science & Tech"
      title="BIH Science Park"
      description="The premier destination for innovation, technology, and entrepreneurship, fostering a national ecosystem for R&D."
      tags={[
        "Tech Transfer",
        "Innovation Fund",
        "Start-up Incubation",
        "R&D Facilities",
      ]}
      footerLeft={{ label: "Location", value: "Gaborone" }}
      footerRight={{ label: "Focus", value: "Tech & Innovation" }}
    />
  );
}
