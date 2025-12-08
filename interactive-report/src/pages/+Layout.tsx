import { NavigationBar } from "@/components/custom-ui/navigationbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavigationBar />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}
