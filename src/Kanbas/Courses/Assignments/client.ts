import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const deleteAssignment = async (assignmentId: string) => {
    const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
};

export const updateAssignment = async (assignment: any) => {
    const { data } = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return data;
};

// export const fetchAssignmentsInCourse = async (courseID) => {
//     const { data } = await axios.get(`${COURSES_API}/${courseID}`);
//     return data;
//   };
//   export const fetchAssignmentByID = async (courseID, assignmentID) => {
//     const { data } = await axios.get(`${COURSES_API}/${courseID}/${assignmentID}`);
//     return data;
//   };
  
//   export const deleteAssignment = async (courseID, assignmentID) => {
//     const { data } = await axios.delete(`${COURSES_API}/${courseID}/${assignmentID}`);
//     return data;
//   };
  
//   export const createAssignment = async (newAssignment) => {
//     const { data } = await axios.post(`${COURSES_API}/new`, newAssignment);
//     return data;
//   };
  
//   export const updateAssignment = async (updatedAssignment) => {
//     const { data } = await axios.put(`${COURSES_API}/update`, updatedAssignment);
//     return data;
//   };