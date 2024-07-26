import Link from "next/link"
import { FC } from "react"

interface ViewAllButtonProps {
  url: string
}

const ViewAllButton: FC<ViewAllButtonProps> = ({ url }) => {
  return (
    <div className="text-center mb-5">
      <Link href={url}>
        <div className="text-primary font-semibold hover:underline inline-flex items-center cursor-pointer">
          Ver todo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </Link>
    </div>
  )
}

export default ViewAllButton
