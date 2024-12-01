import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/styles.css";

import Portfolio from "./portfolio";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Portfolio />
  </StrictMode>
);