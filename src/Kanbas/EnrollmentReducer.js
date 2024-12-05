import { ENROLL_COURSE, UNENROLL_COURSE, LOAD_ENROLLMENTS } from './enrollmentActions';

const initialState = JSON.parse(localStorage.getItem('enrollments')) || [];

export default function enrollmentReducer(state = initialState, action) {
    switch (action.type) {
        case ENROLL_COURSE:
            const newEnrollment = { user: action.payload.userId, course: action.payload.courseId };
            const updatedState = [...state, newEnrollment];
            localStorage.setItem('enrollments', JSON.stringify(updatedState));
            return updatedState;

        case UNENROLL_COURSE:
            const filteredState = state.filter(
                (enrollment) =>
                    !(enrollment.user === action.payload.userId && enrollment.course === action.payload.courseId)
            );
            localStorage.setItem('enrollments', JSON.stringify(filteredState));
            return filteredState;

        case LOAD_ENROLLMENTS:
            return action.payload;

        default:
            return state;
    }
}


// import { createSlice } from "@reduxjs/toolkit";
// import { enrollments as initialEnrollments } from "./Database";

// const initialState = {
//   enrollments: initialEnrollments || [],
// };

// const enrollmentsSlice = createSlice({
//   name: "enrollments",
//   initialState,
//   reducers: {
//     addEnrollment: (state, { payload: enrollment }) => {
//       const newEnrollment = {
//         _id: new Date().getTime().toString(),
//         user: enrollment.user,
//         course: enrollment.course,
//       };
//       state.enrollments = [...state.enrollments, newEnrollment];
//     },
//     deleteEnrollment: (state, { payload: enrollment }) => {
//       state.enrollments = state.enrollments.filter(
//         (e) => !(e.user === enrollment.user && e.course === enrollment.course)
//       );
//     },
//     updateEnrollment: (state, { payload: enrollment }) => {
//       state.enrollments = state.enrollments.map((e) =>
//         e._id === enrollment._id ? enrollment : e
//       );
//     },
//   },
// });

// export const { addEnrollment, deleteEnrollment, updateEnrollment } = enrollmentsSlice.actions;
// export default enrollmentsSlice.reducer;

