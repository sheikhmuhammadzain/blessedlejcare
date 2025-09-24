import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // If navigating to an anchor on the same page, honor it
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    // Otherwise, scroll to the very top on route change
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname, search, hash]);

  return null;
}
