import { motion } from "motion/react";
import { House, Compass, Newspaper, Flag, Info } from "lucide-react";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "home", icon: House, label: "Home" },
  { id: "explore", icon: Compass, label: "Explore" },
  { id: "news", icon: Newspaper, label: "News" },
  { id: "ethiopia", icon: Flag, label: "Ethiopia" },
  { id: "about", icon: Info, label: "About" },
];

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      {/* Background with blur */}
      <div className="bg-[#0B1026]/80 backdrop-blur-xl border-t border-gray-800">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-around">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className="relative flex flex-col items-center gap-1 min-w-[60px]"
                >
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#6A5ACD] to-[#FFD700] rounded-full"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  
                  {/* Icon with background */}
                  <motion.div
                    className={`relative flex items-center justify-center w-10 h-10 rounded-2xl transition-colors ${
                      isActive
                        ? "bg-gradient-to-br from-[#6A5ACD] to-[#4169E1]"
                        : "bg-transparent"
                    }`}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon
                      className={`w-5 h-5 transition-colors ${
                        isActive ? "text-white" : "text-gray-400"
                      }`}
                    />
                    
                    {/* Glow effect for active tab */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#6A5ACD] to-[#FFD700] rounded-2xl opacity-30 blur-md"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    )}
                  </motion.div>
                  
                  {/* Label */}
                  <span
                    className={`text-xs transition-colors ${
                      isActive ? "text-white font-medium" : "text-gray-400"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}