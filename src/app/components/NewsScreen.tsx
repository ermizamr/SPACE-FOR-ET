import { motion } from "motion/react";
import { ArrowLeft, Clock } from "lucide-react";
import { useState } from "react";

interface NewsScreenProps {
  onBack: () => void;
}

const newsArticles = [
  {
    id: 1,
    title: "James Webb Telescope Discovers Earth-Like Exoplanet",
    snippet: "Scientists using the James Webb Space Telescope have discovered a potentially habitable exoplanet with signs of water vapor...",
    image: "https://images.unsplash.com/photo-1707588883312-5a7e3b31a461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    date: "2 hours ago",
    category: "Discovery",
  },
  {
    id: 2,
    title: "SpaceX Announces New Mars Mission Timeline",
    snippet: "Elon Musk's SpaceX has unveiled an updated timeline for their ambitious Mars colonization program, targeting the late 2020s...",
    image: "https://images.unsplash.com/photo-1720214658819-2676e74b4c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    date: "5 hours ago",
    category: "Mission",
  },
  {
    id: 3,
    title: "International Space Station Celebrates 25 Years",
    snippet: "The International Space Station marks a quarter-century of continuous human presence in orbit, a testament to global cooperation...",
    image: "https://images.unsplash.com/photo-1762452136301-cca9fb2e55a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    date: "1 day ago",
    category: "Milestone",
  },
  {
    id: 4,
    title: "New Evidence of Ancient Water on Mars",
    snippet: "NASA's Perseverance rover has found compelling evidence of ancient river systems on Mars, suggesting the red planet once had flowing water...",
    image: "https://images.unsplash.com/photo-1710676145418-51accf3af505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    date: "2 days ago",
    category: "Research",
  },
  {
    id: 5,
    title: "China's Space Station Welcomes New Crew",
    snippet: "Three Chinese astronauts have successfully docked with the Tiangong space station, beginning a six-month mission...",
    image: "https://images.unsplash.com/photo-1614727187346-ec3a009092b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    date: "3 days ago",
    category: "Mission",
  },
];

export function NewsScreen({ onBack }: NewsScreenProps) {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

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
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-white">Space News</h1>
            <p className="text-gray-400 text-sm">Latest Updates</p>
          </div>
          <button
            onClick={handleRefresh}
            className="text-[#6A5ACD] text-sm font-medium"
          >
            Refresh
          </button>
        </div>
      </div>

      {/* Pull to refresh indicator */}
      {refreshing && (
        <div className="px-6 py-3">
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#6A5ACD] to-[#FFD700]"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </div>
      )}

      {/* News Feed */}
      <div className="px-6 py-6 space-y-4">
        {newsArticles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-xl cursor-pointer"
            whileTap={{ scale: 0.98 }}
          >
            {/* Image header */}
            <div className="h-48 overflow-hidden relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#6A5ACD] text-white text-xs font-medium">
                  {article.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-white font-bold text-lg mb-2">
                {article.title}
              </h3>
              <p className="text-gray-300 text-sm mb-3">{article.snippet}</p>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <Clock className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
