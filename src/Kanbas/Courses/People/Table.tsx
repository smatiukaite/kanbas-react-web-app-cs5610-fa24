import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
    return (
        <div id="wd-people-table">
            <table className="table table-striped">
                <thead>
                    <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
                </thead>
                <tbody>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Tony</span>{" "}
                        <span className="wd-last-name">Stark</span></td>
                        <td className="wd-login-id">001234561S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td> </tr>

                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Simon</span>{" "}
                        <span className="wd-last-name">McToe</span></td>
                        <td className="wd-login-id">00123555879</td>
                        <td className="wd-section">S102</td>
                        <td className="wd-role">TA</td>
                        <td className="wd-last-activity">2024-11-01</td>
                        <td className="wd-total-activity">1:25:36</td> </tr>

                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Ray</span>{" "}
                        <span className="wd-last-name">John</span></td>
                        <td className="wd-login-id">00178664561</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">TA</td>
                        <td className="wd-last-activity">2023-10-01</td>
                        <td className="wd-total-activity">9:21:32</td> </tr>

                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Maria</span>{" "}
                        <span className="wd-last-name">Smith</span></td>
                        <td className="wd-login-id">011234561S</td>
                        <td className="wd-section">S102</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2024-01-01</td>
                        <td className="wd-total-activity">8:26:32</td> </tr>

                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Rich</span>{" "}
                        <span className="wd-last-name">Mo</span></td>
                        <td className="wd-login-id">009874561S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2024-05-01</td>
                        <td className="wd-total-activity">9:21:32</td> </tr>

                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Amelia</span>{" "}
                        <span className="wd-last-name">Crock</span></td>
                        <td className="wd-login-id">009934561S</td>
                        <td className="wd-section">S102</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2024-03-01</td>
                        <td className="wd-total-activity">05:21:32</td> </tr>
                </tbody>
            </table>
        </div>);
}