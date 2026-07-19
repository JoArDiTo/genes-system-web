import { useContext } from "react";
import { UserRole } from "../../lib/enum"
import { AuthContext } from "../../contexts/AuthContext";

export const CtaSection = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) throw new Error('Header must be used within an AuthProvider');
    
  const { user } = authContext
  
  return (
    <section id="cta" className="py-16 bg-secondary text-white relative overflow-hidden">
      {/* Detalle decorativo inferior en dorado */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-primary"></div>

      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 font-serif">
          Comienza a utilizar nuestro sistema hoy
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
          Únete a la comunidad del Colegio San Roque comprometida con el desarrollo integral, 
          la autonomía y el bienestar socioemocional de nuestros estudiantes.
        </p>
        
        {
          user ? (
            user.role === UserRole.STUDENT && (
              <a 
                href="/cuestionarios" 
                className="bg-primary hover:bg-primary-hover text-secondary px-8 py-3 rounded-lg font-bold transition-colors inline-block shadow-md"
              >
                Realizar Test
              </a>
            )
          ) : (
            <a 
              href="/iniciar-sesion" 
              className="bg-primary hover:bg-primary-hover text-secondary px-8 py-3 rounded-lg font-bold transition-colors inline-block shadow-md"
            >
              Iniciar Sesión
            </a>
          )
        }
      </div>
    </section>
  )
}