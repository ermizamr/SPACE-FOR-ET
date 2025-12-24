import { motion } from "motion/react";
import { ArrowLeft, Lightbulb, Brain, Atom, Zap } from "lucide-react";

interface BreakthroughsScreenProps {
  onBack: () => void;
}

const breakthroughs = [
  {
    icon: Atom,
    title: "Discovery of Exoplanets",
    year: "1992",
    description: "First confirmed detection of planets outside our solar system, revolutionizing our understanding of planetary systems",
    image: "https://images.unsplash.com/photo-1576180525792-82cdc0e2b29e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    color: "from-[#6A5ACD] to-[#4169E1]",
  },
  {
    icon: Brain,
    title: "Dark Matter Evidence",
    year: "1970s",
    description: "Vera Rubin's observations provided compelling evidence for dark matter, revealing that most of the universe is invisible",
    image: "https://images.unsplash.com/photo-1576180525792-82cdc0e2b29e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    color: "from-[#4169E1] to-[#1E90FF]",
  },
  {
    icon: Zap,
    title: "Gravitational Waves Detection",
    year: "2015",
    description: "LIGO detected gravitational waves for the first time, confirming Einstein's prediction and opening a new era of astronomy",
    image: "https://images.unsplash.com/photo-1707588883312-5a7e3b31a461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    color: "from-[#1E90FF] to-[#00BFFF]",
  },
  {
    icon: Lightbulb,
    title: "Cosmic Microwave Background",
    year: "1964",
    description: "Discovery of CMB radiation provided strong evidence for the Big Bang theory and early universe conditions",
    image: "https://images.unsplash.com/photo-1576180525792-82cdc0e2b29e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    color: "from-[#00BFFF] to-[#6A5ACD]",
  },
  {
    icon: Atom,
    title: "Accelerating Universe",
    year: "1998",
    description: "Observations of distant supernovae revealed that the universe's expansion is accelerating, leading to the concept of dark energy",
    image: "https://images.unsplash.com/photo-1576180525792-82cdc0e2b29e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    color: "from-[#FFD700] to-[#FFA500]",
  },
  {
    icon: Brain,
    title: "Water on Mars",
    year: "2015",
    description: "NASA confirmed the presence of liquid water on Mars, significantly increasing the possibility of past or present life",
    image: "https://images.unsplash.com/photo-1710676145418-51accf3af505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    color: "from-[#FFA500] to-[#FF8C00]",
  },
];

export function BreakthroughsScreen({ onBack }: BreakthroughsScreenProps) {
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
            <h1 className="text-2xl font-bold text-white">Breakthroughs</h1>
            <p className="text-gray-400 text-sm">Revolutionary Discoveries</p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-6 py-6">
        <div className="bg-gradient-to-br from-[#6A5ACD] to-[#4169E1] rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              Scientific Revelations
            </h2>
          </div>
          <p className="text-white/90">
            Discoveries that transformed our understanding of the cosmos
          </p>
        </div>
      </div>

      {/* Breakthroughs Grid */}
      <div className="px-6 py-6 space-y-6">
        {breakthroughs.map((breakthrough, index) => {
          const Icon = breakthrough.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Image header with gradient overlay */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={breakthrough.image}
                  alt={breakthrough.title}
                  className="w-full h-full object-cover opacity-50"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${breakthrough.color} opacity-40`} />
                
                {/* Icon badge */}
                <div className="absolute top-4 right-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${breakthrough.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#FFD700] text-[#0B1026] text-xs font-bold">
                    {breakthrough.year}
                  </span>
                  <h3 className="text-white font-bold text-xl flex-1">
                    {breakthrough.title}
                  </h3>
                </div>
                <p className="text-gray-300">
                  {breakthrough.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Fun Fact */}
      <div className="px-6 py-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-[#FFD700]/20 to-[#6A5ACD]/20 rounded-3xl p-6 border border-[#FFD700]/30"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Did You Know?</h4>
              <p className="text-gray-200 text-sm">
                Many of these breakthroughs required decades of theoretical work before technology caught up to make observations possible. The patience and dedication of scientists across generations made these discoveries achievable.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
