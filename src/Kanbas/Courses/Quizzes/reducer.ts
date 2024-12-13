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
                ...quiz,
                _id: new Date().getTime().toString()
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