export const FunctionalitySection = () => {
  return (
    <section id="como-funciona" className="py-16 bg-bg-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-secondary">¿Cómo Funciona?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Aprovechamos la vanguardia de la tecnología para estructurar un proceso claro y seguro que garantiza 
            el acompañamiento socioemocional óptimo de cada alumno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Paso 1 */}
            <div className="mb-8">
              <div className="flex items-start mb-4">
                <div className="bg-primary text-secondary font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0 shadow-sm">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-secondary">Cuestionarios Especializados</h3>
                  <p className="text-gray-600">
                    Los estudiantes completan evaluaciones periódicas en un entorno digital intuitivo, diseñadas 
                    cuidadosamente para medir indicadores clave de su bienestar emocional.
                  </p>
                </div>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="mb-8">
              <div className="flex items-start mb-4">
                <div className="bg-primary text-secondary font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0 shadow-sm">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-secondary">Perspectiva del Personal Capacitado</h3>
                  <p className="text-gray-600">
                    Nuestros docentes y tutores complementan los datos aportando su observación diaria en el aula, 
                    infundiendo alegría, seguridad y confianza en todo momento.
                  </p>
                </div>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="mb-8">
              <div className="flex items-start">
                <div className="bg-primary text-secondary font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0 shadow-sm">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-secondary">Análisis Inteligente y Recomendaciones</h3>
                  <p className="text-gray-600">
                    El sistema procesa la información mediante algoritmos avanzados para identificar patrones tempranos, 
                    generando reportes útiles enfocados en proyectos de vida reales y significativos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/home2.jpg"
              alt="Proceso del Sistema San Roque"
              className="max-w-full h-auto rounded-lg shadow-xl border border-gray-100"
            />
          </div>
        </div>
      </div>
    </section>
  )
}