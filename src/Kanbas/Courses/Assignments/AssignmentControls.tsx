import { FaPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import AssignmentEditor from "./AssignmentEditor";
export default function AssignmentControls(
    {
        assignmentName,
        setAssignmentName,
        createAssignment
    }: {
        assignmentName: string;
        setAssignmentName: (title: string) => void;
        createAssignment: () => void;
    }) {

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const userRole = currentUser?.role;
    const navigate = useNavigate();

    if (userRole === "FACULTY") {
        return (
            <div id="wd-assignment-controls" className="text-nowrap">
                <button
                    id="wd-create-assignment"
                    className="btn btn-md btn-danger me-3 float-end"
                // onClick={() => navigate(`/Kanbas/Courses/one/Assignments/custom_id`)}>
                >
                    <FaPlus className="position-relative me-2 wd-bottom-padding" />
                    Assignment
                </button>

                <button className="btn btn-lg btn-danger me-1 float-end" id="wd-create-module-btn"
                    data-bs-toggle="modal" data-bs-target="#wd-create-module-dialog" >
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </button>
                <AssignmentEditor
                    dialogTitle="Add Assignmnet"
                    assignmentName={assignmentName}
                    setAssignmentName={setAssignmentName} createAssignment={createAssignment} />

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
}