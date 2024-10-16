import { Link } from "react-router-dom";
import './index.css';
import { useParams } from "react-router";
import * as db from "../../Database";

export default function AssignmentEditor() {
    const { aid } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment._id === aid);
    return (
        // 1st part of the page
        <div id="wd-assignments-editor" className="wd-container-margins">
            {assignments.map((assignment) => (
                <div className="wd-between-elements-margins" key={assignment._id}>
                    <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="wd-name"
                        value={assignment.title} />
                </div>
            ))}

            {assignments.map((assignment) => (
                <div className="wd-between-elements-margins">
                    {/* {assignment.description} */}
                    <div className="description-text wd-container-borders wd-between-elements-margins" id="wd-description"> 
                        <p>The assignment is
                            <a href="https://docs.google.com/document/d/1vmoLm12fKv7W3y3H-2HdsPzy4GvNrdyTfic6BLoE5yA/edit" target="docs" rel="google docs">
                                available online
                            </a>
                            .</p>
                        <p>Submit a link to the landing page of your Web application running on Netlify.</p>
                        <p>The landing page should include the following:</p>
                        <ul>
                            <li>Your full name and section</li>
                            <li>Links to each of the lab assignments</li>
                            <li>
                                Link to the Kanbas application
                            </li>
                            <li>Links to all relevant source code repositories</li>
                        </ul>
                        <p>
                            The Kanbas application should include a link to navigate back to the landing page.
                        </p>
                    </div>

                    {/* 2nd part of the page */}
                    <div id="wd-css-responsive-forms-1">
                        <div className="row wd-between-elements-margins">
                            <label htmlFor="wd-points"
                                className="col-sm-2 col-form-label text-end">
                                Points </label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"
                                    id="wd-points" placeholder={assignment.points} />
                            </div>
                        </div>

                        <div className="row wd-between-elements-margins">
                            <label htmlFor="assignmentgroup"
                                className="col-sm-2 col-form-label text-end">
                                Assignment Group </label>
                            <div className="col-sm-10">
                                <select id="wd-group" className="form-select">
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
                                <select id="wd-display-grade-as" className="form-select">
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
                                    <select id="wd-submission-type" className="form-select wd-between-elements-margins">
                                        <option selected>Select type</option>
                                        <option value="INPERSON">In person</option>
                                        <option value="ONLINE">Online</option>
                                    </select>
                                </div>
                                <div>
                                    <div className="col-sm-5 offset-sm-0">
                                        <label htmlFor="wd-text-entry" className="wd-bold-text">Online Entry Options</label>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                                            <label className="form-check-label wd-regular-text-padding" htmlFor="wd-text-entry">
                                                Text entry </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="wd-website-url" />
                                            <label className="form-check-label wd-regular-text-padding" htmlFor="wd-website-url">
                                                Website URL </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                                            <label className="form-check-label wd-regular-text-padding" htmlFor="wd-media-recordings">
                                                Media Recordings </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                                            <label className="form-check-label wd-regular-text-padding" htmlFor="wd-student-annotation">
                                                Student Annotation </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="wd-file-upload" />
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
                                    <select id="wd-assign-to" className="form-select">
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
                                    <input id="wd-due-date"
                                       
                                        placeholder="date"
                                        className="form-control mb-2" 
                                        value={assignment.due}
                                        />
                                </div>

                                <div className="wd-custom-date-container">
                                    <div className="wd-two-custom-date-containers">
                                        <label htmlFor="wd-available-from" className="wd-regular-text-padding wd-bold-text">Available from</label>
                                        <input id="wd-available-from"
                                            className="form-control mb-2"
                                            value={assignment.until}
                                            />
                                    </div>
                                    <div className="wd-two-custom-date-containers">
                                        <label htmlFor="wd-available-until" className="wd-regular-text-padding wd-bold-text">Until</label>
                                        <input id="wd-available-until"
                                            type="date"
                                            className="form-control mb-2" />
                                    </div>
                                </div>
                            </div>

                            {/* Two buttons */}
                        </div>
                        <div className="wd-custom-button-container">
                            <Link id="wd-cancel-btn"
                                to={`/Kanbas/Courses/${assignment.course}/Assignments`}
                                className="btn btn-secondary wd-custom-button">
                                Cancel </Link>
                            <Link id="wd-save-btn"
                                to={`/Kanbas/Courses/${assignment.course}/Assignments`}
                                className="btn btn-danger wd-custom-button">
                                Save </Link>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
}