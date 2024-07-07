import { contentsItems } from "@/data/constants"

const ContentsIndex = ({
  onScrollToSection,
}: {
  onScrollToSection: (targetId: string) => void
}) => {
  return (
    <aside className="col-span-1 md:col-span-1 p-4 bg-gray-100 rounded-lg mb-4 md:mb-0 md:ml-4 md:h-screen ">
      <h2 className="text-2xl font-bold mb-4">Contents</h2>
      <ul className="space-y-2">
        {contentsItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onScrollToSection(item.id)}
              className="regular-16 text-slate-700 cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default ContentsIndex
