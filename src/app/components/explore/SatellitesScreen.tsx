import TopicTemplate from "./TopicTemplate";

interface Props { onBack: () => void }

export default function SatellitesScreen({ onBack }: Props) {
  return (
    <TopicTemplate title="Satellites" subtitle="Man-made and natural orbiters" color="from-[#00BFFF] to-[#6A5ACD]" onBack={onBack}>
      <div className="space-y-4">
        <p className="text-gray-300">
          Satellites include everything from the Moon (natural) to thousands of human-made objects used for communication, navigation and Earth observation.
        </p>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4">
          <h4 className="text-white font-bold mb-2">Key Points</h4>
          <ul className="text-gray-400 list-disc list-inside space-y-1">
            <li>LEO = Low Earth Orbit (used by many satellites and ISS)</li>
            <li>Geostationary satellites remain fixed relative to Earth's surface</li>
            <li>Space debris is a growing concern — tracking is essential</li>
          </ul>
        </div>

        <div className="grid gap-3">
          <a className="block rounded-xl p-4 bg-gradient-to-r from-[#00BFFF] to-[#6A5ACD] text-white font-semibold" href="https://www.esa.int/Enabling_Support/Space_Transportation/Space_debris" target="_blank" rel="noopener noreferrer">
            Space debris & satellites — ESA
          </a>
          <a className="block rounded-xl p-4 bg-gradient-to-r from-[#6A5ACD] to-[#FFD700] text-black font-semibold" href="https://www.n2yo.com/" target="_blank" rel="noopener noreferrer">
            Satellite tracking — N2YO
          </a>
        </div>
      </div>
    </TopicTemplate>
  );
}
