import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

interface HistoryScreenProps {
  onBack: () => void;
}

const milestones = [
  {
    year: "1957",
    title: "Sputnik 1 Launch",
    description: "First artificial satellite launched by Soviet Union, marking the beginning of space age",
    image: "https://images.unsplash.com/photo-1762452136301-cca9fb2e55a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    year: "1961",
    title: "First Human in Space",
    description: "Yuri Gagarin becomes the first human to journey into outer space",
    image: "https://images.unsplash.com/photo-1614727187346-ec3a009092b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    year: "1969",
    title: "Moon Landing",
    description: "Apollo 11 successfully lands humans on the Moon, Neil Armstrong takes first steps",
    image: "https://images.unsplash.com/photo-1720214658819-2676e74b4c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    year: "1990",
    title: "Hubble Space Telescope",
    description: "NASA launches Hubble, revolutionizing our view of the universe",
    image: "https://images.unsplash.com/photo-1707588883312-5a7e3b31a461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    year: "1998",
    title: "International Space Station",
    description: "First modules of ISS launched, beginning continuous human presence in space",
    image: "https://images.unsplash.com/photo-1762452136301-cca9fb2e55a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    year: "2012",
    title: "Mars Curiosity Rover",
    description: "NASA's Curiosity rover successfully lands on Mars to explore the red planet",
    image: "https://images.unsplash.com/photo-1710676145418-51accf3af505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    year: "2020",
    title: "SpaceX Crew Dragon",
    description: "First commercial spacecraft to carry humans to the International Space Station",
    image: "https://images.unsplash.com/photo-1720214658819-2676e74b4c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
];

export function HistoryScreen({ onBack }: HistoryScreenProps) {
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
            <h1 className="text-2xl font-bold text-white">Space History</h1>
            <p className="text-gray-400 text-sm">Milestones of Exploration</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="px-6 py-6">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[21px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6A5ACD] via-[#4169E1] to-[#FFD700]" />

          {/* Timeline items */}
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 w-11 h-11 rounded-full bg-gradient-to-br from-[#6A5ACD] to-[#FFD700] flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <div className="w-5 h-5 rounded-full bg-white" />
                </div>

                {/* Card */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-xl">
                  <div className="h-32 overflow-hidden">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-full object-cover opacity-60"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-[#FFD700] font-bold mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
