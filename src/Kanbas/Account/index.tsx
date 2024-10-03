import Signin from "./SignIn";
import Profile from "./Profile";
import Signup from "./Signup";
import { Routes, Route, Navigate } from "react-router";
import { Link } from "react-router-dom";

export default function Account() {
  return (

    <table>
      <tr>
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
          <Link to="/Kanbas/Account/SignIn" id="wd-account-signin-link"
            className="list-group-item active border border-0"> Sign In </Link>

          <Link to="/Kanbas/Account/SignUp" id="wd-account-signup-link"
            className="list-group-item text-danger border border-0"> Sign Up </Link>

          <Link to="/Kanbas/Account/Profile" id="wd-account-profile-link"
            className="list-group-item text-danger border border-0"> Profile </Link>
        </div>

        <td valign="top">
          <Routes>
            <Route path="/"
              element={<Navigate to="/Kanbas/Account/Signin" />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </td>
      </tr>
    </table>
  );
}