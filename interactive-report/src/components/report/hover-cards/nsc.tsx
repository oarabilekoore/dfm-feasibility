import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function NorthSouthCarrierHoverCard() {
  return (
    <HoverCard openDelay={200}>
      <HoverCardTrigger className="cursor-pointer font-medium text-primary underline decoration-primary/30 decoration-2 underline-offset-4 transition-all duration-300 hover:decoration-primary hover:text-primary/80">
        The North South Carrier (NSC)
      </HoverCardTrigger>

      <HoverCardContent
        className="w-[24rem] p-0 overflow-hidden border border-border/50 bg-card shadow-2xl backdrop-blur-sm"
        sideOffset={10}
      >
        {/* Header / Banner */}
        <div className="relative overflow-hidden bg-primary/5 p-4 pb-6 border-b border-border/40">
          {/* Abstract Background Shape */}
          <div className="absolute top-0 right-0 -mt-6 -mr-6 h-32 w-32 rounded-full bg-primary/10 blur-3xl"></div>

          <h4 className="science-gothic-l300 text-2xl tracking-tight">
            North-South Carrier
          </h4>
          <span className="shadows-into-light-regular text-lg opacity-90">
            Botswana's Water Lifeline
          </span>
        </div>

        {/* Content Body */}
        <div className="space-y-4 p-5">
          <p className="text-sm leading-relaxed text-muted-foreground">
            A{" "}
            <span className="font-semibold text-foreground">360-kilometer</span>{" "}
            pipeline transporting raw water from the water-rich north to the
            arid capital of Gaborone. It is considered the largest engineering
            project ever undertaken in Botswana.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-md bg-muted/50 p-3 transition-colors hover:bg-muted">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                Length
              </div>
              <div className="science-gothic-l300 mt-1 text-lg font-bold text-foreground">
                360 km
              </div>
            </div>

            <div className="rounded-md bg-muted/50 p-3 transition-colors hover:bg-muted">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                Year Commissioned
              </div>
              <div className="science-gothic-l300 mt-1 text-lg font-bold text-foreground">
                2000
              </div>
            </div>

            <div className="rounded-md bg-muted/50 p-3 transition-colors hover:bg-muted">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                Source
              </div>
              <div className="text-sm font-medium text-foreground">
                Letsibogo Dam
              </div>
            </div>

            <div className="rounded-md bg-muted/50 p-3 transition-colors hover:bg-muted">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                Cost (Phase 1)
              </div>
              <div className="text-sm font-medium text-foreground">
                ~$350 Million
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="border-t border-border pt-3">
            <p className="google-sans-flex-300 text-xs text-muted-foreground text-center">
              "Delivering water from the Shashe River to the South."
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
