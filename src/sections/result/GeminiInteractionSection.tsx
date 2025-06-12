import { toast } from "sonner";
import type { GeminiPayload } from "../../interfaces/GeminiPayload";
import type { TestPerformedSelected } from "../../interfaces/TestPerformedSelected";
import { generateObservation, validateObservation, sendObservation } from "../../lib/api";
import type { ObservationResponse } from "../../interfaces/ObservationResponse";
import { useState } from "react";
import { AiIcon } from "../../icons/AI";
import { LoadingIcon } from "../../icons/Loading";

interface Props {
  resultData: TestPerformedSelected
  geminiResult?: { sessionId: string; observations: string } | null;
  setGeminiResult: (result: { sessionId: string; observations: string } | null) => void;
  setCurrentSection?: (section: 'answers' | 'observations' | 'ai') => void;
  setObservations?: React.Dispatch<React.SetStateAction<ObservationResponse[]>>;
}

export const GeminiInteractionSection = ({ resultData, geminiResult, setGeminiResult, setCurrentSection, setObservations }: Props) => {
  const [loadingGeminiResponse, setLoadingGeminiResponse] = useState(false);
  const [loadingValidation, setLoadingValidation] = useState(false);
  const [loadingObservation, setLoadingObservation] = useState(false);
  const [analysisContent, setAnalysisContent] = useState('');
  const [geminiValidationContent, setGeminiValidationContent] = useState('');

  const handleAskGemini = async () => {
    setLoadingGeminiResponse(true);
    try {
      const payload: GeminiPayload = {
        templateTestName: resultData.templateTest.name,
        studentName: `${resultData.user.firstname} ${resultData.user.lastname}`,
        studentGender: resultData.user.gender,
        studentAge: resultData.user.age,
        answers: resultData.answers.map(answer => ({
          question: answer.question,
          alternative: answer.alternative
        }))
      };

      const response = await generateObservation(payload);
      setGeminiResult({
        sessionId: response.sessionId,
        observations: response.observations,
      });
    } catch (error) {
      toast.error("Ocurrió un error al generar la observación con Gemini.");
    } finally {
      setLoadingGeminiResponse(false);
    }
  };

  const handleValidateObservation = async () => {
    if (!geminiResult) {
      toast.error("No hay idea generada por la IA para validar");
      return;
    }

    if (!analysisContent || analysisContent.trim() === '') {
      toast.error("Por favor, escribe un análisis antes de validar");
      return;
    }

    setLoadingValidation(true);

    const payload = {
      sessionId: geminiResult.sessionId,
      studentName: `${resultData.user.firstname} ${resultData.user.lastname}`,
      templateTestName: resultData.templateTest.name,
      content: analysisContent.trim()
    }

    const result = await validateObservation(payload)
    setGeminiValidationContent(result.validation);
    
    setLoadingValidation(false);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoadingObservation(true);

    if (!analysisContent || analysisContent.trim() === '') {
      toast.error("Por favor, escribe un análisis antes de validar");
      return;
    }

    const newa: ObservationResponse = await sendObservation(resultData.id, analysisContent.trim());
    setObservations?.((prev: ObservationResponse[]) => ([...prev, newa]))
    toast.success("Observación enviada correctamente");
    setCurrentSection && setCurrentSection('observations')
    setLoadingObservation(false)
  }

  return (
    <section className="flex flex-col xl:flex-row items-start justify-between gap-8 p-6">
      <div className="w-full xl:max-w-xl space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-blue-700 mb-2 flex items-center gap-2">
        <AiIcon />
        Consulta con Gemini AI
        </h2>
        <p className="text-gray-600 text-justify">
        Gemini AI generará una respuesta personalizada basada en el test que respondiste. La información proporcionada se utiliza únicamente para mejorar el servicio y puedes estar seguro de que no se compartirá con terceros.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Envía tu análisis y recomendaciones al estudiante</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
        <textarea
          name="analysis"
          placeholder="Escribe tu análisis..."
          className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none transition"
          disabled={loadingObservation}
          value={analysisContent}
          onChange={(e) => setAnalysisContent(e.target.value)}
          required
        />
        <button
          disabled={loadingObservation}
          type="submit"
          className='w-full flex items-center justify-center gap-2 mt-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-blue-700 cursor-pointer transition disabled:bg-gray-400 disabled:cursor-not-allowed'
        >
          {loadingObservation && (
          <LoadingIcon />
          )}
          {loadingObservation ? "Enviando..." : "Enviar"}
        </button>
        <button
          type="button"
          disabled={loadingValidation}
          onClick={handleValidateObservation}
          className='w-full flex items-center justify-center gap-2 mt-1 bg-green-600 text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-green-700 cursor-pointer transition disabled:bg-gray-400 disabled:cursor-not-allowed'
        >
          {loadingValidation ? 'Validando...' : 'Validar análisis'}
        </button>
        </form>
        {geminiValidationContent && (
          <div className="mt-4 bg-white rounded-lg p-4 border border-green-100 shadow-sm">
            <h3 className="font-semibold text-green-600 mb-2 flex items-center gap-1">
              <AiIcon />
              Validación de Gemini
            </h3>
            <p className="text-gray-700 whitespace-pre-line">{geminiValidationContent}</p>
          </div>
        )}
      </div>
      </div>
      <div className="flex-1 w-full xl:pl-8 mt-8 xl:mt-0">
      <div className="bg-blue-50 rounded-xl p-5 shadow-inner">
        <h2 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
        <AiIcon />
        Generar idea del test tomado
        </h2>
        <button
        disabled={loadingGeminiResponse}
        onClick={handleAskGemini}
         className='w-full flex items-center justify-center gap-2 mt-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-blue-700 cursor-pointer transition disabled:bg-gray-400 disabled:cursor-not-allowed'
        >
        {loadingGeminiResponse ? (
          <>
          <LoadingIcon /> <p>Generando...</p>
          </>
        ) : (
          <p>{geminiResult ? 'Generar nuevamente' : 'Generar idea'}</p>
        )}
        
        </button>
        {geminiResult && (
        <div className="mt-6 bg-white rounded-lg p-4 border border-blue-100 shadow-sm">
          <h3 className="font-semibold text-blue-600 mb-2 flex items-center gap-1">
          <AiIcon />
          Observaciones de Gemini
          </h3>
          <p className="text-gray-700 whitespace-pre-line">{geminiResult.observations}</p>
        </div>
        )}
      </div>
      </div>
    </section>
  )
}