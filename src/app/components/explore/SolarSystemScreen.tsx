import TopicTemplate from "./TopicTemplate";

interface Props { onBack: () => void }

export default function SolarSystemScreen({ onBack }: Props) {
  return (
    <TopicTemplate title="Solar System" subtitle="Our local planetary system" color="from-[#FFA500] to-[#FF8C00]" onBack={onBack}>
      <div className="space-y-4">
        <p className="text-gray-300">
          The Solar System includes the Sun, eight planets, dwarf planets, moons, asteroids and comets. It formed ~4.6 billion years ago from a protoplanetary disk.
        </p>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4">
          <h4 className="text-white font-bold mb-2">Overview</h4>
          <p className="text-gray-400 text-sm">Planets, belts and small bodies orbit the Sun in roughly the same plane; exploration continues with robotic missions to many worlds.</p>
        </div>

        <div className="grid gap-3">
          <a className="block rounded-xl p-4 bg-gradient-to-r from-[#FFA500] to-[#FF8C00] text-black font-semibold" href="https://solarsystem.nasa.gov/" target="_blank" rel="noopener noreferrer">
            Solar System — NASA
          </a>
        </div>
      </div>
    </TopicTemplate>
  );
}
