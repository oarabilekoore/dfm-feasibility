import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./pages/+Layout";
import Article from "./pages/article";
import "katex/dist/katex.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/dfm-feasibility/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Article />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
