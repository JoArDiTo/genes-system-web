import { BulbIcon } from "../../icons/Bulb"

export const BenefitSection = () => {
  return (
    <section id="beneficios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Sección 1: Quiénes Somos e Indicadores Institucionales */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-secondary">Nuestra Excelencia Educativa</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Con sede en Surco, Lima, el Colegio San Roque respalda cada una de sus herramientas tecnológicas con una sólida trayectoria de calidad, valores católicos y proyección global.
            </p>
          </div>

          {/* Grilla de Contadores/Métricas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-bg-alt rounded-xl shadow-sm border-b-4 border-primary">
              <span className="block text-4xl font-extrabold text-secondary mb-1">2,532</span>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">Alumnos Egresados</span>
            </div>
            <div className="p-6 bg-bg-alt rounded-xl shadow-sm border-b-4 border-secondary">
              <span className="block text-4xl font-extrabold text-secondary mb-1">50</span>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">Promociones</span>
            </div>
            <div className="p-6 bg-bg-alt rounded-xl shadow-sm border-b-4 border-primary">
              <span className="block text-4xl font-extrabold text-secondary mb-1">26</span>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">Convenios</span>
            </div>
            <div className="p-6 bg-bg-alt rounded-xl shadow-sm border-b-4 border-secondary">
              <span className="block text-4xl font-extrabold text-secondary mb-1">19</span>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">Certificados Cambridge</span>
            </div>
          </div>
        </div>

        <hr className="border-gray-100 my-12" />

        {/* Sección 2: Beneficios de la Plataforma */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-secondary">Beneficios del Sistema</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Nuestro enfoque innovador y de soporte avanzado ofrece múltiples ventajas para el seguimiento del estudiante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Beneficio 1 */}
          <div className="p-6 border border-gray-200 rounded-xl hover:border-primary transition-colors bg-white">
            <div className="mb-4 text-secondary">
              <BulbIcon />
            </div>
            <h3 className="text-lg font-bold mb-2 text-secondary">Detección Temprana</h3>
            <p className="text-gray-600 text-sm">
              Identificamos señales de alerta oportunas para intervenir antes de que las dificultades afecten el proyecto de vida del alumno.
            </p>
          </div>

          {/* Beneficio 2 */}
          <div className="p-6 border border-gray-200 rounded-xl hover:border-primary transition-colors bg-white">
            <div className="mb-4 text-secondary">
              <BulbIcon />
            </div>
            <h3 className="text-lg font-bold mb-2 text-secondary">Enfoque Personalizado</h3>
            <p className="text-gray-600 text-sm">
              Cada estudiante recibe un acompañamiento adaptado a su realidad, promoviendo su autonomía y estabilidad emocional.
            </p>
          </div>

          {/* Beneficio 3 */}
          <div className="p-6 border border-gray-200 rounded-xl hover:border-primary transition-colors bg-white">
            <div className="mb-4 text-secondary">
              <BulbIcon />
            </div>
            <h3 className="text-lg font-bold mb-2 text-secondary">Análisis Avanzado</h3>
            <p className="text-gray-600 text-sm">
              El procesamiento tecnológico proporciona perspectivas profundas que complementan los métodos de observación tradicionales.
            </p>
          </div>

          {/* Beneficio 4 */}
          <div className="p-6 border border-gray-200 rounded-xl hover:border-primary transition-colors bg-white">
            <div className="mb-4 text-secondary">
              <BulbIcon />
            </div>
            <h3 className="text-lg font-bold mb-2 text-secondary">Seguimiento Continuo</h3>
            <p className="text-gray-600 text-sm">
              Monitoreo constante del progreso socioemocional para asegurar mejoras sostenibles alineadas a nuestros valores.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}