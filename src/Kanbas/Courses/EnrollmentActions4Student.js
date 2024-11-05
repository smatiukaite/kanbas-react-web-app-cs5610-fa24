export const ENROLL_COURSE = 'ENROLL_COURSE';
export const UNENROLL_COURSE = 'UNENROLL_COURSE';
export const LOAD_ENROLLMENTS = 'LOAD_ENROLLMENTS';

export const enrollCourse = (userId, courseId) => ({
    type: ENROLL_A_COURSE,
    payload: { userId, courseId },
});

export const unenrollCourse = (userId, courseId) => ({
    type: UNENROLL_A_COURSE,
    payload: { userId, courseId },
});

export const loadAllEnrollments = (enrollments) => ({
    type: LOAD_THE_ENROLLMENTS,
    payload: enrollments,
});