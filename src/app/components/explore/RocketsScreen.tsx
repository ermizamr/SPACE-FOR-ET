import TopicTemplate from "./TopicTemplate";

interface Props { onBack: () => void }

export default function RocketsScreen({ onBack }: Props) {
  return (
    <TopicTemplate title="Rockets" subtitle="How we reach space" color="from-[#4169E1] to-[#1E90FF]" onBack={onBack}>
      <div className="space-y-4">
        <p className="text-gray-300">
          Rockets provide the thrust to escape Earth's gravity. Modern rockets use staged designs, powerful engines, and precise guidance systems.
        </p>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4">
          <h4 className="text-white font-bold mb-2">Key Facts</h4>
          <ul className="text-gray-400 list-disc list-inside space-y-1">
            <li>Stages drop away to reduce mass during ascent</li>
            <li>Reusable rockets (e.g., SpaceX Falcon 9) lower launch cost</li>
            <li>Rockets must reach orbital velocity (~7.8 km/s for LEO)</li>
          </ul>
        </div>

        <div className="grid gap-3">
          <a className="block rounded-xl p-4 bg-gradient-to-r from-[#1E90FF] to-[#00BFFF] text-white font-semibold" href="https://en.wikipedia.org/wiki/Rocket" target="_blank" rel="noopener noreferrer">
            Rockets — Wikipedia
          </a>
          <a className="block rounded-xl p-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-semibold" href="https://www.spacex.com/" target="_blank" rel="noopener noreferrer">
            SpaceX — Official
          </a>
        </div>
      </div>
    </TopicTemplate>
  );
}
