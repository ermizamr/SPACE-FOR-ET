import { motion } from "motion/react";
import { ArrowLeft, Satellite, Eye, Rocket, MapPin } from "lucide-react";
import { useLocation, calculateDistance, ETHIOPIA_COORDS } from "../hooks/useLocation";
import { useEffect, useState } from "react";

interface EthiopiaScreenProps {
  onBack: () => void;
}

const timeline = [
  {
    year: "2019",
    title: "ETRSS-1 Satellite Launch",
    description: "Ethiopia's first Earth observation satellite launched from China, marking the nation's entry into space technology",
    icon: Satellite,
    image: "https://images.unsplash.com/photo-1762452136301-cca9fb2e55a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    year: "2020",
    title: "Entoto Observatory Expansion",
    description: "Ethiopia expands its astronomical research capabilities with upgraded facilities at Entoto Observatory",
    icon: Eye,
    image: "https://images.unsplash.com/photo-1727034393564-dc7b0275686d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    year: "2021",
    title: "Space Science Institute",
    description: "Establishment of dedicated space science and technology research programs in Ethiopian universities",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1707588883312-5a7e3b31a461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
];

export function EthiopiaScreen({ onBack }: EthiopiaScreenProps) {
  const { location, getLocation } = useLocation();
  const [distanceToEthiopia, setDistanceToEthiopia] = useState<number | null>(null);

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (location) {
      const distance = calculateDistance(
        location.latitude,
        location.longitude,
        ETHIOPIA_COORDS.latitude,
        ETHIOPIA_COORDS.longitude
      );
      setDistanceToEthiopia(distance);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#0B1026] pb-24">
      {/* Header with Ethiopia flag colors accent */}
      <div className="sticky top-0 z-10 bg-gradient-to-b from-[#0B1026] to-transparent backdrop-blur-sm">
        <div className="h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600" />
        <div className="px-6 py-4 flex items-center gap-4">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-white">Ethiopia's Journey</h1>
            <p className="text-gray-400 text-sm">Space Exploration Legacy</p>
          </div>
          {distanceToEthiopia !== null && (
            <div className="bg-gradient-to-r from-green-600/20 to-yellow-500/20 px-3 py-1.5 rounded-full border border-yellow-500/30">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-yellow-400" />
                <span className="text-xs text-yellow-400 font-medium">
                  {distanceToEthiopia.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })} km
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-6 py-6">
        <div className="relative h-52 rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1764768467248-6ec6b6c5101c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
            alt="Earth from space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1026] via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              A Growing Space Nation
            </h2>
            <p className="text-gray-200 text-sm">
              Ethiopia's commitment to space science and technology
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="px-6 py-6">
        <h3 className="text-xl font-bold text-white mb-6">Key Milestones</h3>
        <div className="space-y-6">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-xl"
              >
                <div className="flex">
                  {/* Image side */}
                  <div className="w-28 h-28 flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content side */}
                  <div className="flex-1 p-4">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[#FFD700] font-bold text-sm mb-1">
                          {item.year}
                        </div>
                        <h4 className="text-white font-bold text-sm mb-1">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-gray-300 text-xs ml-13">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Future Vision Section */}
      <div className="px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-[#FFD700]/20 to-[#6A5ACD]/20 rounded-3xl p-6 border border-[#FFD700]/30"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-[#6A5ACD] flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Future Vision</h3>
          </div>
          <p className="text-gray-200 mb-4">
            Ethiopia envisions expanding its space capabilities with additional satellites for agriculture, climate monitoring, and telecommunications. Plans include developing local expertise in satellite technology and fostering regional collaboration in space science.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#0B1026]/50 rounded-2xl p-4">
              <div className="text-[#FFD700] font-bold text-2xl mb-1">5+</div>
              <div className="text-gray-300 text-sm">Planned Satellites</div>
            </div>
            <div className="bg-[#0B1026]/50 rounded-2xl p-4">
              <div className="text-[#FFD700] font-bold text-2xl mb-1">2030</div>
              <div className="text-gray-300 text-sm">Target Year</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}