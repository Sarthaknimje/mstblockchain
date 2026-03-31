import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ColorContextType = {
  hue: number;
  saturation: number;
  lightness: number;
  setColor: (h: number, s: number, l: number) => void;
};

const ColorContext = createContext<ColorContextType>({
  hue: 359,
  saturation: 79,
  lightness: 53,
  setColor: () => {},
});

export const useThemeColor = () => useContext(ColorContext);

// Preset color swatches
export const COLOR_PRESETS = [
  { name: "Red", h: 359, s: 79, l: 53, hex: "#e72a2d" },
  { name: "Crimson", h: 348, s: 83, l: 47, hex: "#dc143c" },
  { name: "Orange", h: 25, s: 95, l: 53, hex: "#f97316" },
  { name: "Amber", h: 45, s: 93, l: 47, hex: "#e8a308" },
  { name: "Emerald", h: 160, s: 84, l: 39, hex: "#10b981" },
  { name: "Teal", h: 174, s: 72, l: 40, hex: "#1cb5a7" },
  { name: "Cyan", h: 192, s: 91, l: 47, hex: "#0ba5e9" },
  { name: "Blue", h: 221, s: 83, l: 53, hex: "#3b82f6" },
  { name: "Indigo", h: 239, s: 84, l: 67, hex: "#6366f1" },
  { name: "Violet", h: 263, s: 70, l: 50, hex: "#8b5cf6" },
  { name: "Pink", h: 330, s: 81, l: 60, hex: "#ec4899" },
  { name: "Rose", h: 350, s: 89, l: 60, hex: "#f43f5e" },
];

function applyColorToDocument(h: number, s: number, l: number) {
  const root = document.documentElement;
  root.style.setProperty("--primary", `${h} ${s}% ${l}%`);
  root.style.setProperty("--primary-glow", `${h} ${Math.min(s + 10, 100)}% ${Math.min(l + 15, 85)}%`);
  root.style.setProperty("--primary-dark", `${h} ${s}% ${Math.max(l - 15, 15)}%`);
  root.style.setProperty("--ring", `${h} ${s}% ${l}%`);
  root.style.setProperty("--sidebar-ring", `${h} ${s}% ${l}%`);
}

export const ColorProvider = ({ children }: { children: ReactNode }) => {
  const [hue, setHue] = useState(359);
  const [saturation, setSaturation] = useState(79);
  const [lightness, setLightness] = useState(53);

  const setColor = (h: number, s: number, l: number) => {
    setHue(h);
    setSaturation(s);
    setLightness(l);
    applyColorToDocument(h, s, l);
    localStorage.setItem("mst-color", JSON.stringify({ h, s, l }));
  };

  useEffect(() => {
    const saved = localStorage.getItem("mst-color");
    if (saved) {
      const { h, s, l } = JSON.parse(saved);
      setHue(h);
      setSaturation(s);
      setLightness(l);
      applyColorToDocument(h, s, l);
    }
  }, []);

  return (
    <ColorContext.Provider value={{ hue, saturation, lightness, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};
