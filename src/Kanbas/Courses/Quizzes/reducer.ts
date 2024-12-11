import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    quizzes: [],
    isInitialized: false
};
const quizSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        setQuizzes: (state, action) => {
            state.quizzes = action.payload;
            state.isInitialized = true;
        },
        createQuiz: (state, { payload: quiz }) => {
            const newQuiz: any = {
                _id: new Date().getTime().toString(),
                title: quiz.title,
                course: quiz.course,
                description: quiz.description,
                courseId: quiz.courseId,
                points: quiz.points,
                due: quiz.due,
                availablility: quiz.available,
                until: quiz.until,
                visibility: quiz.visibility,
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

        editQuiz: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.map((a: any) =>
                a._id === quizId ? { ...a, editing: true } : a
            ) as any;
        },
    },

});

export const { createQuiz, deleteQuiz, updateQuiz, editQuiz, setQuizzes } =
    quizSlice.actions;
export default quizSlice.reducer;