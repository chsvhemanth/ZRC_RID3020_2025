import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Force dark theme site-wide by adding the 'dark' class to the document root.
// This ensures the CSS variables defined under `.dark` in `index.css` are used.
if (typeof document !== "undefined") {
	document.documentElement.classList.add("dark");
}

createRoot(document.getElementById("root")!).render(<App />);
