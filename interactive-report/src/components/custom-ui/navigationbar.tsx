import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { ThemeToggle } from "./themetoggle";

export function NavigationBar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="shrink-0 cursor-pointer">
            <Link to="/" className="flex items-center gap-2 no-underline">
              <span className="text-2xl font-bold text-primary science-gothic-l300">
                Oarabile Koore
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavLink to="../assets/GEME 201 ASSIGNMENT FEASIBILITY REPORT.pdf">
              Download Report
            </NavLink>

            <RouterNavLink to="/metrics-game">
              <span className="text-sm font-medium transition-colors hover:text-primary cursor-pointer">
                Adjust The Metrics - Can you make DFMPE profitable?
              </span>
            </RouterNavLink>

            <div className="ml-4 border-l border-border pl-6">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Helper component for active states
function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `text-sm font-medium transition-colors hover:text-primary ${
          isActive ? "text-primary font-bold" : "text-muted-foreground"
        }`
      }
    >
      {children}
    </RouterNavLink>
  );
}
