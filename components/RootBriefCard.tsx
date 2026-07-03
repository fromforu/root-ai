type BriefSection = {
  icon: string;
  title: string;
  status: string;
};

type RootBriefCardProps = {
  companyName?: string;
  aiResearchStatus?: string;
  sections?: BriefSection[];
};

const DEFAULT_SECTIONS: BriefSection[] = [
  { icon: "📈", title: "Business", status: "Loading..." },
  { icon: "🏆", title: "Competition", status: "Loading..." },
  { icon: "💰", title: "Financial Health", status: "Loading..." },
  { icon: "🎯", title: "Long-term Investment", status: "Loading..." },
];

function SectionRow({ icon, title, status }: BriefSection) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
      <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
        {icon} {title}
      </h3>
      <p className="text-sm text-gray-500 sm:text-base">{status}</p>
    </div>
  );
}

export default function RootBriefCard({
  companyName = "Apple Inc.",
  aiResearchStatus = "Preparing AI analysis...",
  sections = DEFAULT_SECTIONS,
}: RootBriefCardProps) {
  return (
    <article className="w-full rounded-2xl bg-white p-6 shadow-sm sm:p-8">
      <header className="space-y-2">
        <p className="text-lg font-bold text-gray-900 sm:text-xl">🌳 ROOT Brief</p>
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          {companyName}
        </h2>
      </header>

      <div className="mt-6 space-y-1">
        <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
          🟢 AI Research Status
        </h3>
        <p className="text-sm text-gray-500 sm:text-base">{aiResearchStatus}</p>
      </div>

      <hr className="my-6 border-gray-100" />

      <div className="space-y-5">
        {sections.map((section) => (
          <SectionRow key={section.title} {...section} />
        ))}
      </div>
    </article>
  );
}
