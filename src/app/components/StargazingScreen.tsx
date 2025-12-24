import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, MapPin, Compass, Star, Moon, Sun, Navigation } from "lucide-react";
import { useLocation, calculateDistance, ETHIOPIA_COORDS } from "../hooks/useLocation";

interface StargazingScreenProps {
  onBack: () => void;
}

export function StargazingScreen({ onBack }: StargazingScreenProps) {
  const { location, error, loading, getLocation } = useLocation();
  const [distanceToEthiopia, setDistanceToEthiopia] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
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

  // Calculate sun/moon position (simplified)
  const hour = currentTime.getHours();
  const isDaytime = hour >= 6 && hour < 18;

  // Best stargazing times
  const getBestStargazingTime = () => {
    if (hour >= 20 || hour <= 4) {
      return "Excellent time for stargazing!";
    } else if ((hour >= 18 && hour < 20) || (hour > 4 && hour <= 6)) {
      return "Good time for stargazing";
    } else {
      return "Wait for nighttime for best viewing";
    }
  };

  // Simulated visible celestial objects based on time
  const getVisibleObjects = () => {
    const objects = [];
    
    if (!isDaytime) {
      objects.push({ name: "Orion Constellation", visibility: "High", icon: "⭐" });
      objects.push({ name: "Sirius (Brightest Star)", visibility: "High", icon: "✨" });
      objects.push({ name: "Jupiter", visibility: "Medium", icon: "🪐" });
      
      if (hour >= 21 || hour <= 3) {
        objects.push({ name: "Andromeda Galaxy", visibility: "Medium", icon: "🌌" });
        objects.push({ name: "Pleiades (Seven Sisters)", visibility: "High", icon: "⭐" });
      }
    }
    
    return objects;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="min-h-screen bg-gradient-to-b from-[#0B1026] via-[#1a1447] to-[#0B1026] pb-24"
    >
      {/* Header */}
      <div className="sticky top-0 z-10 bg-[#0B1026]/80 backdrop-blur-lg border-b border-[#6A5ACD]/20">
        <div className="flex items-center gap-4 p-4">
          <button
            onClick={onBack}
            className="p-2 rounded-full hover:bg-[#6A5ACD]/20 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-[#FFD700]" />
          </button>
          <h1 className="font-['Orbitron'] text-white">Stargazing Guide</h1>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Location Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-[#6A5ACD]/20 to-[#0B1026]/40 rounded-3xl p-6 border border-[#6A5ACD]/30"
        >
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-[#FFD700]" />
            <h2 className="font-['Orbitron'] text-lg text-white">Your Location</h2>
          </div>

          {!location && !loading && (
            <button
              onClick={getLocation}
              className="w-full bg-gradient-to-r from-[#6A5ACD] to-[#8B7DD8] text-white py-3 px-6 rounded-full font-medium hover:shadow-lg hover:shadow-[#6A5ACD]/50 transition-all"
            >
              <div className="flex items-center justify-center gap-2">
                <Navigation className="w-5 h-5" />
                Enable Location
              </div>
            </button>
          )}

          {loading && (
            <div className="text-center text-[#6A5ACD] py-4">
              <div className="animate-spin inline-block w-8 h-8 border-4 border-current border-t-transparent rounded-full" />
              <p className="mt-2">Getting your location...</p>
            </div>
          )}

          {error && (
            <div className="text-red-400 text-sm bg-red-500/10 p-4 rounded-2xl">
              <p className="font-medium">Location Error</p>
              <p className="mt-1">{error.message}</p>
              <p className="mt-2 text-xs text-red-300">
                Please enable location permissions in your browser settings
              </p>
            </div>
          )}

          {location && (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0B1026]/60 p-4 rounded-2xl">
                  <p className="text-[#6A5ACD] text-sm mb-1">Latitude</p>
                  <p className="text-white font-mono text-lg">{location.latitude.toFixed(4)}°</p>
                </div>
                <div className="bg-[#0B1026]/60 p-4 rounded-2xl">
                  <p className="text-[#6A5ACD] text-sm mb-1">Longitude</p>
                  <p className="text-white font-mono text-lg">{location.longitude.toFixed(4)}°</p>
                </div>
              </div>

              {distanceToEthiopia !== null && (
                <div className="bg-gradient-to-r from-[#FFD700]/10 to-[#6A5ACD]/10 p-4 rounded-2xl border border-[#FFD700]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Compass className="w-5 h-5 text-[#FFD700]" />
                    <p className="text-white font-medium">Distance to Ethiopia</p>
                  </div>
                  <p className="text-3xl font-['Orbitron'] text-[#FFD700]">
                    {distanceToEthiopia.toLocaleString(undefined, {
                      maximumFractionDigits: 0,
                    })}{" "}
                    <span className="text-lg">km</span>
                  </p>
                  <p className="text-[#6A5ACD] text-sm mt-1">
                    From {ETHIOPIA_COORDS.name}
                  </p>
                </div>
              )}

              <div className="text-xs text-[#6A5ACD]/70 text-center">
                Accuracy: ±{location.accuracy.toFixed(0)}m
              </div>
            </div>
          )}
        </motion.div>

        {/* Current Sky Conditions */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-[#6A5ACD]/20 to-[#0B1026]/40 rounded-3xl p-6 border border-[#6A5ACD]/30"
        >
          <div className="flex items-center gap-3 mb-4">
            {isDaytime ? (
              <Sun className="w-6 h-6 text-[#FFD700]" />
            ) : (
              <Moon className="w-6 h-6 text-[#FFD700]" />
            )}
            <h2 className="font-['Orbitron'] text-lg text-white">Current Conditions</h2>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[#6A5ACD]">Local Time</span>
              <span className="text-white font-mono text-lg">
                {currentTime.toLocaleTimeString()}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-[#6A5ACD]">Sky Status</span>
              <span className="text-white">{isDaytime ? "☀️ Daytime" : "🌙 Nighttime"}</span>
            </div>

            <div className="bg-gradient-to-r from-[#FFD700]/10 to-[#6A5ACD]/10 p-4 rounded-2xl border border-[#FFD700]/20">
              <p className="text-white font-medium">{getBestStargazingTime()}</p>
            </div>
          </div>
        </motion.div>

        {/* Visible Objects */}
        {!isDaytime && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-[#6A5ACD]/20 to-[#0B1026]/40 rounded-3xl p-6 border border-[#6A5ACD]/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-6 h-6 text-[#FFD700]" />
              <h2 className="font-['Orbitron'] text-lg text-white">Visible Tonight</h2>
            </div>

            <div className="space-y-3">
              {getVisibleObjects().map((obj, index) => (
                <motion.div
                  key={obj.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-between bg-[#0B1026]/60 p-4 rounded-2xl hover:bg-[#0B1026]/80 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{obj.icon}</span>
                    <div>
                      <p className="text-white font-medium">{obj.name}</p>
                      <p className="text-[#6A5ACD] text-sm">Visibility: {obj.visibility}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Stargazing Tips */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-[#FFD700]/10 to-[#6A5ACD]/10 rounded-3xl p-6 border border-[#FFD700]/20"
        >
          <h3 className="font-['Orbitron'] text-white mb-4">Stargazing Tips</h3>
          <ul className="space-y-3 text-[#6A5ACD]">
            <li className="flex items-start gap-3">
              <span className="text-[#FFD700] mt-1">•</span>
              <span>Find a location away from city lights for best visibility</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFD700] mt-1">•</span>
              <span>Allow 20-30 minutes for your eyes to adjust to darkness</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFD700] mt-1">•</span>
              <span>Use a red flashlight to preserve night vision</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFD700] mt-1">•</span>
              <span>Check weather forecasts for clear sky conditions</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
