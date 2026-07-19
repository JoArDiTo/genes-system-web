import { GroupIcon } from "../../icons/Group"
import { HearthIcon } from "../../icons/Hearth"
import { NoteIcon } from "../../icons/Note"

export const GoalSection = () => {
  return (
    <section id="objetivos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Título Principal */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-secondary">Nuestro Compromiso</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            El Sistema de Apoyo a la Salud Mental del Colegio San Roque integra los valores éticos 
            y cristianos de nuestra institución para acompañar el crecimiento autónomo y la estabilidad 
            emocional de nuestros niños y adolescentes.
          </p>
        </div>

        {/* Bloques de Misión, Visión y Apoyo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Tarjeta 1: Misión */}
          <div className="bg-bg-alt p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary">
            <div className="bg-primary/20 text-secondary p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <HearthIcon/>
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary">Misión Institucional</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Promover la formación integral a través de una educación basada en principios éticos 
              y cristianos, que responda al bienestar socioemocional de la comunidad para construir 
              una sociedad solidaria que opte por la vida y por la paz.
            </p>
          </div>

          {/* Tarjeta 2: Visión */}
          <div className="bg-bg-alt p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-secondary">
            <div className="bg-primary/20 text-secondary p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <NoteIcon />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary">Visión al 2036</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Consolidarnos como una institución líder con altos estándares de calidad educativa, 
              procesos pedagógicos con soporte tecnológico avanzado y herramientas que brinden al país 
              estudiantes estables, autónomos y listos para los retos globales.
            </p>
          </div>

          {/* Tarjeta 3: Apoyo Integral */}
          <div className="bg-bg-alt p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary">
            <div className="bg-primary/20 text-secondary p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <GroupIcon />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary">Evaluación y Acompañamiento</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Involucramos activamente a docentes calificados y especialistas para detectar de manera 
              temprana dificultades emocionales, asegurando un entorno de alegría, seguridad y mutua confianza.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}