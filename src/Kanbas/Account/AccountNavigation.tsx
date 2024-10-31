import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link to="/Kanbas/Account/SignIn" id="wd-account-signin-link"
        className="list-group-item active border border-0"> Sign In </Link>

      <Link to="/Kanbas/Account/Profile" id="wd-account-profile-link"
        className="list-group-item text-danger border border-0"> Profile </Link>

      <Link to="/Kanbas/Account/SignUp" id="wd-account-signup-link"
        className="list-group-item text-danger border border-0"> Sign Up </Link>
    </div>
  );
}