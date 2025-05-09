import axios from "axios";

export const enrollInCourse = async (userId: string, courseId: string) => {
    try {
        const response = await axios.post('/api/enrollments', {
            userId,
            courseId,
        });
        return response.data;
    } catch (error) {
        console.error("Failed to enroll in course", error);
        throw error;
    }
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
    try {
        const response = await axios.delete(`/api/enrollments/${userId}/${courseId}`);
        return response.data;
    } catch (error) {
        console.error("Failed to unenroll from course", error);
        throw error;
    }
};

export const getUserEnrollments = async (userId: string) => {
    try {
        const response = await axios.get(`/api/enrollments/user/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Failed to get user enrollments", error);
        throw error;
    }
};
