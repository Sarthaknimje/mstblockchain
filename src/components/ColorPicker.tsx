import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, X, Check } from "lucide-react";
import { useThemeColor, COLOR_PRESETS } from "@/contexts/ColorContext";

const ColorPicker = () => {
  const [open, setOpen] = useState(false);
  const { hue, saturation, lightness, setColor } = useThemeColor();
  const currentHSL = `${hue} ${saturation}% ${lightness}%`;

  return (
    <>
      {/* Floating trigger button */}
      <motion.button
        className="fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full shadow-2xl flex items-center justify-center border-2 border-foreground/20 backdrop-blur-sm"
        style={{ backgroundColor: `hsl(${currentHSL})` }}
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      >
        <Palette className="text-primary-foreground" size={22} />
      </motion.button>

      {/* Color picker panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 right-6 z-[100] w-80 bg-background border-2 border-foreground shadow-2xl"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-foreground/10">
              <div>
                <p className="label-style text-primary mb-1">Theme Engine</p>
                <p className="text-xs font-medium text-on-surface-variant">Pick a color. Transform everything.</p>
              </div>
              <button onClick={() => setOpen(false)} className="hover:text-primary transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Color preview bar */}
            <div
              className="h-3 w-full transition-colors duration-500"
              style={{ background: `linear-gradient(90deg, hsl(${hue} ${saturation}% ${Math.max(lightness - 15, 15)}%), hsl(${currentHSL}), hsl(${hue} ${Math.min(saturation + 10, 100)}% ${Math.min(lightness + 15, 85)}%))` }}
            />

            {/* Preset swatches */}
            <div className="p-6">
              <p className="label-style text-foreground mb-4">Presets</p>
              <div className="grid grid-cols-6 gap-3">
                {COLOR_PRESETS.map((preset) => {
                  const isActive = preset.h === hue && preset.s === saturation;
                  return (
                    <motion.button
                      key={preset.name}
                      className="relative w-10 h-10 border border-foreground/20 flex items-center justify-center group"
                      style={{ backgroundColor: preset.hex }}
                      onClick={() => setColor(preset.h, preset.s, preset.l)}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      title={preset.name}
                    >
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <Check size={16} className="text-white drop-shadow-md" />
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Custom HSL sliders */}
            <div className="px-6 pb-6 space-y-4">
              <p className="label-style text-foreground mb-2">Custom</p>
              {/* Hue */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Hue</span>
                  <span className="text-[10px] font-black">{hue}°</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={360}
                  value={hue}
                  onChange={(e) => setColor(Number(e.target.value), saturation, lightness)}
                  className="w-full h-2 appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(90deg, 
                      hsl(0 ${saturation}% ${lightness}%), 
                      hsl(60 ${saturation}% ${lightness}%), 
                      hsl(120 ${saturation}% ${lightness}%), 
                      hsl(180 ${saturation}% ${lightness}%), 
                      hsl(240 ${saturation}% ${lightness}%), 
                      hsl(300 ${saturation}% ${lightness}%), 
                      hsl(360 ${saturation}% ${lightness}%))`,
                  }}
                />
              </div>
              {/* Saturation */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Saturation</span>
                  <span className="text-[10px] font-black">{saturation}%</span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={100}
                  value={saturation}
                  onChange={(e) => setColor(hue, Number(e.target.value), lightness)}
                  className="w-full h-2 appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(90deg, hsl(${hue} 20% ${lightness}%), hsl(${hue} 100% ${lightness}%))`,
                  }}
                />
              </div>
              {/* Lightness */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Lightness</span>
                  <span className="text-[10px] font-black">{lightness}%</span>
                </div>
                <input
                  type="range"
                  min={25}
                  max={65}
                  value={lightness}
                  onChange={(e) => setColor(hue, saturation, Number(e.target.value))}
                  className="w-full h-2 appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(90deg, hsl(${hue} ${saturation}% 25%), hsl(${hue} ${saturation}% 50%), hsl(${hue} ${saturation}% 65%))`,
                  }}
                />
              </div>
            </div>

            {/* Current value display */}
            <div className="px-6 pb-4 flex items-center gap-3 border-t border-foreground/10 pt-4">
              <div className="w-8 h-8 border border-foreground/20" style={{ backgroundColor: `hsl(${currentHSL})` }} />
              <code className="text-[10px] font-black tracking-wider text-on-surface-variant">
                HSL({hue}, {saturation}%, {lightness}%)
              </code>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ColorPicker;
