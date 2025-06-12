import { Redirect, useRoute } from "wouter";
import { MainLayout } from "../layouts/MainLayout"
import useFetch from "../hooks/useFetch";
import type { TestPerformedSelected } from "../interfaces/TestPerformedSelected";
import { getObservationsByTestPerformedId, getTestPerformedById } from "../lib/api";
import { ArrowUpIcon } from "../icons/ArrowUp";
import Loading from "../components/Loading";
import ErrorContent from "../components/Error";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { UserRole } from "../lib/enum";
import { TestPerformedDetail } from "../sections/result/TestPerformedDetail";
import { ChangeSection } from "../sections/result/ChangeSection";
import { AnswersSection } from "../sections/result/AnswersSection";
import { ObservationSection } from "../sections/result/ObservationSection";
import { GeminiInteractionSection } from "../sections/result/GeminiInteractionSection";
import type { ObservationResponse } from "../interfaces/ObservationResponse";

export const ResultSelectedPage = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) throw new Error('LoginPage must be used within an AuthProvider');

  const { user } = authContext;
  const [match, params] = useRoute("/resultados/:id");
  if (!match) return <Redirect to="/resultados" />

  const {
    data: resultData,
    loading: resultLoading,
    error: resultError,
  } = useFetch<TestPerformedSelected>(() => getTestPerformedById(params.id));

  const {
    data: resultObservations,
    loading: resultObservationsLoading,
    error: resultObservationsError,
  } = useFetch(() => getObservationsByTestPerformedId(params.id));

  const [currentSection, setCurrentSection] = useState<'answers' | 'observations' | 'ai'>('answers');
  const [geminiResult, setGeminiResult] = useState<{ sessionId:string, observations: string; } | null>(null);

  const [observations, setObservations] = useState<ObservationResponse[]>([]);

  useEffect(() => {
    if (resultObservations && !resultObservationsLoading && !resultObservationsError) {
      setObservations(resultObservations);
    }
  }, [resultObservations, resultObservationsLoading, resultObservationsError]);

  return (
    <MainLayout>
      <section className="relative container mx-auto p-4">
        {
          user?.role === UserRole.TEACHER 
          ? <button onClick={() => history.back()} className="cursor-pointer absolute right-5 bg-red-500 text-white px-4 py-2 rounded mb-4 hover:bg-red-600 hover:scale-110 transition">Volver</button>
          : <a href="/resultados" className="cursor-pointer absolute right-5 bg-red-500 text-white px-4 py-2 rounded mb-4 hover:bg-red-600 hover:scale-110 transition">Volver</a>
        }
        <h1 className="text-2xl font-bold">Resultados</h1>
        {resultLoading && <Loading />}
        {resultError && <ErrorContent />}
        {!resultLoading && !resultError && resultData && (
          <div className="mt-4">
            <TestPerformedDetail resultData={resultData} />

            <ChangeSection setCurrentSection={setCurrentSection} currentSection={currentSection} />

            <main>
              {currentSection === 'answers' && <AnswersSection resultData={resultData} /> }
              {currentSection === 'observations' && <ObservationSection data={observations} loading={resultObservationsLoading} error={resultObservationsError} /> }
              {currentSection === 'ai' && user?.role === UserRole.TEACHER && <GeminiInteractionSection resultData={resultData} geminiResult={geminiResult} setGeminiResult={setGeminiResult} setCurrentSection={setCurrentSection} setObservations={setObservations} /> }
            </main>
          </div>
        )}
      </section>
      <a className="fixed aspect-square bg-sky-300 p-3 rounded-lg left-5 bottom-5 transition hover:scale-110" href="#top">
        <ArrowUpIcon />
      </a>
    </MainLayout>
  )
}