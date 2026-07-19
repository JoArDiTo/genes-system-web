import type { TestPerformed } from "../interfaces/TestPerfomed"
import { NoteIcon } from "../icons/Note"
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { UserRole } from "../lib/enum";

export const TestPerformedCard = ({ test }: { test:TestPerformed }) => {
  const authContext = useContext(AuthContext);
  if (!authContext) throw new Error('LoginPage must be used within an AuthProvider');

  const { user } = authContext;
  const { templateTest, createdAt, score } = test

  return (
    <article className="block w-full max-w-md p-4 sm:p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-bg-alt transition-colors duration-200">
      <p className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-secondary flex items-center gap-2">
        <span className="text-primary"><NoteIcon /></span> {templateTest}
      </p>
      <div className="flex items-center justify-between mt-4">
        <div className="flex flex-col [&>p]:font-medium [&>p]:text-xs [&>p]:sm:text-sm text-gray-500">
          <p>{new Date(createdAt).toLocaleDateString()}</p>
          <p>{new Date(createdAt).toLocaleTimeString()}</p>
        </div>
        { user?.role === UserRole.TEACHER && (
          <p className="text-sm sm:text-base font-bold bg-primary/10 text-secondary px-3 py-1 rounded-full">
            Resultado: <span className="text-primary font-extrabold">{score}</span>
          </p>
        )}
      </div>
    </article>
  ) 
}