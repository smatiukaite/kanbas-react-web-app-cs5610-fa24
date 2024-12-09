import { FaPlus } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import AssignmentEditor from "./AssignmentEditor";
import { assignments } from "../../Database";
export default function AssignmentControls({ cid }: { cid: string }) {
    const navigate = useNavigate();
    const getNextId = () => {
        if (assignments.length === 0) return 1; // Default to 1 if no assignments
        const maxId = Math.max(...assignments.map((assignment: any) => Number(assignment._id || 0)));
        return maxId + 1;
      };

        return (
            <div id="wd-assignment-controls" className="text-nowrap">
                <Link id="wd-add-assignment-btn" to={`/Kanbas/Courses/${cid}/Assignments/AssignmentEditor`}
                    className="btn btn-md btn-danger me-3 float-end">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </Link>

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