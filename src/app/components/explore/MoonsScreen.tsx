import TopicTemplate from "./TopicTemplate";

interface Props { onBack: () => void }

export default function MoonsScreen({ onBack }: Props) {
  return (
    <TopicTemplate title="Moons" subtitle="Natural satellites of planets" color="from-[#C0C0C0] to-[#808080]" onBack={onBack}>
      <div className="space-y-4">
        <p className="text-gray-300">
          Moons orbit planets and can be geologically active worlds themselves — for example, Jupiter's moon Europa may hide a subsurface ocean.
        </p>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4">
          <h4 className="text-white font-bold mb-2">Highlights</h4>
          <ul className="text-gray-400 list-disc list-inside space-y-1">
            <li>The Moon influences Earth's tides</li>
            <li>Some moons (e.g., Titan) have atmospheres</li>
            <li>Many moons are prime targets for exploration</li>
          </ul>
        </div>

        <div className="grid gap-3">
          <a className="block rounded-xl p-4 bg-gradient-to-r from-[#C0C0C0] to-[#808080] text-black font-semibold" href="https://solarsystem.nasa.gov/moons/overview/" target="_blank" rel="noopener noreferrer">
            Moons — NASA
          </a>
        </div>
      </div>
    </TopicTemplate>
  );
}
