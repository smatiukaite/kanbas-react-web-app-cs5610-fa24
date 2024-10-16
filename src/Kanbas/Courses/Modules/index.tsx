import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButton";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-3 fs-5 m-3 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
            <ModuleControlButtons />
          </div>

          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Introduction to the course
              <LessonControlButtons />
            </li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Learn what is Web Development
              <LessonControlButtons /></li>
          </ul>
        </li>

        <li className="wd-lessons list-group-item p-0 mb-3 fs-5 m-3 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            Week 2
            <ModuleControlButtons /></div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Full stack developer - Chapter 1
              <LessonControlButtons /></li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Full stack developer - Chapter 2
              <LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
              LESSON 1<LessonControlButtons /> </li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />
              LESSON 2 <LessonControlButtons /></li>
          </ul>
        </li>

        <li className="wd-module list-group-item p-0 mb-3 fs-5 m-3 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">Week 3, Lecture 3 - Formatting User Interfaces with HTML<ModuleControlButtons /></div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />READING <LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" /> LESSON 3 <LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />LESSON 4 <LessonControlButtons /></li>
          </ul>
        </li>

        <li className="wd-module list-group-item p-0 mb-3 fs-5 m-3 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">Week 4, Lecture 4 - Styling User Interfaces with CSS, Assignment 2<ModuleControlButtons /></div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />SLIDES <LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" /> LESSON 5 <LessonControlButtons /></li>
          </ul>
        </li>

        <li className="wd-module list-group-item p-0 mb-3 fs-5 m-3 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">Week 5, Lecture 5 - Implementing Responsive User Interfaces<ModuleControlButtons /></div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons /></li>
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" /> LESSON 6<LessonControlButtons /> </li>
          </ul>
        </li>

        <li className="wd-module list-group-item p-0 mb-3 fs-5 m-3 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">Week 6, Lecture 6 - Programming User Interfaces with JavaScript, Assignment 3<ModuleControlButtons /></div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons /></li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Introduction to the course<LessonControlButtons /></li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Learn what is Web Development<LessonControlButtons /></li>
          </ul>
        </li>

        <li className="wd-module list-group-item p-0 mb-3 fs-5 m-3 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">Week 7, Lecture 7 - Implementing React.js User Interfaces<ModuleControlButtons /></div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons /></li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Introduction to the course<LessonControlButtons /></li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Learn what is Web Development<LessonControlButtons /></li>
          </ul>
        </li>

        <li className="wd-module list-group-item p-0 mb-3 fs-5 m-3 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">Week 8, Lecture 8 - Implementing User Interface State with Hooks and Redux, Assignment 4<ModuleControlButtons /></div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES<LessonControlButtons /></li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Introduction to the course<LessonControlButtons /></li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Learn what is Web Development<LessonControlButtons /></li>
          </ul>
        </li>

        <li className="wd-module list-group-item p-0 mb-3 fs-5 m-3 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">Week 9 - Exam 1, Redux<ModuleControlButtons /></div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons /></li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Introduction to the course<LessonControlButtons /></li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Learn what is Web Development<LessonControlButtons /></li>
          </ul>
        </li>

        <li className="wd-module list-group-item p-0 mb-3 fs-5 m-3 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">Week 10, Lecture 9 - Implementing Node Web Server APIs, Assignment 5<ModuleControlButtons /></div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1"><BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons /></li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Introduction to the course<LessonControlButtons /></li>
            <li className="wd-content-item list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Learn what is Web Development<LessonControlButtons /></li>
          </ul>
        </li>

      </ul >
    </div >
  );
}