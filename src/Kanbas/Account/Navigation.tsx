import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  const { pathname } = useLocation();

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kanbas/Account/${link}`}
          className={`list-group-item ${pathname.includes(link) ? "active" : ""} border border-0`}>
          {link}
        </Link>
      ))}
       {currentUser && (currentUser.role === "ADMIN" || currentUser.role === "FACULTY") && (
       <Link to={`/Kanbas/Account/Users`} className={`list-group-item border-0 border-white ${active("Users")} border border-0` }> Users </Link> )}

    </div>
  );
}