import { motion } from "motion/react";
import { ArrowLeft, Telescope, Rocket, Globe, Satellite, Star, Moon, Sun, Atom } from "lucide-react";

interface ExploreScreenProps {
  onBack: () => void;
  onSelectTopic?: (topic: string) => void;
}

const topics = [
  { icon: Telescope, title: "Telescopes", color: "from-[#6A5ACD] to-[#4169E1]" },
  { icon: Rocket, title: "Rockets", color: "from-[#4169E1] to-[#1E90FF]" },
  { icon: Globe, title: "Planets", color: "from-[#1E90FF] to-[#00BFFF]" },
  { icon: Satellite, title: "Satellites", color: "from-[#00BFFF] to-[#6A5ACD]" },
  { icon: Star, title: "Stars", color: "from-[#FFD700] to-[#FFA500]" },
  { icon: Moon, title: "Moons", color: "from-[#C0C0C0] to-[#808080]" },
  { icon: Sun, title: "Solar System", color: "from-[#FFA500] to-[#FF8C00]" },
  { icon: Atom, title: "Physics", color: "from-[#6A5ACD] to-[#FFD700]" },
];

export function ExploreScreen({ onBack, onSelectTopic }: ExploreScreenProps) {
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
            <h1 className="text-2xl font-bold text-white">Explore</h1>
            <p className="text-gray-400 text-sm">Learn About Space</p>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="px-6 py-6">
        <div className="bg-gradient-to-br from-[#6A5ACD] to-[#4169E1] rounded-3xl p-6">
          <h2 className="text-2xl font-bold text-white mb-2">
            Interactive Learning
          </h2>
          <p className="text-white/90">
            Tap on any topic to start your cosmic journey
          </p>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-2 gap-4">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSelectTopic?.(topic.title)}
                className="aspect-square rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden shadow-xl cursor-pointer relative"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-20`} />
                
                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-4">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${topic.color} flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-white font-bold text-center">
                    {topic.title}
                  </h3>
                </div>

                {/* Shimmer effect on tap */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                  whileTap={{ opacity: [0, 0.3, 0], x: [-100, 200] }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Featured Section */}
      <div className="px-6 py-6">
        <h3 className="text-xl font-bold text-white mb-4">Did You Know?</h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 border border-[#6A5ACD]/30"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center flex-shrink-0">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Light Speed Facts</h4>
              <p className="text-gray-300 text-sm">
                Light travels at approximately 299,792 kilometers per second. This means the light from the Sun takes about 8 minutes to reach Earth!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}