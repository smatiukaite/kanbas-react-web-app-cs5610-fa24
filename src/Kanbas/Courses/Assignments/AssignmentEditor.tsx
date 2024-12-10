//import { Link } from "react-router-dom"; // Import useNavigate
import './index.css';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
//import * as db from "../../Database";
import { updateAssignment } from "./reducer";

export default function AssignmentEditor() {
    const { aid } = useParams();
    const assignments = useSelector((state: any) => state.assignmentReducer.assignments);
    const assignment = {...assignments.find((it: any) => it._id === aid)};
    
    const dispatch = useDispatch();
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
                    onChange={(e) => {assignment.title = e.target.value}}
                />
            </div>




            <div className="modal-footer">
                <button type="button" className="btn btn-secondary">
                    Cancel </button>
                <button onClick={()=>dispatch(updateAssignment(assignment))} type="button" className="btn btn-danger">
                    Save </button>
            </div>
        </div>
    );
}