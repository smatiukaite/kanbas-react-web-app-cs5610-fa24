import { FaPencil } from "react-icons/fa6";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useNavigate } from "react-router";
// import { Link } from "react-router-dom";
import * as client from "../../Account/client";

export default function PeopleDetails() {
    const { uid } = useParams();
    const [user, setUser] = useState<any>({});

    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(""); // to edit user's first and last name
    const saveUser = async () => {
        const [firstName, lastName] = name.split(" ");
        const updatedUser = { ...user, firstName, lastName };
        await client.updateUser(updatedUser);
        setUser(updatedUser);
        setEditing(false);
        navigate(-1);
    };

    const [editingRole, setEditingRole] = useState(false);
    const [role, setRole] = useState("");
    const saveUserRole = async () => {
        const updatedUser = { ...user, role };
        await client.updateUser(updatedUser);
        setUser(updatedUser);
        setEditingRole(false);
    }

    const [editingEmail, setEditingEmail] = useState(false); //to edit user's email
    const [email, setEmail] = useState("");
    const saveUserEmail = async () => {
        const updatedUser = { ...user, email };
        await client.updateUser(updatedUser);
        setUser(updatedUser);
        setEditingEmail(false);
    }

    const navigate = useNavigate();

    const deleteUser = async (uid: string) => {
        await client.deleteUser(uid);
        navigate(-1);
    };

    const fetchUser = async () => {
        if (!uid) return;
        const user = await client.findUserById(uid);
        setUser(user);
    };

    useEffect(() => {
        if (uid) fetchUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uid]);

    if (!uid) return null;
    return (

        <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
            <button
                onClick={() => navigate(-1)}
                className="btn position-fixed end-0 top-0 wd-close-details">
                <IoCloseSharp className="fs-1" />
            </button>
            <div className="text-center mt-2">
                <FaUserCircle className="text-secondary me-2 fs-1" />
            </div>
            <hr />
            <div className="text-danger fs-4 wd-name">
                {!editing && (
                    <FaPencil onClick={() => setEditing(true)}
                        className="float-end fs-5 mt-2 wd-edit" />)}
                {editing && (
                    <FaCheck onClick={() => saveUser()}
                        className="float-end fs-5 mt-2 me-2 wd-save" />)}
                {!editing && (
                    <div className="wd-name"
                        onClick={() => setEditing(true)}>
                        {user.firstName} {user.lastName}
                    </div>
                )}
                {user && editing && (
                    <input className="form-control w-50 wd-edit-name"
                        defaultValue={`${user.firstName} ${user.lastName}`}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") { saveUser(); }
                        }}
                    />
                )}
            </div>

            <div className="mt-3">
                {!editingEmail && (
                    <FaPencil onClick={() => setEditingEmail(true)}
                        className="float-end fs-5 mt-2 wd-edit" />)}
                {editingEmail && (
                    <FaCheck onClick={() => saveUserEmail()}
                        className="float-end fs-5 mt-2 me-2 wd-save" />)}
                {!editingEmail && (
                    <div
                        onClick={() => setEditingEmail(true)}>
                        <b>Email:</b> {user.email}
                    </div>)}
                {user && editingEmail && (
                    <input className="form-control w-50 wd-edit-name"
                        defaultValue={`${user.email}`}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                saveUserEmail();

                            }
                        }}
                    />
                )}
            </div>

            <div className="mt-3">
                <b>Role: </b>
                {!editingRole && (<>
                    <FaPencil onClick={() => setEditingRole(true)} className="float-end fs-5 mt-2 wd-edit" />
                    <span className="wd-roles">{user.role}</span></>
                )}
                {editingRole && (<>
                    <FaCheck onClick={() => saveUserRole()} className="float-end fs-5 mt-2 me-2 wd-save" />
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="form-select w-50 wd-edit-role">
                        <option value="ADMINISTRATOR">Administrator</option>
                        <option value="ASSISTANT">Assistant</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                </>
                )}
            </div>
            <b>Login ID:</b>        <span className="wd-login-id">      {user.loginId}      </span> <br />
            <b>Section:</b>         <span className="wd-section">       {user.section}      </span> <br />
            <b>Total Activity:</b>  <span className="wd-total-activity">{user.totalActivity}</span>

            {/* ADD CANCEL AND DELETE BUTTONS */}
            <hr />
            <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end wd-delete" > Delete </button>
            <button onClick={() => navigate(-1)}
                className="btn btn-secondary float-start float-end me-2 wd-cancel" >
                Cancel
            </button>
        </div>
    );
}