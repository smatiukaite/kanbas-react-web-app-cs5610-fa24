import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function Dashboard({
    courses,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
    enrolling,
    setEnrolling,
    updateEnrollment
}: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
    enrolling: boolean;
    setEnrolling: (enrolling: boolean) => void;
    updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const userRole = currentUser?.role;
    const [showAllCourses, ] = useState(false);
    const [enrolledCourses, setEnrolledCourses] = useState<string[]>([]);

    useEffect(() => {
        if (currentUser?._id) {
            const storedEnrollments = localStorage.getItem(`enrollments_${currentUser._id}`);
            if (storedEnrollments) {
                setEnrolledCourses(JSON.parse(storedEnrollments));
            }
        }
    }, [currentUser]);

    // const enrollInCourse = (courseId: string) => {
    //     setEnrolledCourses((prev) => {
    //         const updatedEnrollments = prev.includes(courseId)
    //             ? prev.filter(id => id !== courseId) // Unenroll if already enrolled
    //             : [...prev, courseId]; // Enroll if not already enrolled

    //         // Store updated enrollments in local storage
    //         localStorage.setItem(`enrollments_${currentUser._id}`, JSON.stringify(updatedEnrollments));
    //         return updatedEnrollments;
    //     });
    // };

    // IF A USER IS FACULTY OR ADMIN CHANGE VISIBILITY OF THE COURSES
    if (userRole === "FACULTY" || userRole === "ADMIN") {
        return (
            <div id="wd-dashboard">
                <h1 id="wd-dashboard-title">
                    Dashboard</h1>
                <hr />
                {/* New Course Button (Only visible to faculty) */}
                {(userRole === "FACULTY" || userRole === "ADMIN") && (<>
                    <h5>New Course
                        <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={addNewCourse}>
                            Add
                        </button>
                        <button className="btn btn-warning float-end me-2" onClick={updateCourse} id="wd-update-course-click">
                            Update
                        </button>
                    </h5>
                    <hr />
                    <input value={course.name || ""}
                        className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                    <textarea value={course.description || ""}
                        className="form-control"
                        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
                    <br />
                </>
                )}

                {/* SHOW ALL THE COURSES */}
                <h2 id="wd-dashboard-published">
                    Published Courses ({courses.length})

                    {/* ADD SHOW ALL COURSES BUTTON */}
                    <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
                        {enrolling ? "My Courses" : "All Courses"}
                    </button>
                </h2>
                <hr />
                <div id="wd-dashboard-courses" className="row">
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                        {courses.map((course) => (
                            <div className="wd-dashboard-course-faculty col" style={{ width: "300px" }} key={course._id}>
                                <div className="card rounded-3 overflow-hidden">

                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="wd-dashboard-course-link text-decoration-none text-dark">

                                        <img src={`/images/${course.picture}`} alt={course.name} width="100%" height={160} />
                                        <div className="card-body">
                                            {/* ADD ENROLLMENT BUTTON FOR THE FACULTY */}
                                            <button onClick={(event) => {
                                                event.preventDefault();
                                                updateEnrollment(course._id, !course.enrolled);
                                            }}
                                                className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                                                {course.enrolled ? "Unenroll" : "Enroll"}
                                            </button>
                                            

                                            <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                                            <p className="wd-dashboard-course-title card-text overflow-y-hidden"
                                                style={{ maxHeight: 100 }}>{course.description}</p>
                                        </div>
                                    </Link>
                                    {userRole === "FACULTY" || userRole === "ADMIN" ? (<>
                                        {/* Only Faculty can delete courses */}
                                        {/* DELETE A COURSE */}
                                        <button onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }}
                                            className="btn btn-danger small-button float-end" id="wd-delete-course-click">
                                            Delete
                                        </button>

                                        {/* EDIT A COURSE */}
                                        <button id="wd-edit-course-click"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                            }}
                                            className="btn btn-warning small-button float-end" >
                                            Edit
                                        </button>

                                    </>
                                    ) : (
                                        // Student Enrollment Buttons
                                        <>
                                            {/* {enrolledCourses.includes(course._id) ? (
                                                <button onClick={() => enrollInCourse(course._id)} className="btn btn-danger float-end">
                                                    Unenroll
                                                </button>
                                            ) : (
                                                <button onClick={() => enrollInCourse(course._id)} className="btn btn-success float-end">
                                                    Enroll
                                                </button>
                                            )} */}
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    } else {
        //IF USER'S ROLE IS ANYTHING ELSE THAN FACULTY OR ADMIN, THEN SET THIS VISIBILITY FOR COURSES
        return (
            <div id="wd-dashboard">
                <h1 id="wd-dashboard-title">Dashboard</h1>
                <hr />
                {/* <button
                    className="wd-enrollments-btn btn btn-primary float-end"
                    onClick={() => setShowAllCourses(!showAllCourses)}
                    id="wd-enrollments-click">
                    {showAllCourses ? "Show My Courses" : "Show All Courses"}
                </button> */}
                <button
                    className="wd-enrollments-btn btn btn-primary float-end"
                    onClick={() => setEnrolling(!enrolling)}
                    id="wd-enrollments-click">
                    {enrolling ? "My Courses" : "All Courses"}
                </button>
                <h2 id="wd-dashboard-published">
                    Published Courses
                    ({showAllCourses ? courses.length : enrolledCourses.length})
                </h2>
                <hr />
                <div id="wd-dashboard-courses" className="row">
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                        {
                            // (showAllCourses ? courses : 
                            courses
                                // filter(course => enrolledCourses.includes(course._id)))
                                .map((course) => {
                                    return (
                                        <div className="wd-dashboard-course-non-faculty col" style={{ width: "300px" }} key={course._id}>
                                            <div className="card rounded-3 overflow-hidden">
                                                <Link
                                                    to={`/Kanbas/Courses/${course._id}/Home`}
                                                    className="wd-dashboard-course-link text-decoration-none text-dark">
                                                    <img src={`/images/${course.picture}`} alt={course.name} width="100%" height={160} />
                                                    <div className="card-body">
                                                        <h5 className="wd-dashboard-course-title card-title">
                                                            {course.name}
                                                        </h5>
                                                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                                            {course.description}
                                                        </p>
                                                    </div>
                                                </Link>

                                                {/* {isEnrolled ? (
                                                    <button
                                                        onClick={() => { 
                                                            enrollInCourse(course._id);
                                                        }}
                                                        className="btn btn-danger float-end">
                                                        Unenroll
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => enrollInCourse(course._id)}
                                                        className="btn btn-success float-end">
                                                        Enroll
                                                    </button>
                                                )} */}
                                                {enrolling && (
                                                    <button onClick={(event) => {
                                                        event.preventDefault();
                                                        updateEnrollment(course._id, !course.enrolled);
                                                    }}
                                                        className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                                                        {course.enrolled ? "Unenroll" : "Enroll"}
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    );
                                }
                                )
                        }
                    </div>
                </div>
            </div>
        );
    }
}