import { useEffect } from "react";

interface GoogleTranslateProps {
  includedLanguages?: string; // comma-separated (e.g., "pt,es")
  pageLanguage?: string; // default source language (e.g., "en")
  containerId?: string; // DOM id for the translate element
  label?: string;
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
}: GoogleTranslateProps) {
  useEffect(() => {
    function initTranslate() {
      if (
        window.google &&
        window.google.translate &&
        window.google.translate.TranslateElement
      ) {
        // Avoid duplicate initialization by clearing the container
        const container = document.getElementById(containerId);
        if (container) container.innerHTML = "";

        new window.google.translate.TranslateElement(
          {
            pageLanguage,
            includedLanguages,
            autoDisplay: false,
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          containerId
        );
      }
    }

    // Expose init function for Google script callback
    window.googleTranslateElementInit = initTranslate;

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
      initTranslate();
    }

    // No cleanup of the script to avoid re-downloading across route changes
  }, [includedLanguages, pageLanguage, containerId]);

  return (
    <div className="w-full flex items-center gap-3 py-2" aria-label="Language selector">
      {label ? (
        <span className="text-sm text-slate-600 select-none">{label}:</span>
      ) : null}
      <div id={containerId} className="min-w-[180px]" />
    </div>
  );
}
