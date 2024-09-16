export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><h3>Assignment Name </h3></label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" cols={60} rows={10}>
                The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.
                The landing page should include the following:
                -Your full name and section
                -links to each of the lab assignments
                -link to the Kanbas application
                -links to all relevent source code repositories
                -the Kanbas application should include a link to navigate back to the landing page.
            </textarea><br /><br />

            <table border={0} width="100%">
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td align="left">
                        <input id="wd-points" value={100} type="number" />
                    </td>
                </tr><br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option selected value="ASSIGNMENTS">
                                Assignment</option>
                            <option value="EXAMS">Exams</option>
                            <option value="PROJECT">Project</option>
                            <option value="QUIZ">Quizes</option>
                        </select>
                    </td>
                </tr><br />

                <tr>

                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="NUMBER">Number</option>
                            <option selected value="PERCENTAGE">Percentage</option>
                        </select>
                    </td>
                </tr><br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="INPERSON">In Person</option>
                            <option selected value="ONLINE">Online</option>
                        </select>
                    </td>
                </tr><br />

                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-text-entry">Online Entry Options</label>
                        <br />
                        <input type="checkbox" name="check-genre" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" name="check-genre" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />

                        <input type="checkbox" name="check-genre" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                        <input type="checkbox" name="check-genre" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotatio">Student Annotation</label><br />

                        <input type="checkbox" name="check-genre" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label><br />
                    </td>
                </tr><br />

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd=assign-to">Assign</label>
                    </td>

                    <td>
                        <label htmlFor="wd-assign-to">Assign to</label>
                        <td>
                            <input type="text"
                                placeholder="Everyone"
                                id="wd-assign-to" /><br />
                        </td><br />

                        <label htmlFor="wd-due-date">Due</label><br />
                        <input type="date"
                            id="wd-due-date"
                            value="2024-05-13" /><br /><br />

                        <table border={0} width="10%">
                            <thead>
                                <tr>
                                    <td>Available from </td>
                                    <td>Until</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="date"
                                            id="wd-vailable-until"
                                            value="2024-05-20" />
                                    </td>
                                    <td>
                                        <input type="date"
                                            id="wd-available-from"
                                            value="2024-05-06" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td> 
                </tr>
            </table>

            <center>
                <button>Cancel</button> <button>Save</button>
            </center>

        </div>
    );
}