import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Navber from "./Components/Navber.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navber />
  </StrictMode>
);
