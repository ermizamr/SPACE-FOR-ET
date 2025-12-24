import { motion } from "motion/react";
import { Clock, Sparkles, Newspaper, Flag, Navigation } from "lucide-react";

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

const cards = [
  {
    id: "history",
    icon: Clock,
    title: "Space History",
    description: "Milestones that shaped space exploration",
    gradient: "from-[#6A5ACD] to-[#4169E1]",
    image: "https://images.unsplash.com/photo-1614727187346-ec3a009092b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: "breakthroughs",
    icon: Sparkles,
    title: "Amazing Breakthroughs",
    description: "Revolutionary discoveries in space science",
    gradient: "from-[#4169E1] to-[#1E90FF]",
    image: "https://images.unsplash.com/photo-1707588883312-5a7e3b31a461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: "stargazing",
    icon: Navigation,
    title: "Stargazing Guide",
    description: "Find stars and planets from your location",
    gradient: "from-[#FFD700] to-[#FF8C00]",
    image: "https://images.unsplash.com/photo-1519810755548-39cd217da494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: "news",
    icon: Newspaper,
    title: "Space News",
    description: "Latest updates from around the cosmos",
    gradient: "from-[#1E90FF] to-[#00BFFF]",
    image: "https://images.unsplash.com/photo-1762452136301-cca9fb2e55a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: "ethiopia",
    icon: Flag,
    title: "Ethiopia Spotlight",
    description: "Ethiopia's journey in space exploration",
    gradient: "from-[#00A859] to-[#009E49]",
    image: "https://images.unsplash.com/photo-1764768467248-6ec6b6c5101c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
];

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-[#0B1026] pb-24">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1026]" />
        <img
          src="https://images.unsplash.com/photo-1576180525792-82cdc0e2b29e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
          alt="Space"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome Explorer
            </h1>
            <p className="text-gray-300">
              Begin your journey through space and time
            </p>
          </motion.div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="px-6 py-6 space-y-4">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate(card.id)}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl cursor-pointer"
            >
              {/* Background image */}
              <div className="absolute inset-0 opacity-20">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-30`} />

              {/* Content */}
              <div className="relative p-6 flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{card.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}