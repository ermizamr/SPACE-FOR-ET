import TopicTemplate from "./TopicTemplate";

interface Props { onBack: () => void }

export default function PlanetsScreen({ onBack }: Props) {
  return (
    <TopicTemplate title="Planets" subtitle="Worlds in our Solar System and beyond" color="from-[#1E90FF] to-[#00BFFF]" onBack={onBack}>
      <div className="space-y-4">
        <p className="text-gray-300">
          Planets are major bodies orbiting a star. Our Solar System's planets vary widely — from rocky Mercury to gas giants like Jupiter.
        </p>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4">
          <h4 className="text-white font-bold mb-2">Quick Planet Facts</h4>
          <ul className="text-gray-400 list-disc list-inside space-y-1">
            <li>Earth is the only known planet with confirmed life</li>
            <li>Jupiter's Great Red Spot is a giant storm</li>
            <li>Exoplanets orbit other stars and come in many types</li>
          </ul>
        </div>

        <div className="grid gap-3">
          <a className="block rounded-xl p-4 bg-gradient-to-r from-[#00BFFF] to-[#6A5ACD] text-white font-semibold" href="https://solarsystem.nasa.gov/planets/overview/" target="_blank" rel="noopener noreferrer">
            NASA — Planets
          </a>
          <a className="block rounded-xl p-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-semibold" href="https://exoplanets.nasa.gov/" target="_blank" rel="noopener noreferrer">
            NASA Exoplanet Exploration
          </a>
        </div>
      </div>
    </TopicTemplate>
  );
}
