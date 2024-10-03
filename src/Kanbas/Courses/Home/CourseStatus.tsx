import GreenCheckmark from "../Modules/GreenCheckmark";
import { MdOutlineUnpublished, MdOutlinePublishedWithChanges } from "react-icons/md";
import { FaFileImport } from "react-icons/fa6";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { MdHome } from "react-icons/md";
import { FaChartSimple } from "react-icons/fa6";
import { TfiAnnouncement } from "react-icons/tfi";
import { GrAnalytics } from "react-icons/gr";
import { IoIosNotifications } from "react-icons/io";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>
      <button className="wd-small-grey-buttons">
        <MdOutlineUnpublished />Unpublish</button>
      <button className="wd-green-button">
        <MdOutlinePublishedWithChanges /> Publish</button>

      <div>
        <br></br>
        <div>
          <button className="wd-grey-buttons">
            <FaFileImport /> Import Existing Content</button>
        </div>

        <div>
          <button className="wd-grey-buttons">
            <BsBoxArrowInLeft /> Import From Commons</button>
        </div>

        <div>
          <button className="wd-grey-buttons">
            <MdHome /> Choose Home Page</button>
        </div>

        <div>
          <button className="wd-grey-buttons">
            <FaChartSimple /> View Course Stream</button>
        </div>

        <div>
          <button className="wd-grey-buttons">
            <TfiAnnouncement /> New Announcement</button>
        </div>

        <div>
          <button className="wd-grey-buttons">
            <GrAnalytics /> New Analytics</button>
        </div>

        <div>
          <button className="wd-grey-buttons">
            <IoIosNotifications /> View Course Notifications</button>
        </div>

      </div>
    </div>
  );
}