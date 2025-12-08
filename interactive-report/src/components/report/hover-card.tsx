import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface BaseCardProps {
  triggerText: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  footerLeft: { label: string; value: string };
  footerRight: { label: string; value: string };
}

export default function BaseHoverCard({
  triggerText,
  category,
  title,
  description,
  tags,
  footerLeft,
  footerRight,
}: BaseCardProps) {
  return (
    <HoverCard openDelay={200}>
      <HoverCardTrigger className="cursor-pointer font-medium text-primary underline decoration-primary/30 decoration-2 underline-offset-4 transition-all duration-300 hover:decoration-primary hover:text-primary/80">
        {triggerText}
      </HoverCardTrigger>

      <HoverCardContent
        className="w-[28rem] p-0 overflow-hidden border border-border/50 bg-card shadow-2xl backdrop-blur-sm"
        sideOffset={10}
      >
        {/* Header / Banner */}
        <div className="relative overflow-hidden bg-primary/5 p-4 pb-6 border-b border-border/40">
          <div className="absolute top-0 right-0 -mt-6 -mr-6 h-32 w-32 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="relative z-10">
            <h4 className="science-gothic-l300 text-sm font-bold uppercase tracking-widest text-primary/70">
              {category}
            </h4>
            <h3 className="science-gothic-l300 mt-1 text-2xl font-normal leading-none text-foreground">
              {title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-4 p-5">
          <p className="google-sans-flex-300 text-lg leading-6 text-foreground/80">
            "{description}"
          </p>

          {/* Tags Grid */}
          <div className="grid grid-cols-2 gap-2">
            {tags.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 rounded-md bg-muted/50 px-3 py-2 transition-colors hover:bg-muted"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-2 flex items-center justify-between border-t border-border pt-3">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase text-muted-foreground font-semibold tracking-wider">
                {footerLeft.label}
              </span>
              <span className="science-gothic-l300 text-lg font-bold text-primary">
                {footerLeft.value}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase text-muted-foreground font-semibold tracking-wider">
                {footerRight.label}
              </span>
              <div className="text-xs font-medium text-foreground">
                {footerRight.value}
              </div>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
