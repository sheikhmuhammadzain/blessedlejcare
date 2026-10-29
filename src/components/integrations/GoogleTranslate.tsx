import { useEffect } from "react";

interface GoogleTranslateProps {
  includedLanguages?: string; // comma-separated (e.g., "pt,es")
  pageLanguage?: string; // default source language (e.g., "en")
  containerId?: string; // DOM id for the translate element
  label?: string;
  variant?: "default" | "compact"; // compact for header
  className?: string; // extra classes on wrapper
  activeWhenMediaQuery?: string; // only activate when media query matches
}

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

export default function GoogleTranslate({
  includedLanguages = "pt,es",
  pageLanguage = "en",
  containerId = "google_translate_element",
  label = "Translate",
  variant = "default",
  className = "",
  activeWhenMediaQuery,
}: GoogleTranslateProps) {
  useEffect(() => {
    function ensureWidgetAt(targetId: string) {
      const container = document.getElementById(targetId);
      if (!container) return;

      // If a widget already exists anywhere, move it here
      const existing = document.querySelector<HTMLDivElement>(".goog-te-gadget");
      if (existing) {
        container.innerHTML = "";
        container.appendChild(existing);
        return;
      }

      // Else, create a new one
      if (
        window.google &&
        window.google.translate &&
        window.google.translate.TranslateElement
      ) {
        container.innerHTML = "";
        new window.google.translate.TranslateElement(
          {
            pageLanguage,
            includedLanguages,
            autoDisplay: false,
          },
          targetId
        );
      }
    }

    // Expose init function for Google script callback
    window.googleTranslateElementInit = () => ensureWidgetAt(containerId);

    // Add script only once
    const existingScript = document.getElementById(
      "google-translate-script"
    ) as HTMLScriptElement | null;

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script already present, try initializing immediately
      ensureWidgetAt(containerId);
    }

    // If activation is gated by a media query, move the widget when it matches
    let mql: MediaQueryList | null = null;
    function handleMediaChange() {
      if (!activeWhenMediaQuery) return;
      if (mql && mql.matches) {
        ensureWidgetAt(containerId);
      }
    }
    if (activeWhenMediaQuery && typeof window !== "undefined" && "matchMedia" in window) {
      mql = window.matchMedia(activeWhenMediaQuery);
      // If it matches now, ensure placement
      if (mql.matches) ensureWidgetAt(containerId);
      mql.addEventListener?.("change", handleMediaChange);
    }

    // No cleanup of the script to avoid re-downloading across route changes
    return () => {
      if (mql) {
        mql.removeEventListener?.("change", handleMediaChange);
      }
    };
  }, [includedLanguages, pageLanguage, containerId, activeWhenMediaQuery]);

  const isCompact = variant === "compact";
  const wrapperClass = isCompact
    ? "inline-flex items-center gap-2 py-0 "
    : "inline-flex items-center gap-3 py-2 ";
  const innerClass = isCompact ? "min-w-[140px] h-8 flex items-center" : "min-w-[180px]";

  return (
    <div className={`${wrapperClass}${className}`} aria-label="Language selector">
      {label ? (
        <span className="text-sm text-slate-600 select-none">{label}:</span>
      ) : null}
      <div id={containerId} className={innerClass} />
    </div>
  );
}
