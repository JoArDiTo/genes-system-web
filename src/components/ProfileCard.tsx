import type { ProfileResponse } from "../interfaces/ProfileResponse"
import { UserRole } from "../lib/enum"

export const ProfileCard = ({ profile }: { profile: ProfileResponse }) => {
  const { userData: user, studentData: student } = profile;
  
  const handleOpenModal = () => {
    const dialog = document.getElementById('myDialog')

    const isDialogElement = dialog instanceof HTMLDialogElement
    if (!isDialogElement) return;
    
    dialog.showModal();
  }

  return (
    <article className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl px-6 py-10 border border-gray-100">
      <header className="flex flex-col items-center justify-center pb-8">
        <img 
          src={ user.imageUrl } 
          alt="Imagen referencial de un perfil" 
          className="rounded-full w-32 h-32 mb-4 object-cover ring-4 ring-primary/20 shadow-sm" 
        />
        <h2 className="text-xl sm:text-3xl font-bold text-secondary text-center">{ user.firstname } { user.lastname }</h2>
        <p className="text-sm sm:text-base font-bold text-primary mt-1 tracking-wider">
          { user.role === UserRole.STUDENT ? "ESTUDIANTE" : "DOCENTE" }
        </p>
      </header>

      <main className="w-full sm:w-5/6 flex flex-col pb-8 [&>p]:text-sm [&>p]:sm:text-base [&>p]:flex [&>p]:flex-wrap [&>p]:justify-between [&>p]:py-2 [&>p]:border-b [&>p]:border-gray-50 [&>p]:text-gray-600">
        <h2 className="text-lg font-bold text-secondary mb-1">Información personal</h2>
        <hr className="border-primary/30 mb-2" />
        <p><strong className="text-gray-700">DNI:</strong> { user.documentId }</p>
        <p><strong className="text-gray-700">Correo:</strong> { user.email }</p>
        <p><strong className="text-gray-700">Teléfono:</strong> { user.phoneNumber }</p>
        <p><strong className="text-gray-700">Género:</strong> { user.gender }</p>
        <p><strong className="text-gray-700">Edad:</strong> { user.age }</p>
        
        {
          user.role === UserRole.STUDENT && student && (
            <>
              <h2 className="pt-6 text-lg font-bold text-secondary mb-1">Información académica</h2>
              <hr className="border-primary/30 mb-2" />
              <p><strong className="text-gray-700">Grado:</strong> { student.grade }</p>
              <p><strong className="text-gray-700">Nivel:</strong> { student.level }</p>
              <p><strong className="text-gray-700">Salón:</strong> { student.section }</p>
            </>
          )
        }
      </main>

      <footer className="w-full sm:w-5/6 flex justify-end">
        <button 
          onClick={ handleOpenModal } 
          className="cursor-pointer text-center font-semibold px-6 py-2.5 rounded-xl border-2 border-secondary text-secondary transition-colors duration-200 hover:bg-secondary hover:text-white w-full sm:w-auto"
        >
          Cerrar Sesión
        </button>
      </footer>
    </article>
  )
}