import { useContext } from "react";
import { UserRole } from "../../lib/enum"
import { AuthContext } from "../../contexts/AuthContext";

export const MainSection = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) throw new Error('Header must be used within an AuthProvider');
      
  const { user } = authContext

  return (
    <section className="bg-secondary text-white py-20 relative overflow-hidden">
      {/* Detalle decorativo sutil en dorado */}
      <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 mb-10 md:mb-0">
            {/* Título adaptado con un tag de "Desarrollo Integral" implícito en el enfoque */}
            <span className="inline-block bg-primary text-secondary font-bold text-sm px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              Desarrollo Integral
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Plataforma de Bienestar Socioemocional
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Nos preocupamos por la formación integral y el bienestar emocional de los alumnos del Colegio San Roque.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {
                user ? (
                  user.role === UserRole.STUDENT && (
                    <a 
                      href="/cuestionarios" 
                      className="bg-primary hover:bg-primary-hover text-secondary px-6 py-3 rounded-lg font-bold transition-colors text-center shadow-md"
                    >
                      Realizar Test
                    </a>
                  )
                ) : (
                  <a 
                    href="/iniciar-sesion" 
                    className="bg-primary hover:bg-primary-hover text-secondary px-6 py-3 rounded-lg font-bold transition-colors text-center shadow-md"
                  >
                    Iniciar Sesión
                  </a>
                )
              }
              <a 
                href="#objetivos" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-secondary text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
              >
                Conocer más
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Actualizado para apuntar a la imagen del colegio */}
            <img 
              src="/images/hero-sanroque.jpg" 
              alt="Alumnos del Colegio San Roque en Laboratorio" 
              className="max-w-full h-auto rounded-lg shadow-2xl border-4 border-white/10" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}