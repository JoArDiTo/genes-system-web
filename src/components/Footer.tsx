export const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-10 pb-12 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Línea decorativa superior en dorado institucional */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
      
      {/* Logo adaptado a la nueva ruta de San Roque */}
      <img src="/images/logo-sanroque.png" alt="Logo Colegio San Roque" className="h-10 w-auto mb-4" />
      
      <p className="text-sm text-gray-300 font-medium tracking-wide text-center px-4">
        &copy; 2026 Colegio San Roque. Todos los derechos reservados.
      </p>
      <p className="text-xs text-gray-400 mt-2 tracking-wider uppercase">
        Santiago de Surco, Lima, Perú
      </p>
    </footer>
  )
}