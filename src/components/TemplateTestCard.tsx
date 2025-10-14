import type { TemplateTest } from "../interfaces/TemplateTest"
import { NoteIcon } from "../icons/Note"

export const TemplateTestCard = ({ templateTest }: { templateTest: TemplateTest }) => {
  const { name, author, description } = templateTest

  return (
    <article className="block w-full max-w-md p-5 sm:p-7 bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200 rounded-2xl shadow-md hover:shadow-lg hover:border-blue-300 transition-all duration-200">
      <div className="flex items-center gap-3 mb-3">
      <span className="bg-blue-100 p-2 rounded-full">
        <NoteIcon />
      </span>
      <h2 className="text-lg sm:text-2xl font-bold text-gray-900">{name}</h2>
      </div>
      <p className="text-xs sm:text-sm font-medium text-blue-700 mb-1">{author}</p>
      <p className="text-sm sm:text-base text-gray-700 line-clamp-3">{description}</p>
    </article>
  ) 
}