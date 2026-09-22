"use client";

import { useState, useEffect } from "react";
import { X, Type, ChevronDown } from "lucide-react";

const CustomFontSelect = ({ value, onChange, label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selected = options.find(o => o.value === value) || options[0];

  return (
    <div className="relative">
      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">{label}</label>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
           const currentIndex = options.findIndex(o => o.value === value);
           if (e.key === 'ArrowDown') {
             e.preventDefault();
             if (currentIndex < options.length - 1) onChange(options[currentIndex + 1].value);
           }
           if (e.key === 'ArrowUp') {
             e.preventDefault();
             if (currentIndex > 0) onChange(options[currentIndex - 1].value);
           }
        }}
        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2.5 text-sm text-gray-800 outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 text-left flex justify-between items-center transition-all"
      >
        <span>{selected.name}</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>
      
      {isOpen && (
        <div className="absolute top-full mt-1 left-0 w-full bg-white border border-gray-200 shadow-xl rounded-lg max-h-48 overflow-y-auto z-50">
          {options.map((f, idx) => (
             <button
                key={idx}
                onMouseEnter={() => onChange(f.value)} 
                onClick={() => { onChange(f.value); setIsOpen(false); }}
                onFocus={() => onChange(f.value)}
                className={`w-full text-left p-2.5 text-sm hover:bg-gray-50 transition-colors ${f.value === value ? 'bg-gray-50 font-bold text-brand-primary' : 'text-gray-700'}`}
             >
                {f.name}
             </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default function FontSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [fonts, setFonts] = useState({
    heading: "var(--font-merriweather)",
    body: "var(--font-plus-jakarta)",
    button: "var(--font-nunito)",
  });

  const fontOptions = [
    { name: "Nunito (Friendly/Clean)", value: "var(--font-nunito)" },
    { name: "Inter (Modern/Tech)", value: "var(--font-inter)" },
    { name: "Plus Jakarta Sans (SaaS/Modern)", value: "var(--font-plus-jakarta)" },
    { name: "Manrope (Clean/Corporate)", value: "var(--font-manrope)" },
    { name: "Work Sans (Corporate/Solid)", value: "var(--font-work-sans)" },
    { name: "IBM Plex Sans (Engineered/Tech)", value: "var(--font-ibm-plex)" },
    { name: "Public Sans (Neutral/Strong)", value: "var(--font-public-sans)" },
    { name: "Outfit (Geometric/Bold)", value: "var(--font-outfit)" },
    { name: "Poppins (Round/Premium)", value: "var(--font-poppins)" },
    { name: "Montserrat (Classic/Clean)", value: "var(--font-montserrat)" },
    { name: "Oswald (Tall/Impactful)", value: "var(--font-oswald)" },
    { name: "Space Grotesk (Startup/Tech)", value: "var(--font-space-grotesk)" },
    { name: "Syne (Luxury/Artistic)", value: "var(--font-syne)" },
    { name: "Playfair Display (Elegant Serif)", value: "var(--font-playfair)" },
    { name: "Merriweather (Readable Serif)", value: "var(--font-merriweather)" },
    { name: "Lora (Classic Serif)", value: "var(--font-lora)" },
  ];

  // Load saved fonts on mount
  useEffect(() => {
    const saved = localStorage.getItem("site-fonts");
    if (saved) {
      const parsed = JSON.parse(saved);
      setFonts(parsed);
      applyFonts(parsed);
    }
  }, []);

  const applyFonts = (newFonts) => {
    document.documentElement.style.setProperty("--font-heading-var", newFonts.heading);
    document.documentElement.style.setProperty("--font-body-var", newFonts.body);
    document.documentElement.style.setProperty("--font-button-var", newFonts.button);
  };

  const handleFontChange = (type, value) => {
    const newFonts = { ...fonts, [type]: value };
    setFonts(newFonts);
    applyFonts(newFonts);
    localStorage.setItem("site-fonts", JSON.stringify(newFonts));
  };

  return (
    <div className="fixed bottom-24 right-6 z-[100] font-sans flex flex-col items-end">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-white rounded-full shadow-2xl border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Type className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white p-6 rounded-2xl shadow-2xl border border-gray-200 w-[280px]">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Type className="w-5 h-5" /> Typography
          </h3>

          <div className="space-y-4">
            <CustomFontSelect 
              label="Headings" 
              value={fonts.heading} 
              onChange={(val) => handleFontChange("heading", val)} 
              options={fontOptions} 
            />
            
            <CustomFontSelect 
              label="Body Text" 
              value={fonts.body} 
              onChange={(val) => handleFontChange("body", val)} 
              options={fontOptions} 
            />
            
            <CustomFontSelect 
              label="Buttons" 
              value={fonts.button} 
              onChange={(val) => handleFontChange("button", val)} 
              options={fontOptions} 
            />
          </div>
        </div>
      )}
    </div>
  );
}
