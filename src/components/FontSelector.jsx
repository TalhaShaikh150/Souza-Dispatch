"use client";

import { useState, useEffect } from "react";
import { Settings, X } from "lucide-react";

const FONTS = [
  { name: "Inter", category: "sans-serif" },
  { name: "Open Sans", category: "sans-serif" },
  { name: "Roboto", category: "sans-serif" },
  { name: "Lato", category: "sans-serif" },
  { name: "Montserrat", category: "sans-serif" },
  { name: "Plus Jakarta Sans", category: "sans-serif" },
  { name: "Work Sans", category: "sans-serif" },
  { name: "Public Sans", category: "sans-serif" },
  { name: "Source Sans 3", category: "sans-serif" },
  { name: "Poppins", category: "sans-serif" },
  { name: "Raleway", category: "sans-serif" },
  { name: "Nunito", category: "sans-serif" },
  { name: "Merriweather", category: "serif" },
  { name: "Playfair Display", category: "serif" },
  { name: "Lora", category: "serif" }
];

export default function FontSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFont, setActiveFont] = useState("Open Sans");

  // Load the font from Google Fonts and apply it
  useEffect(() => {
    if (!activeFont) return;

    const fontString = activeFont.replace(/ /g, "+");
    const linkId = `dynamic-font-${fontString}`;

    // Check if the stylesheet is already in the document
    if (!document.getElementById(linkId)) {
      const link = document.createElement("link");
      link.id = linkId;
      link.rel = "stylesheet";
      link.href = `https://fonts.googleapis.com/css2?family=${fontString}:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,700&display=swap`;
      document.head.appendChild(link);
    }

    // Apply the font to the CSS variables used in globals.css
    document.documentElement.style.setProperty("--font-primary", `"${activeFont}", sans-serif`);
    document.documentElement.style.setProperty("--font-heading", `"${activeFont}", sans-serif`);
    document.documentElement.style.setProperty("--font-heading-alt", `"${activeFont}", sans-serif`);

  }, [activeFont]);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-[#111827] text-white p-4 rounded-full shadow-2xl z-[100] hover:scale-110 transition-transform focus:outline-none"
        aria-label="Open Font Selector"
      >
        <Settings className="w-6 h-6 animate-[spin_4s_linear_infinite]" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 bg-white border border-gray-200 shadow-2xl rounded-2xl w-80 z-[100] overflow-hidden flex flex-col max-h-[80vh]">
      <div className="bg-[#111827] text-white p-4 flex justify-between items-center">
        <h3 className="font-bold text-sm">Theme Settings</h3>
        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 overflow-y-auto bg-gray-50 flex-grow">
        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
          Select Font Family
        </h4>
        <div className="flex flex-col gap-2">
          {FONTS.map((font) => (
            <button
              key={font.name}
              onClick={() => setActiveFont(font.name)}
              className={`text-left px-4 py-2.5 rounded-lg text-sm transition-all ${
                activeFont === font.name
                  ? "bg-brand-primary text-white font-bold shadow-md"
                  : "bg-white border border-gray-200 text-gray-700 hover:border-brand-primary hover:text-brand-primary"
              }`}
              style={{ fontFamily: `"${font.name}", ${font.category}` }}
            >
              {font.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
