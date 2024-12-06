import Signin from "./SignIn";
import Profile from "./Profile";
import Signup from "./Signup";
import { Routes, Route, Navigate } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Users from "./Users";
import AccountNavigation from "./Navigation";

export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-account-screen">
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <AccountNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route
                  path="/"
                  element={
                    <Navigate
                      to={currentUser
                        ? "/Kanbas/Account/Profile"
                        : "/Kanbas/Account/Signin"}
                    />
                  }
                />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Users" element={<Users />} />
                <Route path="/Users/:uid" element={<Users />} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}