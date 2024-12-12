import './index.css';
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { deleteAssignment, updateAssignment } from "./reducer";
import { useNavigate } from "react-router-dom";

export default function AssignmentEditor() {
    const { aid, cid } = useParams<{ aid: string; cid: string }>();
    const assignments = useSelector((state: any) => state.assignmentReducer.assignments);
    const assignment = { ...assignments.find((it: any) => it._id === aid) };

    const handleCheckboxChange = (field: string, checked: boolean) => {
        const updatedAssignment = {
            ...assignment,
            [field]: checked,
        };
        dispatch(updateAssignment(updatedAssignment)); // Update Redux state
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(updateAssignment(assignment)); // Dispatch the updated assignment
        navigate(`/Kanbas/Courses/${cid}/Assignments/`); // Navigate to the Assignments page
    };

    const handleCancel = () => {
        // Dispatch deleteAssignment if the assignment is newly created
        if (aid) {
            dispatch(deleteAssignment(aid)); // Delete the assignment by its ID
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments/`); // Navigate back to assignments page
    };

    return (
        // 1st part of the page
        <div id="wd-assignments-editor" className="wd-container-margins">
            <div className="wd-between-elements-margins" key={assignment._id}>
                <label htmlFor="wd-name" className="form-label">
                    Assignment Name
                </label>
                <input className="form-control" type="text"
                    defaultValue={assignment.title}
                    placeholder="Title"
                    onChange={(e) => { assignment.title = e.target.value }}
                />
            </div>

            {/* 2nd part of the page */}
            <div id="wd-css-responsive-forms-1">
                <div className="row wd-between-elements-margins mt-3">
                    <label htmlFor="wd-points"
                        className="col-sm-2 col-form-label text-end">
                        Points
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            defaultValue={assignment.points}
                            className="form-control"
                            id="wd-points"
                            onChange={(e) => { assignment.points = e.target.value }} />
                    </div>
                </div>

                <div className="row wd-between-elements-margins">
                    <label htmlFor="assignmentgroup"
                        className="col-sm-2 col-form-label text-end">
                        Assignment Group </label>
                    <div className="col-sm-10">
                        <select id="wd-group"
                            className="form-select"
                            value={assignment.assignmentGroup}
                            onChange={(e) => {
                                const updatedAssignment = { ...assignment, assignmentGroup: e.target.value };
                                dispatch(updateAssignment(updatedAssignment))
                            }}>
                            <option selected>Select type</option>
                            <option value="ASSIGNMENTS">Assignment</option>
                            <option value="EXAMS">Exams</option>
                            <option value="PROJECT">Project</option>
                            <option value="QUIZ">Quiz</option>
                        </select>
                    </div></div>

                <div className="row wd-between-elements-margins">
                    <label htmlFor="grade"
                        className="col-sm-2 col-form-label text-end">
                        Display Grade as </label>
                    <div className="col-sm-10">
                        <select id="wd-display-grade-as" className="form-select"
                            value={assignment.displayGrade}
                            onChange={(e) => {
                                const updatedAssignment = { ...assignment, displayGrade: e.target.value };
                                dispatch(updateAssignment(updatedAssignment))
                            }}>
                            <option selected>Select type</option>
                            <option value="NUMBER">Number</option>
                            <option value="PERCENTAGE">Percentage</option>
                        </select>
                    </div></div>

                <div className="row wd-between-elements-margins">
                    <label htmlFor="submissiontype"
                        className="col-sm-2 col-form-label text-end">
                        Submission Type</label>
                    <div className="col-sm-10 wd-custom-box">
                        <div>
                            <select id="wd-submission-type" className="form-select wd-between-elements-margins"
                                value={assignment.submissiontype}
                                onChange={(e) => {
                                    const updatedAssignment = { ...assignment, submissionType: e.target.value };
                                    dispatch(updateAssignment(updatedAssignment))
                                }}>
                                <option selected>Select type</option>
                                <option value="INPERSON">In person</option>
                                <option value="ONLINE">Online</option>
                            </select>
                        </div>
                        <div>
                            <div className="col-sm-5 offset-sm-0">
                                <label htmlFor="wd-text-entry" className="wd-bold-text">Online Entry Options</label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="wd-text-entry"
                                        checked={assignment.textEntry} // Bind to state
                                        onChange={(e) => handleCheckboxChange("textEntry", e.target.checked)}
                                    />
                                    <label className="form-check-label wd-regular-text-padding" htmlFor="wd-text-entry">
                                        Text entry
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="wd-website-url"
                                        checked={assignment.website}
                                        onChange={(e) => handleCheckboxChange("website", e.target.checked)}
                                    />
                                    <label className="form-check-label wd-regular-text-padding" htmlFor="wd-website-url">
                                        Website URL </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="wd-media-recordings"
                                        checked={assignment.media}
                                        onChange={(e) => handleCheckboxChange("media", e.target.checked)}
                                    />
                                    <label className="form-check-label wd-regular-text-padding" htmlFor="wd-media-recordings">
                                        Media Recordings </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="wd-student-annotation"
                                        checked={assignment.annotation}
                                        onChange={(e) => handleCheckboxChange("annotation", e.target.checked)}
                                    />
                                    <label className="form-check-label wd-regular-text-padding" htmlFor="wd-student-annotation">
                                        Student Annotation </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="wd-file-upload"
                                        checked={assignment.fileUploads}
                                        onChange={(e) => handleCheckboxChange("fileUploads", e.target.checked)}
                                    />
                                    <label className="form-check-label wd-regular-text-padding" htmlFor="wd-file-upload">
                                        File Uploads </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="mb-3 row">
                    <label htmlFor="assign"
                        className="col-sm-2 col-form-label text-end">
                        Assign</label>
                    <div className="col-sm-10 wd-custom-box wd-between-elements-margins">
                        <label htmlFor="wd-assign-to" className="wd-bold-text">Assign to</label>
                        <div className="wd-between-elements-margins">
                            <select id="wd-assign-to" className="form-select"
                                value={assignment.assignTo}
                                onChange={(e) => {
                                    const updatedAssignment = { ...assignment, assignTo: e.target.value };
                                    dispatch(updateAssignment(updatedAssignment))
                                }}>
                                <option selected>Select type</option>
                                <option value="EVERYONE">Everyone</option>
                                <option value="PAULNUNEZ">Paul Nunez</option>
                                <option value="LINDSEYCLARK">Lindsey Clark</option>
                                <option value="SERGSMITH">Serg Smith</option>
                                <option value="MONICAROLLS">Monika Rolls</option>
                            </select>
                        </div>

                        {/* Two dates */}
                        <div className="wd-between-elements-margins">
                            <label htmlFor="wd-due-date" className="wd-regular-text-padding wd-bold-text ">Due</label>
                            <input
                                id="wd-due-date"
                                placeholder="date"
                                defaultValue={assignment.due}
                                onChange={(e) => { assignment.due = e.target.value }}
                                className="form-control mb-2" />
                        </div>

                        <div className="wd-custom-date-container">
                            <div className="wd-two-custom-date-containers">
                                <label htmlFor="wd-available-from" className="wd-regular-text-padding wd-bold-text">Available from</label>
                                <input
                                    id="wd-available-from"
                                    placeholder="date"
                                    defaultValue={assignment.until}
                                    onChange={(e) => { assignment.until = e.target.value }}
                                    className="form-control mb-2" />
                            </div>
                            <div className="wd-two-custom-date-containers">
                                <label htmlFor="wd-available-until" className="wd-regular-text-padding wd-bold-text">Until</label>
                                <input id="wd-available-until"
                                    type="date"
                                    className="form-control mb-2" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="modal-footer">
                <button onClick={handleCancel}
                    type="button"
                    className="btn btn-secondary">
                    Cancel
                </button>
                &nbsp;  &nbsp;
                <button onClick={handleSave} type="button" className="btn btn-danger">
                    Save
                </button>
                {/* <button onClick={() => dispatch(updateAssignment(assignment))} type="button" className="btn btn-danger">
                    Save
                </button> */}
            </div>
        </div >
    );
}