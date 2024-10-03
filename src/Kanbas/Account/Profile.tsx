import { Link } from "react-router-dom";

export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h2>Profile</h2>
            <input id="wd-username"
                placeholder="username"
                className="form-control mb-2" />
            <input id="wd-password"
                placeholder="password" 
                type="password"
                className="form-control mb-2" />
            <input id="wd-firstname"
                placeholder="firstname"
                className="form-control mb-2" />
            <input id="wd-lastname"
                placeholder="lastname"
                className="form-control mb-2" />
            <input id="wd-dob"
                type="date"
                placeholder="date"
                className="form-control mb-2" />
            <input id="wd-email"
                type="email"
                placeholder="email"
                className="form-control mb-2" />

            <div id="wd-css-styling-dropdowns">
                <select id="wd-role" className="form-select">
                    <option selected>Select title</option>
                    <option value="ADMIN">Admin</option>
                    <option value="FACULTY">Faculty</option>
                    <option value="STUDENT">Student</option>
                    <option value="USER">User</option>
                </select>
            </div>
            <Link id="wd-signout-btn"
                to="/Kanbas/Account/SignOut"
                className="btn btn-danger w-100 mt-2">
                Sign out </Link>
        </div>
    );
}