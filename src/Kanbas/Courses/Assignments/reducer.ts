import { createSlice } from "@reduxjs/toolkit";
//import { assignments } from "../../Database";
const initialState = {
    assignments: [],
    isInitialized: false
};
const assignmentSlice = createSlice({
    name: "assignments",
    initialState: {
        assignments: [],
        isInitialized: false,
    },
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
            state.isInitialized = true;
        },

        // Create an assignment
        createAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                title: assignment.title,
                course: assignment.course,
                description: assignment.description,
                courseId: assignment.courseId,
                points: assignment.points,
                due: assignment.due,
                available: assignment.available,
                until: assignment.until,
                textEntry: assignment.textEntry,
                url: assignment.url,
                media: assignment.media,
                annotation: assignment.annotation,
                fileUploads: assignment.fileUploads,
                displayGrade: assignment.displayGrade,
                assignmentGroup: assignment.assignmentGroup,
                submitionType: assignment.submitionType,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },

        // Deletes an assignment
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter((a: any) =>
                a._id !== assignmentId);
        },

        //Saves the updates
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a
            ) as any;
        },

        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignmentId ? { ...a, editing: true } : a
            ) as any;
        }
    },
});

export const { createAssignment, deleteAssignment, updateAssignment, editAssignment, setAssignments } =
    assignmentSlice.actions;
export default assignmentSlice.reducer;