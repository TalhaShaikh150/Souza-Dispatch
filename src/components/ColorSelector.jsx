"use client";

import { useState, useEffect } from "react";
import { Palette, X, RotateCcw } from "lucide-react";

const PRESETS = [
  { name: "Client Selected (Deep Blue/Cyan)", primary: "#102457", secondary: "#21a1de" },
  { name: "Original Green/Yellow", primary: "#166534", secondary: "#facc15" },
  { name: "Corporate Navy/Teal", primary: "#1e3a8a", secondary: "#2dd4bf" },
  { name: "Ocean Blue/Coral", primary: "#0ea5e9", secondary: "#f43f5e" },
  { name: "Charcoal/Neon Green", primary: "#1f2937", secondary: "#22c55e" },
  { name: "Luxury Gold/Obsidian", primary: "#d4af37", secondary: "#18181b" },
  { name: "Royal Purple/Gold", primary: "#6d28d9", secondary: "#fbbf24" },
  { name: "Electric Blue/Bright Yellow", primary: "#2563eb", secondary: "#fef08a" },
  { name: "Indigo/Mint", primary: "#4338ca", secondary: "#6ee7b7" },
  { name: "Emerald/Ice Blue", primary: "#10b981", secondary: "#bae6fd" },
  { name: "Deep Rose/Cream", primary: "#be123c", secondary: "#fef3c7" },
  { name: "Vibrant Violet/Peach", primary: "#8b5cf6", secondary: "#fed7aa" },
  { name: "Sunset Amber/Deep Maroon", primary: "#fb923c", secondary: "#7f1d1d" },
  { name: "Cobalt/Lime", primary: "#0369a1", secondary: "#84cc16" },
  { name: "Midnight Slate/Orange", primary: "#0f172a", secondary: "#f97316" },
  { name: "Forest Green/Sand", primary: "#064e3b", secondary: "#fcd34d" },
  { name: "Autumn Rust/Olive", primary: "#9a3412", secondary: "#4d7c0f" },
  { name: "Terracotta/Sage", primary: "#c2410c", secondary: "#84cc16" },
  { name: "Cyberpunk Pink/Cyan", primary: "#ec4899", secondary: "#06b6d4" },
  { name: "Ruby Red/Ash", primary: "#b91c1c", secondary: "#9ca3af" },
  { name: "Monochrome Noir", primary: "#111827", secondary: "#4b5563" }
];

export default function ColorSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [primary, setPrimary] = useState("#102457");
  const [secondary, setSecondary] = useState("#21a1de");

  useEffect(() => {
    // Load saved colors on mount
    const savedPrimary = localStorage.getItem("brand-primary");
    const savedSecondary = localStorage.getItem("brand-secondary");

    if (savedPrimary) setPrimary(savedPrimary);
    if (savedSecondary) setSecondary(savedSecondary);
  }, []);

  useEffect(() => {
    // Apply colors to root
    document.documentElement.style.setProperty("--color-primary", primary);
    document.documentElement.style.setProperty("--color-secondary", secondary);
    
    // Save to local storage for hydration
    localStorage.setItem("brand-primary", primary);
    localStorage.setItem("brand-secondary", secondary);
  }, [primary, secondary]);

  const resetToDefault = () => {
    setPrimary("#102457");
    setSecondary("#21a1de");
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 left-6 z-50 bg-white text-gray-800 p-4 rounded-full shadow-2xl border border-gray-100 hover:scale-105 transition-all ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-label="Open Theme Selector"
      >
        <Palette className="w-6 h-6 text-brand-primary" />
      </button>

      {/* Selector Panel */}
      <div 
        className={`fixed bottom-6 left-6 w-80 bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100 z-50 transition-all duration-300 transform origin-bottom-left ${
          isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
        }`}
      >
        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50 rounded-t-2xl">
          <div className="flex items-center gap-2 text-gray-800 font-bold">
            <Palette className="w-4 h-4 text-brand-primary" />
            Theme Colors
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-6">
          {/* Custom Picker */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Primary Color</label>
              <div className="flex items-center gap-3">
                <input 
                  type="color" 
                  value={primary} 
                  onChange={(e) => setPrimary(e.target.value)}
                  className="w-10 h-10 rounded cursor-pointer border-0 p-0 shadow-sm"
                />
                <input 
                  type="text" 
                  value={primary.toUpperCase()} 
                  onChange={(e) => setPrimary(e.target.value)}
                  className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-brand-primary font-mono uppercase"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Secondary / Accent</label>
              <div className="flex items-center gap-3">
                <input 
                  type="color" 
                  value={secondary} 
                  onChange={(e) => setSecondary(e.target.value)}
                  className="w-10 h-10 rounded cursor-pointer border-0 p-0 shadow-sm"
                />
                <input 
                  type="text" 
                  value={secondary.toUpperCase()} 
                  onChange={(e) => setSecondary(e.target.value)}
                  className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-brand-primary font-mono uppercase"
                />
              </div>
            </div>
          </div>

          {/* Presets */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Professional Presets</label>
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {PRESETS.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => {
                    setPrimary(preset.primary);
                    setSecondary(preset.secondary);
                  }}
                  className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors group"
                >
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{preset.name}</span>
                  <div className="flex shadow-sm rounded overflow-hidden border border-gray-200">
                    <div className="w-5 h-5" style={{ backgroundColor: preset.primary }} />
                    <div className="w-5 h-5" style={{ backgroundColor: preset.secondary }} />
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <button 
            onClick={resetToDefault}
            className="w-full flex justify-center items-center gap-2 py-2.5 text-sm font-bold text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
          >
            <RotateCcw className="w-4 h-4" />
            Reset to Default
          </button>
        </div>
      </div>
    </>
  );
}
