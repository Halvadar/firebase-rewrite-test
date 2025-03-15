import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Event from "./Event.tsx";
import Layout from "./Layout.tsx";
import { Link } from "react-router-dom";
import Random from "./Random.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/e/:slug" element={<Event />} />
          <Route path="/self-route" element={<Random />} />
          <Route
            path="*"
            element={
              <div style={{ padding: "2rem", textAlign: "center" }}>
                <h1>404 - Page Not Found</h1>
                <Link to="/">Go Home</Link>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
