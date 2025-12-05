import { NavigationBar } from "@/components/navbar";
import { AboutPage } from "@/pages/about";
import { ArticlePage } from "@/pages/article";
import { BrowserRouter, Route, render } from "@materialthing/core";

function App() {
  return (
    <div class="min-h-screen bg-white">
      <NavigationBar />
      <BrowserRouter>
        <Route path="/" component={ArticlePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/original-report" component={AboutPage} />
      </BrowserRouter>
    </div>
  );
}

const root = document.getElementById("app");
if (root) {
  render(<App />, root);
}
