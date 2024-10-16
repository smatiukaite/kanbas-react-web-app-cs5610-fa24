import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (9)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">

                    {/* Course #1 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/CS5010/Home">
                                <img src="/images/pic1.jpg" alt="CS5010" width="100%" height={160} />
                                <div className="card-body">
                                    <h6 className="wd-dashboard-course-title card-title">CS5010 Program Design</h6>
                                    <p className="wd-dashboard-course-title card-text" >
                                        CS5010.MERGED.202510
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Course #2 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/CS5610/Home">
                                <img src="/images/pic2.jpg" alt="CS5610" width="100%" height={160} />
                                <div className="card-body">
                                    <h6 className="wd-dashboard-course-title card-title">CS5610 20593 Web Development</h6>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS5610.20593.202510
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Course #3 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/Masters/Home">
                                <img src="/images/pic3.jpg" alt="Master's Orientation" width="100%" height={160} />
                                <div className="card-body">
                                    <h6 className="wd-dashboard-course-title card-title">Khoury Master's Orientation</h6>
                                    <p className="wd-dashboard-course-title card-text">
                                        Khoury Master's Orientation
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Course #4 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/coop/Home">
                                <img src="/images/pic4.jpg" alt="coop" width="100%" height={160} />
                                <div className="card-body">
                                    <h6 className="wd-dashboard-course-title card-title">Fall 2024 - Career Preparation</h6>
                                    <p className="wd-dashboard-course-title card-text">
                                        CAREER.COOP.FA24
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Course #5 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/CS5800/Home">
                                <img src="/images/pic5.jpg" alt="CS5800" width="100%" height={160} />
                                <div className="card-body">
                                    <h6 className="wd-dashboard-course-title card-title">CS5800 Algorithms</h6>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS5800.FA24.001
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Course #6 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/CS6710/Home">
                                <img src="/images/pic6.jpg" alt="CS6710" width="100%" height={160} />
                                <div className="card-body">
                                    <h6 className="wd-dashboard-course-title card-title">CS6710 Wireless Network</h6>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS6710.FA24.002
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Course #7 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/CS5520/Home">
                                <img src="/images/pic7.jpg" alt="CS5520" width="100%" height={160} />
                                <div className="card-body">
                                    <h6 className="wd-dashboard-course-title card-title">CS5520 Mobile Application Dev</h6>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS5520.FA24.222
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Course #8 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/CS5850/Home">
                                <img src="/images/pic8.jpg" alt="CS5850" width="100%" height={160} />
                                <div className="card-body">
                                    <h6 className="wd-dashboard-course-title card-title">CS5850 Building Game Engines</h6>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS5850.FA24.321
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Course #9 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/CS7805/Home">
                            <img src="/images/pic9.jpg" alt="CS7805" width="100%" height={160} />
                            <div className="card-body">
                                    <h6 className="wd-dashboard-course-title card-title"> CS7805 Complexity Theory</h6>
                                    <p className="wd-dashboard-course-title card-text">
                                        CS7805.FA24.145
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div >
        </div>
    );
}