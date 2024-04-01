import React from "react";
import { createRoot } from "react-dom";

const root = createRoot(document.getElementById("root"));

const App = () => {
  return <div>Hello React from Bun</div>;
};

root.remder(<App />);
