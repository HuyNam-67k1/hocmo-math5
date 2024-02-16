import { create } from 'zustand';

import { ANSWER_TYPES } from '../../utils/constans';

interface Answer {
  selectedAnswerId: number[];
}
interface ExamAttemptState {
  currentAttemptId: number;
  answers: Answer[];
  startExam: (currentAttemptId: number, answers: Answer[]) => void;
  finistExam: () => void;
  answerTheQuestion: (value: any, index: number, answerTypeId: number) => void;
}
export const useExamAttemptStore = create<ExamAttemptState>((set: any) => ({
  currentAttemptId: -1,
  answers: [],
  // INIT data for an attempt
  startExam: (
    currentAttemptId: number,
    answers: { selectedAnswerId: number[] }[],
  ) => {
    set((state: ExamAttemptState) => ({ ...state, currentAttemptId, answers }));
  },
  finistExam: () => {
    set((state: ExamAttemptState) => ({ ...state, currentAttemptId: -1 }));
  },
  answerTheQuestion: (value: any, index: number, answerTypeId: any) => {
    if ([ANSWER_TYPES.SINGLE, ANSWER_TYPES.MULTIPLE].includes(answerTypeId )) {
      set((state: ExamAttemptState) => {
        const newAnswers = [...state.answers];
        newAnswers[index] = { selectedAnswerId: value };
        return { ...state, answers: newAnswers };
      });
    }
  },
}));
