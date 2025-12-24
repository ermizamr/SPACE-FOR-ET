import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

interface TopicTemplateProps {
  title: string;
  subtitle?: string;
  color?: string; // tailwind gradient class fragment like "from-[#6A5ACD] to-[#4169E1]"
  onBack: () => void;
  children?: React.ReactNode;
}

export default function TopicTemplate({ title, subtitle, color = "from-[#6A5ACD] to-[#4169E1]", onBack, children }: TopicTemplateProps) {
  return (
    <div className="min-h-screen bg-[#0B1026] pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-b from-[#0B1026] to-transparent backdrop-blur-sm">
        <div className="px-6 py-4 flex items-center gap-4">
          <button onClick={onBack} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            {subtitle && <p className="text-gray-400 text-sm">{subtitle}</p>}
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="px-6 py-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`bg-gradient-to-br ${color} rounded-3xl p-6`}>
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-xl bg-white/10 flex items-center justify-center">
              <div className="text-white font-bold">{title.charAt(0)}</div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{title}</h2>
              {subtitle && <p className="text-white/90">{subtitle}</p>}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="px-6 py-4 space-y-4">
        {children}
      </div>
    </div>
  );
}
