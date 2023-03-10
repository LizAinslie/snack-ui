import "tailwindcss/tailwind.css";
import { createRoot } from "react-dom/client";
import DemoApp from "./demo/DemoApp";

export { HeaderBar } from "./components/headerBar";
export { Button } from "./components/button";
export { PageContainer } from "./components/pageContainer";

if (import.meta.env.DEV) {
  const container = document.getElementById("root");
  const root = createRoot(container!);
  root.render(<DemoApp />);
}
