import type { StudentResponse } from "../interfaces/Student"

export const StudentCard = ({ data }: { data: StudentResponse}) => {
  const { user, student } = data;
  
  return (
    <article className="bg-bg-alt/40 border border-gray-200/80 rounded-2xl shadow-sm hover:shadow-md px-3 py-6 flex flex-col items-center text-center w-full h-full transition-shadow duration-200">
      <img 
        className="size-16 sm:size-24 rounded-full object-cover mb-3 ring-4 ring-white shadow-sm" 
        src={user.imageUrl} 
        alt={`Imagen del estudiante ${user.firstname} ${user.lastname}`} 
      />
      <p className="text-primary font-bold text-xs uppercase tracking-wider mb-1">{student.section}</p>
      <h2 className="font-bold text-secondary text-sm sm:text-lg leading-tight mb-2">
        {user.firstname} <br /> {user.lastname}
      </h2>
      <p className="text-gray-500 text-xs sm:text-sm font-medium">{student.grade} grado de</p>
      <p className="text-gray-600 text-xs sm:text-sm font-semibold">{student.level}</p>
    </article>
  )
}