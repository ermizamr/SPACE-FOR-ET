import { motion } from "motion/react";
import { ArrowLeft, Palette, Type, Layout, Sparkles } from "lucide-react";

interface DesignSystemScreenProps {
  onBack: () => void;
}

export function DesignSystemScreen({ onBack }: DesignSystemScreenProps) {
  const colors = [
    { name: "Dark Blue", hex: "#0B1026", desc: "Primary background" },
    { name: "Nebula Purple", hex: "#6A5ACD", desc: "Primary accent" },
    { name: "Royal Blue", hex: "#4169E1", desc: "Secondary accent" },
    { name: "Star Gold", hex: "#FFD700", desc: "Highlight color" },
    { name: "Deep Space", hex: "#1a1a3e", desc: "Secondary background" },
    { name: "Light Blue", hex: "#1E90FF", desc: "Info color" },
    { name: "Orange", hex: "#FFA500", desc: "Warm accent" },
  ];

  const gradients = [
    { name: "Primary", from: "#6A5ACD", to: "#4169E1" },
    { name: "Secondary", from: "#4169E1", to: "#1E90FF" },
    { name: "Warm", from: "#FFD700", to: "#FFA500" },
    { name: "Cool", from: "#1E90FF", to: "#6A5ACD" },
  ];

  return (
    <div className="min-h-screen bg-[#0B1026] pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-b from-[#0B1026] to-transparent backdrop-blur-sm">
        <div className="px-6 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-white">Design System</h1>
            <p className="text-gray-400 text-sm">For Flutter Implementation</p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="px-6 py-6">
        <div className="bg-gradient-to-br from-[#6A5ACD] to-[#4169E1] rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-8 h-8 text-white" />
            <h2 className="text-2xl font-bold text-white">Complete Style Guide</h2>
          </div>
          <p className="text-white/90">
            All design tokens, colors, typography, and component styles for implementing SPACE for ET in Flutter
          </p>
        </div>
      </div>

      {/* Color Palette */}
      <div className="px-6 py-6">
        <div className="flex items-center gap-3 mb-4">
          <Palette className="w-6 h-6 text-[#FFD700]" />
          <h3 className="text-xl font-bold text-white">Color Palette</h3>
        </div>
        
        <div className="space-y-3">
          {colors.map((color, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 flex items-center gap-4"
            >
              <div
                className="w-16 h-16 rounded-2xl shadow-lg flex-shrink-0"
                style={{ backgroundColor: color.hex }}
              />
              <div className="flex-1">
                <div className="text-white font-bold">{color.name}</div>
                <div className="text-[#FFD700] text-sm font-mono">{color.hex}</div>
                <div className="text-gray-400 text-xs mt-1">{color.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gradients */}
      <div className="px-6 py-6">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-6 h-6 text-[#FFD700]" />
          <h3 className="text-xl font-bold text-white">Gradients</h3>
        </div>
        
        <div className="space-y-3">
          {gradients.map((gradient, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4"
            >
              <div className="text-white font-bold mb-2">{gradient.name} Gradient</div>
              <div
                className="h-16 rounded-xl shadow-lg"
                style={{
                  background: `linear-gradient(to right, ${gradient.from}, ${gradient.to})`,
                }}
              />
              <div className="flex justify-between mt-2 text-xs">
                <span className="text-gray-400 font-mono">{gradient.from}</span>
                <span className="text-gray-400">→</span>
                <span className="text-gray-400 font-mono">{gradient.to}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Typography */}
      <div className="px-6 py-6">
        <div className="flex items-center gap-3 mb-4">
          <Type className="w-6 h-6 text-[#FFD700]" />
          <h3 className="text-xl font-bold text-white">Typography</h3>
        </div>
        
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 space-y-4">
          <div>
            <div className="text-gray-400 text-sm mb-1">Headline Font</div>
            <div className="text-white text-2xl font-bold">Orbitron</div>
            <div className="text-gray-500 text-xs font-mono mt-1">font-family: 'Orbitron', sans-serif;</div>
          </div>
          
          <div className="h-px bg-gray-700" />
          
          <div>
            <div className="text-gray-400 text-sm mb-1">Body Font</div>
            <div className="text-white text-lg">Inter</div>
            <div className="text-gray-500 text-xs font-mono mt-1">font-family: 'Inter', sans-serif;</div>
          </div>
          
          <div className="h-px bg-gray-700" />
          
          <div className="space-y-2">
            <div className="text-gray-400 text-sm mb-2">Font Sizes</div>
            <div className="text-white text-xs">12px - Small text</div>
            <div className="text-white text-sm">14px - Body text</div>
            <div className="text-white">16px - Default</div>
            <div className="text-white text-lg">18px - Large body</div>
            <div className="text-white text-xl">20px - Heading 3</div>
            <div className="text-white text-2xl">24px - Heading 2</div>
            <div className="text-white text-3xl">30px - Heading 1</div>
          </div>
        </div>
      </div>

      {/* Spacing & Layout */}
      <div className="px-6 py-6">
        <div className="flex items-center gap-3 mb-4">
          <Layout className="w-6 h-6 text-[#FFD700]" />
          <h3 className="text-xl font-bold text-white">Spacing & Border Radius</h3>
        </div>
        
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 space-y-4">
          <div>
            <div className="text-gray-400 text-sm mb-3">Spacing Scale</div>
            <div className="space-y-2 text-white text-sm">
              <div>4px - Extra small gap</div>
              <div>8px - Small gap</div>
              <div>12px - Base padding</div>
              <div>16px - Medium padding</div>
              <div>24px - Large padding (1.5rem)</div>
              <div>32px - Extra large padding</div>
            </div>
          </div>
          
          <div className="h-px bg-gray-700" />
          
          <div>
            <div className="text-gray-400 text-sm mb-3">Border Radius</div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#6A5ACD] rounded-lg" />
                <span className="text-white text-sm">12px - Medium (Cards, inputs)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#4169E1] rounded-2xl" />
                <span className="text-white text-sm">16px - Large (Buttons, icons)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#1E90FF] rounded-3xl" />
                <span className="text-white text-sm">24px - Extra large (Main cards)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#FFD700] rounded-full" />
                <span className="text-white text-sm">Full - Circular (Avatar, badges)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Component Guidelines */}
      <div className="px-6 py-6">
        <h3 className="text-xl font-bold text-white mb-4">Component Guidelines</h3>
        
        <div className="space-y-3">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5">
            <div className="text-white font-bold mb-2">Cards</div>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• 24px border radius</li>
              <li>• Gradient backgrounds from gray-900 to gray-800</li>
              <li>• 16-24px padding</li>
              <li>• Shadow: shadow-xl</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5">
            <div className="text-white font-bold mb-2">Buttons</div>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• 16px border radius (rounded-2xl)</li>
              <li>• Gradient: from-[#6A5ACD] to-[#4169E1]</li>
              <li>• 16px vertical padding, full width</li>
              <li>• Scale animation on tap: 0.95</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5">
            <div className="text-white font-bold mb-2">Icons</div>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• 40-56px container size</li>
              <li>• 16px border radius</li>
              <li>• Gradient backgrounds</li>
              <li>• 20-28px icon size</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5">
            <div className="text-white font-bold mb-2">Bottom Navigation</div>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Backdrop blur effect</li>
              <li>• Active state: gradient background</li>
              <li>• Top indicator line (4px height)</li>
              <li>• 5 tabs maximum</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Animations */}
      <div className="px-6 py-6">
        <h3 className="text-xl font-bold text-white mb-4">Animations</h3>
        
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 space-y-3 text-white text-sm">
          <div>
            <div className="font-bold mb-1">Card Tap</div>
            <div className="text-gray-300">Scale: 0.98 on tap</div>
          </div>
          <div className="h-px bg-gray-700" />
          <div>
            <div className="font-bold mb-1">Fade In</div>
            <div className="text-gray-300">Duration: 0.5-0.8s, staggered delays</div>
          </div>
          <div className="h-px bg-gray-700" />
          <div>
            <div className="font-bold mb-1">Slide In</div>
            <div className="text-gray-300">Y: 20-30px, with fade</div>
          </div>
          <div className="h-px bg-gray-700" />
          <div>
            <div className="font-bold mb-1">Parallax Stars</div>
            <div className="text-gray-300">Subtle background movement</div>
          </div>
          <div className="h-px bg-gray-700" />
          <div>
            <div className="font-bold mb-1">Glow Effect</div>
            <div className="text-gray-300">Pulsing opacity for active elements</div>
          </div>
        </div>
      </div>
    </div>
  );
}
