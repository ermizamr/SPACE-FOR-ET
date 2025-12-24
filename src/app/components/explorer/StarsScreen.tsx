import TopicTemplate from "./TopicTemplate";

interface Props { onBack: () => void }

export default function StarsScreen({ onBack }: Props) {
  return (
    <TopicTemplate title="Stars" subtitle="The engines of the universe" color="from-[#FFD700] to-[#FFA500]" onBack={onBack}>
      <div className="space-y-4">
        <p className="text-gray-300">
          Stars are massive, glowing balls of plasma powered by nuclear fusion. They come in various sizes, temperatures and lifetimes.
        </p>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4">
          <h4 className="text-white font-bold mb-2">Star Facts</h4>
          <ul className="text-gray-400 list-disc list-inside space-y-1">
            <li>Our Sun is a G-type main-sequence star</li>
            <li>Stars form in nebulae and end as white dwarfs, neutron stars or black holes</li>
            <li>Stellar spectra reveal composition and temperature</li>
          </ul>
        </div>

        <div className="grid gap-3">
          <a className="block rounded-xl p-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-semibold" href="https://en.wikipedia.org/wiki/Star" target="_blank" rel="noopener noreferrer">
            Stars — Wikipedia
          </a>
          <a className="block rounded-xl p-4 bg-gradient-to-r from-[#6A5ACD] to-[#4169E1] text-white font-semibold" href="https://exoplanets.nasa.gov/what-is-an-exoplanet/" target="_blank" rel="noopener noreferrer">
            Exoplanets & Stars — NASA
          </a>
        </div>
      </div>
    </TopicTemplate>
  );
}
