import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronRight, Telescope, Rocket, Newspaper, MapPin } from "lucide-react";

interface OnboardingProps {
  onComplete: () => void;
}

const slides = [
  {
    icon: Telescope,
    title: "Discover Space History",
    description: "Journey through humanity's greatest achievements in space exploration",
    gradient: "from-[#6A5ACD] to-[#4169E1]",
  },
  {
    icon: Rocket,
    title: "Amazing Breakthroughs",
    description: "Learn about groundbreaking discoveries that changed our understanding of the universe",
    gradient: "from-[#4169E1] to-[#1E90FF]",
  },
  {
    icon: Newspaper,
    title: "Real-Time Space News",
    description: "Stay updated with the latest news and discoveries from space agencies worldwide",
    gradient: "from-[#1E90FF] to-[#6A5ACD]",
  },
  {
    icon: MapPin,
    title: "Ethiopia's Space Journey",
    description: "Explore Ethiopia's contributions and growing role in space science and technology",
    gradient: "from-[#FFD700] to-[#6A5ACD]",
  },
];

export function Onboarding({ onComplete }: OnboardingProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="fixed inset-0 bg-[#0B1026] flex flex-col">
      {/* Skip button */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={handleSkip}
          className="text-[#6A5ACD] hover:text-[#FFD700] transition-colors"
        >
          Skip
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="flex-1 flex flex-col items-center justify-center px-8"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          {/* Icon */}
          <motion.div
            className={`w-32 h-32 rounded-full bg-gradient-to-br ${slide.gradient} flex items-center justify-center mb-8 shadow-2xl`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            <Icon className="w-16 h-16 text-white" />
          </motion.div>

          {/* Content */}
          <motion.div
            className="text-center max-w-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">{slide.title}</h2>
            <p className="text-gray-300">{slide.description}</p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom section */}
      <div className="px-8 pb-12">
        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-[#FFD700]"
                  : "w-2 bg-gray-600"
              }`}
            />
          ))}
        </div>

        {/* Next button */}
        <motion.button
          onClick={handleNext}
          className="w-full bg-gradient-to-r from-[#6A5ACD] to-[#4169E1] text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30"
          whileTap={{ scale: 0.95 }}
        >
          {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}
