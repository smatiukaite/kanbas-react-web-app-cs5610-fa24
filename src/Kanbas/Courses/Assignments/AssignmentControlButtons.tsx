import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function AssignmentControlButtons({ assignmentId, deleteAssignment, }: {
    assignmentId: string;
    deleteAssignment: (assignmentId: string) => void;
}) {

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const userRole = currentUser?.role;
    const [showPopup, setShowPopup] = useState(false);

    const confirmDelete = () => {
        deleteAssignment(assignmentId); // Call deletion function
        setShowPopup(false); // Close pop-up
    };

    const cancelDelete = () => {
        setShowPopup(false); // Close pop-up without deleting
    };

    if (userRole === "FACULTY") {
        return (
            <div className="float-end">
                <FaTrash className="text-danger me-2 mb-1" onClick={() => setShowPopup(true)} />

                {showPopup && (
                    <div style={{
                        position: "fixed",
                        top: "20%",
                        left: "55%",
                        transform: "translate(-50%, -50%)",
                        padding: "20px",
                        backgroundColor: "white",
                        border: "0px solid #rrr",
                        boxShadow: "0 0 10px rgba(1, 1, 1, 0.5)",
                        zIndex: 1000
                    }}>
                        <p>Are you sure you want to remove the assignment?</p>
                        <button
                            id="wd-cancel-button"
                            className="btn btn-md me-2 float-end"
                            onClick={cancelDelete}>
                            No
                        </button>
                        <button
                            id="wd-delete-button"
                            className="btn btn-md text-danger float-end"
                            onClick={confirmDelete}>
                            Yes
                        </button>
                    </div>
                )}
            </div>
        );
    } else {
        return (
            <div className="float-end">
                <BsPlus className="fs-1" />
                <IoEllipsisVertical className="fs-4" />
            </div>
        );
    }
}