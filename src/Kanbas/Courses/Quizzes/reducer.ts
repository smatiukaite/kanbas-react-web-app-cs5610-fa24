import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
    quizzes: [{ id: 1, title: "Hi" }],
    isInitialized: false
};
const quizSlice = createSlice({
    name: "quizzes",
    initialState: {
        quizzes: [],
        isInitialized: false,
    },
    reducers: {
        setQuizzes: (state, action) => {
            state.quizzes = action.payload;
            state.isInitialized = true;
        },

        createQuiz: (state, { payload: quiz }) => {
            const newQuiz: any = {
                _id: new Date().getTime().toString(),
                title: quiz.title,
                description: quiz.description,
                quizType: quiz.type,
                course: quiz.course,
                courseId: quiz.courseId,
                assignmentGroup: quiz.assignmentGroup,
                points: quiz.points,
                shuffleAnswers: quiz.shuffleAnswers,
                isTimeLimit: quiz.isTimeLimit,
                timeLimit: quiz.timeLimit,
                multipleAttempts: quiz.multipleAttempts,
                oneQuestionAtATime: quiz.oneQuestionAtATime,
                showAnswers: quiz.showAnswers,
                webcam: quiz.webcam,
                lockQuestions: quiz.lockQuestions,
                assignTo: quiz.assignTo,
                accessCode: quiz.accessCode,
                viewResponses: quiz.viewResponses,
                respondusLockDown: quiz.respondusLockDown,
                requiredViewResults: quiz.requiredViewResults,
                dueDate: quiz.due,
                availableFrom: quiz.availableFrom,
                availablility: quiz.available,
                until: quiz.until,
                visibility: quiz.visibility,
                questionData: [],
            };
            state.quizzes = [...state.quizzes, newQuiz] as any;
        },

        deleteQuiz: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.filter((a: any) =>
                a._id !== quizId);
        },

        updateQuiz: (state, { payload: quiz }) => {
            state.quizzes = state.quizzes.map((a: any) =>
                a._id === quiz._id ? quiz : a
            ) as any;
        },

        // updateQuiz: (state, { payload: updatedQuiz }) => {
        //     state.quizzes = state.quizzes.map((quiz) =>
        //         quiz._id === updatedQuiz._id ? { ...quiz, ...updatedQuiz } : quiz
        //     );
        // },

        editQuiz: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.map((a: any) =>
                a._id === quizId ? { ...a, editing: true } : a
            ) as any;
        },

        createQuestion: (state, { payload: quizId }) => {

        },

        addQuestion: (state, { payload: quizId }) => {

        }



    },

});

export const {
    addQuestion, createQuiz, deleteQuiz, updateQuiz, editQuiz, setQuizzes, } = quizSlice.actions;
export default quizSlice.reducer;