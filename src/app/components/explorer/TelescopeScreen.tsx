import TopicTemplate from "./TopicTemplate";
import { Star } from "lucide-react";

interface Props { onBack: () => void }

export default function TelescopeScreen({ onBack }: Props) {
  return (
    <TopicTemplate title="Telescopes" subtitle="Tools for seeing the cosmos" color="from-[#6A5ACD] to-[#4169E1]" onBack={onBack}>
      <div className="grid gap-4">
        <p className="text-gray-300">
          Telescopes collect light and let us see distant objects — from nearby planets to far-off galaxies. There are optical telescopes (visible light), radio telescopes, infrared and X-ray observatories.
        </p>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4">
          <h4 className="text-white font-bold mb-2">Key Facts</h4>
          <ul className="text-gray-400 list-disc list-inside space-y-1">
            <li>First practical optical telescope: early 17th century</li>
            <li>The Hubble Space Telescope orbits above Earth’s atmosphere</li>
            <li>Radio telescopes can "see" through dust that blocks visible light</li>
          </ul>
        </div>

        <div className="grid gap-3">
          <a className="block rounded-xl p-4 bg-gradient-to-r from-[#6A5ACD] to-[#4169E1] text-white font-semibold" href="https://en.wikipedia.org/wiki/Telescope" target="_blank" rel="noopener noreferrer">
            Learn more — Telescopes (Wikipedia)
          </a>
          <a className="block rounded-xl p-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-semibold" href="https://www.stsci.edu/hst" target="_blank" rel="noopener noreferrer">
            Hubble Space Telescope — Official
          </a>
        </div>

        <div className="rounded-2xl bg-gray-800 p-6 flex items-center gap-4">
          <div className="w-24 h-24 rounded-lg bg-white/6 flex items-center justify-center">
            {/* Replace with an image */}
            <Star className="w-10 h-10 text-white" />
          </div>
          <div>
            <h5 className="text-white font-bold">Try this</h5>
            <p className="text-gray-400 text-sm">Visit a local observatory or join a stargazing group — small telescopes reveal amazing detail on the Moon and planets.</p>
          </div>
        </div>
      </div>
    </TopicTemplate>
  );
}
