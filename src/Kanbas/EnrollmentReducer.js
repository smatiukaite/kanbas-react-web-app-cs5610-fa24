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
