import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { BsClockHistory } from "react-icons/bs";
import { PiMonitorPlay } from "react-icons/pi";
import { MdOutlineHelpOutline } from "react-icons/md";
import { FiInbox } from "react-icons/fi";

export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" style={{ width: 105}}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank" rel="noreferrer"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NU_RGB_Notched-N_motto_RW.png" alt="NU logo" width="75px" /></a>
      
      <Link to="/Kanbas/Account" id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white">
        <VscAccount className="fs-2 text text-white" /><br />
        Account </Link>
      
      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
        className="list-group-item text-center border-0 bg-white text-danger">
        <AiOutlineDashboard className="fs-3 text-danger" /><br />
        Dashboard </Link>
      
      <Link to="/Kanbas/Courses" id="wd-course-link"
        className="list-group-item text-white bg-black text-center border-0">
        <LiaBookSolid className="fs-3 text-danger" /><br />
        Courses </Link>
      
      <Link to="/Kanbas/Calendar" id="wd-calendar-link"
        className="list-group-item text-white bg-black text-center border-0">
        <IoCalendarOutline className="fs-3 text-danger" /><br />
        Calendar </Link>
      
      <Link to="/Kanbas/Inbox" id="wd-inbox-link"
        className="list-group-item text-white bg-black text-center border-0">
        <FiInbox className="fs-3 text-danger" /><br />
      Inbox </Link>

      <Link to="/Kanbas/History" id="wd-history-link"
        className="list-group-item text-white bg-black text-center border-0">
        <BsClockHistory className="fs-4 text-danger" /><br />
      History </Link>
      
      <Link to="/Kanbas/Studio" id="wd-studio-link"
        className="list-group-item text-white bg-black text-center border-0">
        <PiMonitorPlay className="fs-3 text-danger" /><br />
      Studio </Link>
      
      <Link to="/Kanbas/Help" id="wd-help-link"
        className="list-group-item text-white bg-black text-center border-0">
        <MdOutlineHelpOutline className="fs-3 text-danger" /><br />
      Help </Link>
      
    </div>
  );
}