import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
// import { useState } from "react";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function AssignmentControlButtons({
    assignmentId,
    deleteAssignment
}: {
    assignmentId: string;
    deleteAssignment: (assignmentId: string) => void;
}) {

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const userRole = currentUser?.role;

    if (userRole === "FACULTY") {
        return (
            <div className="float-end">
                <FaTrash className="text-danger me-3 mb-1" onClick={() => deleteAssignment(assignmentId)} />
            </div>
        );
    } else {
        return (
            <div className="float-end">
                <GreenCheckmark />
                <BsPlus className="fs-1" />
                <IoEllipsisVertical className="fs-4" />
            </div>
        );
    }
}