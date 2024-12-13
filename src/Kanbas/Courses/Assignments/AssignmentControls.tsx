import { FaPlus } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { assignments } from "../../Database";
import { createAssignment } from "./reducer";

export default function AssignmentControls({ cid }: { cid: string }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleCreateAssignment = () => {
        const newAssignment = {
            _id: new Date().getTime().toString(), // Generate a unique ID
            title: "New Assignment",
            course: cid,
            description: "",
            courseId: cid,
            points: 0,
            due: "",
            available: "",
            until: "",
            textEntry: false,
            url: false,
            media: false,
            annotation: false,
            fileUploads: false,
            displayGrade: "NUMBER",
            assignmentGroup: "ASSIGNMENTS",
            submitionType: "INPERSON",
        };
        dispatch(createAssignment(newAssignment)); // Add the new assignment to Redux
        navigate(`/Kanbas/Courses/${cid}/Assignments/Detail/${newAssignment._id}`); // Navigate to AssignmentEditor with the new ID
    };

    return (
        <div id="wd-assignment-controls" className="text-nowrap">
            <button
                id="wd-add-assignment-btn"
                className="btn btn-md btn-danger me-3 float-end"
                onClick={handleCreateAssignment}
            >
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </button>

            <button id="wd-add-assignment-group" className="btn btn-md btn-secondary me-2 float-end">
                <FaPlus className="position-relative me-2 wd-bottom-padding" />
                Group</button>

            <div>
                {/* Search and the magnifier */}
                <div className="wd-flex-containe">
                    <div className="wd-search-container">
                        <CiSearch className="wd-search-icon" />
                        <input
                            id="wd-search-assignment"
                            placeholder="Search..."
                            className="wd-search-input" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function dispatch(arg0: any) {
    throw new Error("Function not implemented.");
}
