import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import Calendar from "./Calendar";
import Inbox from "./Inbox";
import Studio from "./Studio";
import History from "./History";
import Help from "./Help";

export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <table>
        <tr>
          <td valign="top">
            <KanbasNavigation />
          </td>
          <td valign="top">

            <h1>Kanbas</h1>
            <Routes>
              <Route path="/" element={<Navigate to="Account" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route path="/Dashboard/*" element={<Dashboard />} />
              <Route path="/Courses/*" element={<Courses />} />
              <Route path="/Calendar" element={<Calendar />} />
              <Route path="/Inbox" element={<Inbox />} />
              <Route path="/Studio" element={<Studio />} />
              <Route path="/History" element={<History />} />
              <Route path="/Help" element={<Help />} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
  );}