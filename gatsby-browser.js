import { createRoot, hydrateRoot } from "react-dom/client";

export const replaceHydrateFunction = () => (element, container) => {
  // For client routes, don't hydrate because the server HTML is invalid.
  // The server HTML is only used for re-direction
  if (false /*Prevent hydration of client only route*/) {
    const root = createRoot(container);
    root.render(element);
    return;
  }
  hydrateRoot(element, container);
};