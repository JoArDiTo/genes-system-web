import { Link } from "wouter"
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { UserRole } from "../lib/enum";

export const Header = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) throw new Error('LoginPage must be used within an AuthProvider');

  const { user } = authContext;

  let isOpen = false
  const btnsToMenu = document.querySelectorAll('header button') as NodeListOf<Element>
  const spansToMove = document.querySelectorAll('button .span-to-move') as NodeListOf<Element>
  const spansStatic = document.querySelectorAll('button span:not(.span-to-move)') as NodeListOf<Element>
  const menuModal = document.getElementById('menu-modal') as HTMLElement

  btnsToMenu.forEach((btnToMenu) => {
    btnToMenu.addEventListener('click', () => {
      // Rotación de las barras
      spansToMove.forEach((span, index) => {
        (span as HTMLElement).style.transform = isOpen ? '' : (index % 2 === 0 ? 'rotate(-45deg) translateY(-8px) translateX(8px)' : 'rotate(45deg) translateY(8px) translateX(8px)')
      })

      spansStatic.forEach(span => {
        (span as HTMLElement).style.opacity = isOpen ? '1' : '0'
      })

      // Quitar o mostrar el menú para móviles
      menuModal.style.opacity = isOpen ? '0' : '1'
      menuModal.style.zIndex = isOpen ? '-10' : '30'

      // Cambio de estado
      isOpen = !isOpen
    })
  })

  return (
    <>
      <header className="w-full flex justify-between items-center px-12 py-5 bg-white">
      {/* Ajustado con la ruta al nuevo logo institucional */}
      <img src="/images/logo-sanroque.png" alt="Logo Colegio San Roque" className="h-12 w-auto" />
      
      {/* VISTA WEB */}
      <nav className="hidden md:flex gap-10 items-center font-bold">
        <Link className="text-secondary hover:text-primary transition-colors font-medium" href="/">Inicio</Link>
        { user === null && <Link className="text-secondary hover:text-primary transition-colors font-medium" href="/iniciar-sesion">Realizar Test</Link> }
        {
          user && 
          <>
            <Link
              className="text-secondary hover:text-primary transition-colors font-medium" 
              href={`/${user.role === UserRole.STUDENT ? "cuestionarios" : "evaluaciones"}`}
            >
              { user.role === UserRole.STUDENT ? "Realizar Test" : "Evaluar Test" }
            </Link>
            {
              user.role === UserRole.STUDENT && (
                <Link href="/resultados" className="text-secondary hover:text-primary transition-colors font-medium">
                  Ver Resultados
                </Link>
              )
            }
          </>
        }
        <Link 
          className="bg-primary hover:bg-primary-hover text-secondary px-5 py-2 rounded-full font-bold transition-colors shadow-sm"
          href={user ? "/perfil" : "/iniciar-sesion"}>
            { user ? 'Mi cuenta' : 'Iniciar sesión' }
        </Link>
      </nav>

      {/* VISTA MÓVIL */}
      <button className="text-7xl w-9 h-9 flex flex-col justify-center cursor-pointer md:hidden gap-1">
        <span className="span-to-move transition-all duration-300 bg-secondary w-9 h-1 translate-y-4 rounded-full"></span>
        <span className="opacity-100 transition-all duration-300 bg-secondary w-9 h-1 rounded-full"></span>
        <span className="span-to-move transition-all duration-300 bg-secondary w-9 h-1 -translate-y-4 rounded-full"></span>
      </button>
      
      <div id="menu-modal" className="min-h-dvh opacity-0 inset-0 -z-10 transition-all flex flex-col items-center pt-5 bg-white overflow-hidden fixed duration-400 md:hidden overflow-y-auto">
        <aside className="py-[13px] px-12 flex justify-between w-full items-center border-b border-gray-100">
          <p className="font-serif text-2xl font-bold text-secondary">MENÚ</p>
          <button className="text-7xl w-9 h-9 flex flex-col justify-center cursor-pointer md:hidden gap-1">
            <span className="span-to-move transition-all duration-300 bg-secondary w-9 h-1 translate-y-4 rounded-full"></span>
            <span className="opacity-100 transition-all duration-300 bg-secondary w-9 h-1 rounded-full"></span>
            <span className="span-to-move transition-all duration-300 bg-secondary w-9 h-1 -translate-y-4 rounded-full"></span>
          </button>
        </aside>
        <Link className="w-full py-5 text-center text-secondary hover:bg-bg-alt hover:text-primary font-bold transition-colors" href="/">Inicio</Link>
        { user === null && <Link className="w-full py-5 text-center text-secondary hover:bg-bg-alt hover:text-primary font-bold transition-colors" href="/iniciar-sesion">Realizar Test</Link> }
        {
          user && 
          <>
            <Link
              className="w-full py-5 text-center text-secondary hover:bg-bg-alt hover:text-primary font-bold transition-colors" 
              href={`/${user.role === UserRole.STUDENT ? "cuestionarios" : "evaluaciones"}`}
            >
              { user.role === UserRole.STUDENT ? "Realizar Test" : "Evaluar Test" }
            </Link>
            {
              user.role === UserRole.STUDENT && (
                <Link href="/resultados" className="w-full py-5 text-center text-secondary hover:bg-bg-alt hover:text-primary font-bold transition-colors">
                  Ver Resultados
                </Link>
              )
            }
          </>
        }
        <Link className="w-full py-5 text-center text-secondary hover:bg-bg-alt hover:text-primary font-bold transition-colors" href="/perfil">Mi cuenta</Link>
      </div>

    </header>
    <hr className="border-gray-100" />
    </>
  )
}