import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { SplashScreen } from "./components/SplashScreen";
import { Onboarding } from "./components/Onboarding";
import { HomeScreen } from "./components/HomeScreen";
import { HistoryScreen } from "./components/HistoryScreen";
import { BreakthroughsScreen } from "./components/BreakthroughsScreen";
import { NewsScreen } from "./components/NewsScreen";
import { EthiopiaScreen } from "./components/EthiopiaScreen";
import { ExploreScreen } from "./components/ExploreScreen";
import { AboutScreen } from "./components/AboutScreen";
import { DesignSystemScreen } from "./components/DesignSystemScreen";
import { StargazingScreen } from "./components/StargazingScreen";
import { BottomNav } from "./components/BottomNav";
import { InstallPrompt } from "./components/InstallPrompt";
import TelescopeScreen from "./components/explore/TelescopeScreen";
import RocketsScreen from "./components/explore/RocketsScreen";
import PlanetsScreen from "./components/explore/PlanetsScreen";
import SatellitesScreen from "./components/explore/SatellitesScreen";
import StarsScreen from "./components/explore/StarsScreen";
import MoonsScreen from "./components/explore/MoonsScreen";
import SolarSystemScreen from "./components/explore/SolarSystemScreen";
import PhysicsScreen from "./components/explore/PhysicsScreen";

/**
 * SPACE for ET - Educational Space Exploration Mobile App
 * 
 * A comprehensive mobile-first web prototype for a Flutter app focused on
 * space science education and Ethiopia's contributions to space exploration.
 * 
 * Features:
 * - Animated splash screen and onboarding flow
 * - Home dashboard with navigation cards
 * - Space History timeline
 * - Breakthrough discoveries showcase
 * - Real-time space news feed
 * - Ethiopia's space journey section
 * - Interactive learning modules
 * - Complete design system documentation
 * 
 * Design System:
 * - Colors: Dark blue (#0B1026), Nebula purple (#6A5ACD), Star gold (#FFD700)
 * - Typography: Orbitron (headings), Inter (body)
 * - Animations: Motion/Framer Motion
 * - Mobile-first responsive design
 */

type AppState = "splash" | "onboarding" | "main";
type Screen = "home" | "history" | "breakthroughs" | "news" | "ethiopia" | "explore" | "about" | "design-system" | "stargazing" | "telescopes" | "rockets" | "planets" | "satellites" | "stars" | "moons" | "solar-system" | "physics";

export default function App() {
  const [appState, setAppState] = useState<AppState>("splash");
  const [activeScreen, setActiveScreen] = useState<Screen>("home");
  const [activeTab, setActiveTab] = useState<string>("home");

  // Handle navigation from home cards
  const handleNavigate = (screen: string) => {
    setActiveScreen(screen as Screen);
    // Update tab if it's a main tab
    if (["home", "explore", "news", "ethiopia", "about"].includes(screen)) {
      setActiveTab(screen);
    }
  };

  // Handle tab change from bottom nav
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    
    // Map tabs to screens
    const tabToScreen: Record<string, Screen> = {
      home: "home",
      explore: "explore",
      news: "news",
      ethiopia: "ethiopia",
      about: "about",
    };
    
    setActiveScreen(tabToScreen[tab] || "home");
  };

  // Handle back navigation
  const handleBack = () => {
    setActiveScreen("home");
    setActiveTab("home");
  };

  // Handle topic selection from explore screen
  // Accept the hyphenated/lowercase topicId that ExploreScreen sends (e.g. "telescopes", "solar-system")
  const handleSelectTopic = (topicId: string) => {
    const topicToScreen: Record<string, Screen> = {
      "telescopes": "telescopes",
      "rockets": "rockets",
      "planets": "planets",
      "satellites": "satellites",
      "stars": "stars",
      "moons": "moons",
      "solar-system": "solar-system",
      "physics": "physics",
    };
    
    const screen = topicToScreen[topicId];
    if (screen) {
      setActiveScreen(screen);
      // Optionally update activeTab if you want Explore to remain selected or change tab — keep as-is
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0B1026] overflow-x-hidden">
      {/* Mobile frame - max width for mobile design */}
      <div className="max-w-md mx-auto relative min-h-screen bg-[#0B1026] shadow-2xl">
        <AnimatePresence mode="wait">
          {appState === "splash" && (
            <SplashScreen
              key="splash"
              onComplete={() => setAppState("onboarding")}
            />
          )}

          {appState === "onboarding" && (
            <Onboarding
              key="onboarding"
              onComplete={() => setAppState("main")}
            />
          )}

          {appState === "main" && (
            <div key="main">
              {/* Main Content */}
              <AnimatePresence mode="wait">
                {activeScreen === "home" && (
                  <HomeScreen
                    key="home"
                    onNavigate={handleNavigate}
                  />
                )}

                {activeScreen === "history" && (
                  <HistoryScreen
                    key="history"
                    onBack={handleBack}
                  />
                )}

                {activeScreen === "breakthroughs" && (
                  <BreakthroughsScreen
                    key="breakthroughs"
                    onBack={handleBack}
                  />
                )}

                {activeScreen === "news" && (
                  <NewsScreen
                    key="news"
                    onBack={handleBack}
                  />
                )}

                {activeScreen === "ethiopia" && (
                  <EthiopiaScreen
                    key="ethiopia"
                    onBack={handleBack}
                  />
                )}

                {activeScreen === "explore" && (
                  <ExploreScreen
                    key="explore"
                    onBack={handleBack}
                    onSelectTopic={handleSelectTopic}
                  />
                )}

                {activeScreen === "about" && (
                  <AboutScreen
                    key="about"
                    onBack={handleBack}
                    onNavigateToDesignSystem={() => setActiveScreen("design-system")}
                  />
                )}

                {activeScreen === "design-system" && (
                  <DesignSystemScreen
                    key="design-system"
                    onBack={handleBack}
                  />
                )}

                {activeScreen === "stargazing" && (
                  <StargazingScreen
                    key="stargazing"
                    onBack={handleBack}
                  />
                )}

                {activeScreen === "telescopes" && (
                  <TelescopeScreen
                    key="telescopes"
                    onBack={handleBack}
                  />
                )}

                {activeScreen === "rockets" && (
                  <RocketsScreen
                    key="rockets"
                    onBack={handleBack}
                  />
                )}

                {activeScreen === "planets" && (
                  <PlanetsScreen
                    key="planets"
                    onBack={handleBack}
                  />
                )}

                {activeScreen === "satellites" && (
                  <SatellitesScreen
                    key="satellites"
                    onBack={handleBack}
                  />
                )}

                {activeScreen === "stars" && (
                  <StarsScreen
                    key="stars"
                    onBack={handleBack}
                  />
                )}

                {activeScreen === "moons" && (
                  <MoonsScreen
                    key="moons"
                    onBack={handleBack}
                  />
                )}

                {activeScreen === "solar-system" && (
                  <SolarSystemScreen
                    key="solar-system"
                    onBack={handleBack}
                  />
                )}

                {activeScreen === "physics" && (
                  <PhysicsScreen
                    key="physics"
                    onBack={handleBack}
                  />
                )}
              </AnimatePresence>

              {/* Bottom Navigation */}
              <BottomNav
                activeTab={activeTab}
                onTabChange={handleTabChange}
              />
              
              {/* PWA Install Prompt */}
              <InstallPrompt />
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Background stars effect for larger screens */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
