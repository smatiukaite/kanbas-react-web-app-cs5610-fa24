import { Link } from "react-router-dom";
export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation">
      <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank" rel="noopener noreferrer">Northeastern</a><br/>
      <Link to="/Kanbas/Account" id="wd-account-link">Account</Link><br/>
      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link">Dashboard</Link><br/>
      <Link to="/Kanbas/Courses" id="wd-course-link">Courses</Link><br/>
      <Link to="/Kanbas/Calendar" id="wd-calendar-link">Calendar</Link><br/>
      <Link to="/Kanbas/Inbox" id="wd-inbox-link">Inbox</Link><br/>
      <Link to="/Labs" id="wd-labs-link">Labs</Link><br/>
      <Link to="/Kanbas/History" id="wd-history-link">History</Link><br/>
      <Link to="/Kanbas/Studio" id="wd-studio-link">Studio</Link><br/>
      <Link to="/Kanbas/Help" id="wd-help-link">History</Link><br/>
    </div>
);}

