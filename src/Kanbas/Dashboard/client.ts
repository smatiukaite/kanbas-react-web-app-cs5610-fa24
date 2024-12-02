import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/dashboard`;

// Enroll a user in a course
export const enrollUserInCourse = async (userId: string, courseId: string) => {
    const response = await axios.post(ENROLLMENTS_API, { userId, courseId });
    return response.data;
};

// Unenroll a user from a course
export const unenrollUserFromCourse = async (userId: string, courseId: string) => {
    const response = await axios.delete(ENROLLMENTS_API, {
        data: { userId, courseId },
    });
    return response.data;
};


// const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;
// export const fetchAssignment = async () => {
//   const response = await axios.get(`${ASSIGNMENT_API}`);
//   return response.data;
// };

// export const updateTitle = async (title: string) => {
//   const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
//   return response.data;
// };
