import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard/Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import Calendar from "./Calendar";
import Inbox from "./Inbox";
import Studio from "./Studio";
import History from "./History";
import Help from "./Help";
import "./styles.css";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";
import Account from "./Account";
import * as userClient from "./Account/client";
import { useCallback } from "react";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const [userCourses, setUserCourses] = useState<any[]>([]);

  const [course, setCourse] = useState<any>({
    _id: "",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    picture: "react1.jfif",
    description: "New Description"
  });

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(courses.map((c) => {
      if (c._id === course._id) { return course; }
      else { return c; }
    })
    );
  };

  const [enrolling, setEnrolling] = useState<boolean>(false);
  // const findCoursesForUser = async () => {
  //   try {
  //     const courses = await userClient.findCoursesForUser(currentUser._id);
  //     setCourses(courses);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const findCoursesForUser = useCallback(async () => {
    try {
      const courses = await userClient.findCoursesForUser(currentUser._id);
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  }, [currentUser._id]);

  const addNewCourse = async () => {
    // const newCourse = await userClient.createCourse(course);
    const newCourse = await courseClient.createCourse(course);
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = async (courseId: string) => {
    // const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }
    setCourses(
      courses.map((course) => {
        if (course._id === courseId) {
          return { ...course, enrolled: enrolled };
        } else {
          return course;
        }
      })
    );
  };

  // const fetchCourses = async () => {
  //   try {
  //     const allCourses = await courseClient.fetchAllCourses();
  //     const enrolledCourses = await userClient.findCoursesForUser(
  //       currentUser._id
  //     );
  //     const courses = allCourses.map((course: any) => {
  //       if (enrolledCourses.find((c: any) => c._id === course._id)) {
  //         return { ...course, enrolled: true };
  //       } else {
  //         return course;
  //       }
  //     });
  //     setCourses(courses);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const fetchCourses = useCallback(async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();
      const enrolledCourses = await userClient.findCoursesForUser(
        currentUser._id
      );
      const courses = allCourses.map((course: any) => {
        if (enrolledCourses.find((c: any) => c._id === course._id)) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  }, [currentUser._id]);

  useEffect(() => {
    if (enrolling) {
      fetchCourses();
    } else {
      findCoursesForUser();
    }
  }, [currentUser, enrolling, fetchCourses, findCoursesForUser]);

  return (
    // <Provider store={store}>
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            {/* <Route path="/" element={<Navigate to="Dashboard" />} /> */}
            <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="Dashboard" element={<ProtectedRoute>
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
                enrolling={enrolling}
                setEnrolling={setEnrolling}
                updateEnrollment={updateEnrollment} />
            </ProtectedRoute>} />

            <Route path="Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
            <Route path="/Calendar" element={<Calendar />} />
            <Route path="/Inbox" element={<Inbox />} />
            <Route path="/Studio" element={<Studio />} />
            <Route path="/History" element={<History />} />
            <Route path="/Help" element={<Help />} />
          </Routes>
        </div>
      </div>
    </Session>
    // </Provider>
  );
}