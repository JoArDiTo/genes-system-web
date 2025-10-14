export interface GeminiPayload {
    templateTestName: string;
    templateTestDescription: string;
    studentName: string;
    studentGender: string;
    studentAge: number;
    answers: {
      question: string;
      alternative: string;
    }[];
  }

export interface ValidatePayload {
  sessionId: string;
  studentName: string;
  templateTestName: string;
  content: string;
}