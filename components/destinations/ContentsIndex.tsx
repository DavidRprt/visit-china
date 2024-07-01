interface ContentsIndexProps {
  items: { id: string; label: string }[]
}

const ContentsIndex = ({ items }: ContentsIndexProps) => {
  return (
    <aside className="col-span-1 md:col-span-1 p-4 bg-gray-100 rounded-lg mb-4 md:mb-0 md:ml-4">
      <h2 className="text-2xl font-bold mb-4">Contents</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="text-blue-500 hover:underline">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default ContentsIndex
