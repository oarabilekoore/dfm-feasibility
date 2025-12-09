import { ThemeToggle } from "./themetoggle";

export function NavigationBar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="shrink-0 cursor-pointer">
            <span className="flex items-center gap-2 no-underline">
              <span className="text-2xl font-bold text-primary science-gothic-l300">
                Oarabile Koore
              </span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {/* UPDATED LINK SECTION */}
            <a
              href="/GEME_201_Report.pdf"
              download="GEME_201_Report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
            >
              Download Original Report
            </a>

            <div className="ml-4 border-l border-border pl-6">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
