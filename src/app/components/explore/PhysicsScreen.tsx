import TopicTemplate from "./TopicTemplate";

interface Props { onBack: () => void }

export default function PhysicsScreen({ onBack }: Props) {
  return (
    <TopicTemplate title="Physics" subtitle="The rules that shape the universe" color="from-[#6A5ACD] to-[#FFD700]" onBack={onBack}>
      <div className="space-y-4">
        <p className="text-gray-300">
          Physics explains motion, gravity, electromagnetism, nuclear processes and much more. Understanding physics helps us build spacecraft and interpret astronomical observations.
        </p>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4">
          <h4 className="text-white font-bold mb-2">Core Topics</h4>
          <ul className="text-gray-400 list-disc list-inside space-y-1">
            <li>Gravity & orbital mechanics</li>
            <li>Electromagnetism and light</li>
            <li>Thermodynamics and nuclear fusion</li>
          </ul>
        </div>

        <div className="grid gap-3">
          <a className="block rounded-xl p-4 bg-gradient-to-r from-[#6A5ACD] to-[#FFD700] text-white font-semibold" href="https://en.wikipedia.org/wiki/Physics" target="_blank" rel="noopener noreferrer">
            Physics — Intro (Wikipedia)
          </a>
        </div>
      </div>
    </TopicTemplate>
  );
}
