import ErrorContent from "../../components/Error";
import Loading from "../../components/Loading";
import type { ObservationResponse } from "../../interfaces/ObservationResponse";

interface Props {
  data: ObservationResponse[];
  loading: boolean;
  error: any;
}

export const ObservationSection = ({ data, loading, error }: Props) => {
  console.log(data)
  return (
    <section className="bg-white rounded-lg shadow p-6 mb-6">
      <h3 className="text-xl font-bold mb-4 text-blue-700 flex items-center gap-2">
      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2M7 7a4 4 0 118 0 4 4 0 01-8 0z" />
      </svg>
      Observaciones
      </h3>
      {loading && (
      <div className="flex justify-center items-center py-8">
        <Loading />
      </div>
      )}
      {error && (
      <div className="py-4">
        <ErrorContent />
      </div>
      )}
      {!loading && !error && data && (
      <>
        {data.length > 0 ? (
        <ul className="space-y-4">
          {data.map((observation) => (
          <li key={observation.id} className="border rounded-md p-4 bg-gray-50 hover:bg-gray-100 transition">
            <p className="font-medium text-gray-800 mb-1">
            <span className="text-blue-600">Análisis:</span> {observation.analysis}
            </p>
            <p className="text-xs text-gray-500">
            Creado el: {new Date(observation.createdAt).toLocaleDateString()}
            </p>
          </li>
          ))}
        </ul>
        ) : (
        <p className="text-gray-500 italic">No hay observaciones disponibles.</p>
        )}
      </>
      )}
    </section>
  )
}