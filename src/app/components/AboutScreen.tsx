import { motion } from "motion/react";
import { ArrowLeft, Rocket, Heart, Users, Mail, Palette, MapPin, Smartphone } from "lucide-react";

interface AboutScreenProps {
  onBack: () => void;
  onNavigateToDesignSystem?: () => void;
}

export function AboutScreen({ onBack, onNavigateToDesignSystem }: AboutScreenProps) {
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
            <h1 className="text-2xl font-bold text-white">About</h1>
            <p className="text-gray-400 text-sm">SPACE for ET</p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-[#6A5ACD] to-[#4169E1] rounded-3xl p-8 text-center"
        >
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
            <Rocket className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">SPACE for ET</h2>
          <p className="text-white/90">
            Educational & Inspirational Space Exploration App
          </p>
          <div className="mt-4 text-white/70 text-sm">Version 1.0.0</div>
        </motion.div>
      </div>

      {/* Mission Section */}
      <div className="px-6 py-6">
        <h3 className="text-xl font-bold text-white mb-4">MISSION</h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6"
        >
          <p className="text-gray-300 mb-4">
           This app (SPACE for ET) is dedicated to inspiring the next generation of space enthusiasts and scientists in Ethiopia and beyond. I believe in making space science accessible, engaging, and educational for everyone.
          </p>
          <p className="text-gray-300">
            Through my app, I showcase the wonders of space exploration, celebrate Ethiopia's growing role in space science, and foster a community passionate about the cosmos.
          </p>
        </motion.div>
      </div>

      {/* Features */}
      <div className="px-6 py-6">
        <h3 className="text-xl font-bold text-white mb-4">Features</h3>
        <div className="space-y-3">
          {[
            { icon: Rocket, title: "Space History", desc: "Explore major milestones in space exploration" },
            { icon: Heart, title: "Ethiopia Focus", desc: "Dedicated section for Ethiopian space achievements" },
            { icon: MapPin, title: "Location Features", desc: "Stargazing guide and distance calculator" },
            { icon: Smartphone, title: "PWA Ready", desc: "Install as a mobile app on any device" },
            { icon: Users, title: "Interactive Learning", desc: "Engage with space topics through interactive cards" },
            { icon: Mail, title: "Latest News", desc: "Stay updated with real-time space news" },
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6A5ACD] to-[#FFD700] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Contact */}
      <div className="px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 text-center"
        >
          <h3 className="text-lg font-bold text-white mb-3">Get in Touch</h3>
          <p className="text-gray-300 text-sm mb-4">
            Have questions or suggestions? I'd love to hear from you!
          </p>
          <a
            href="https://t.me/channel_of_ermi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open SPACE for ET Telegram channel"
            className="w-full inline-block bg-gradient-to-r from-[#6A5ACD] to-[#4169E1] text-white py-3 rounded-2xl font-semibold text-center"
          >
            Contact me
          </a>
        </motion.div>
      </div>



      {/* Footer */}
      <div className="px-6 py-6 text-center">
        <p className="text-gray-500 text-sm">
          Made with ❤️ for space enthusiasts everywhere
        </p>
        <p className="text-gray-600 text-xs mt-2">
          © DECEMBER 2025 (ታኅሣሥ 2017) SPACE for ET. All rights reserved.
        </p>
      </div>
    </div>
  );
}
