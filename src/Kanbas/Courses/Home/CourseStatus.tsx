import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { MdHome } from "react-icons/md";
import { FaChartSimple } from "react-icons/fa6";
import { TfiAnnouncement } from "react-icons/tfi";
import { GrAnalytics } from "react-icons/gr";
import { IoIosNotifications } from "react-icons/io";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function CourseStatus() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const userRole = currentUser?.role;

  if (userRole === "FACULTY") {
    return (
      <div id="wd-course-status" style={{ width: "300px" }}>
        <h2>Course Status</h2>

        <div className="d-flex">
          <div className="w-50 pe-1">
            <button className="btn btn-lg btn-secondary w-100 text-nowrap">
              {/* disabled={userRole !== "FACULTY"}> */}
              <MdDoNotDisturbAlt className="me-2 fs-5" />Unpublish </button>
          </div>

          <div className="w-50">
            <button className="btn btn-lg btn-success w-100">
              {/* disabled={userRole !== "FACULTY"}> */}
              <FaCheckCircle className="me-2 fs-5" />Publish </button>
          </div>
        </div><br />

        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <BiImport className="me-2 fs-5" /> Import Existing Content </button>

        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>

        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <MdHome className="me-2 fs-5" /> Choose Home Page</button>

        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <FaChartSimple className="me-2 fs-5" /> View Course Stream</button>

        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <TfiAnnouncement className="me-2 fs-5" /> New Announcement</button>

        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <GrAnalytics className="me-2 fs-5" /> New Analytics</button>

        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <IoIosNotifications className="me-2 fs-5" /> View Course Notifications</button>
      </div>
    );
  } else {
    return (
      <div id="wd-course-status" style={{ width: "300px" }}>
        <h2>Course Status</h2>

        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <FaChartSimple className="me-2 fs-5" /> View Course Stream</button>

        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
          <IoIosNotifications className="me-2 fs-5" /> View Course Notifications</button>
      </div>
    );
  }

}