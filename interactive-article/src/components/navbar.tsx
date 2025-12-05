import { Link } from "@materialthing/core/router";

export function NavigationBar() {
  return (
    <nav class="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="shrink-0 cursor-pointer">
            <Link to="/" class="flex items-center gap-2 no-underline">
              <span class="science-gothic-l300 text-2xl font-bold text-violet-600">
                Oarabile Koore
              </span>
            </Link>
          </div>

          <div class="hidden md:flex items-center gap-8">
            <NavLink to="/original-report">
              Dowload or View Original Report
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: any }) {
  return (
    <Link
      to={to}
      class="text-sm font-medium text-gray-600 transition-colors hover:text-violet-600"
    >
      {children}
    </Link>
  );
}
