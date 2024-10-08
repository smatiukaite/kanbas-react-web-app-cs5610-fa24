import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (9)</h2> <hr />
            <div id="wd-dashboard-courses">
                {/* Course #1 */}
                <div className="wd-dashboard-course">
                    <img src="/images/pic1.jpg" alt="" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/CS5010/Home">
                            CS5010 Program Design Paradigm
                        </Link>
                        <p className="wd-dashboard-course-title">
                            CS5010.MERGED.202510
                        </p>
                        <Link to="/Kanbas/Courses/CS5010/Home"> Go </Link>
                    </div>
                </div>
                {/* Course #2 */}
                <div className="wd-dashboard-course">
                    <img src="/images/pic2.jpg" alt="" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/CS5610/Home">
                            CS5610 20593 Web Development
                        </Link>
                        <p className="wd-dashboard-course-title">
                            CS5610.20593.202510
                        </p>
                        <Link to="/Kanbas/Courses/CS5610/Home"> Go </Link>
                    </div> </div>

                {/* Course #3 */}
                <div className="wd-dashboard-course">
                    <img src="/images/pic3.jpg" alt="" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/Masters/Home">
                            Khoury Master's Orientation
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Khoury Master's Orientation
                        </p>
                        <Link to="/Kanbas/Courses/Masters/Home"> Go </Link>
                    </div>
                </div>

                {/* Course #4 */}
                <div className="wd-dashboard-course">
                    <img src="/images/pic4.jpg" alt="" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/coop/Home">
                            Fall 2024 - Career Preparation
                        </Link>
                        <p className="wd-dashboard-course-title">
                            CAREER.COOP.FA24
                        </p>
                        <Link to="/Kanbas/Courses/coop/Home"> Go </Link>
                    </div>
                </div>

                {/* Course #5 */}
                <div className="wd-dashboard-course">
                    <img src="/images/pic5.jpg" alt="" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/CS5800/Home">
                            CS5800 Algorithms
                        </Link>
                        <p className="wd-dashboard-course-title">
                            CS5800
                        </p>
                        <Link to="/Kanbas/Courses/CS5800/Home"> Go </Link>
                    </div>
                </div>

                {/* Course #6 */}
                <div className="wd-dashboard-course">
                    <img src="/images/pic6.jpg" alt="" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/CS6710/Home">
                            CS6710 Wireless Network
                        </Link>
                        <p className="wd-dashboard-course-title">
                            CS6710
                        </p>
                        <Link to="/Kanbas/Courses/CS6710/Home"> Go </Link>
                    </div>
                </div>

                {/* Course #7 */}
                <div className="wd-dashboard-course">
                    <img src="/images/pic7.jpg" alt="" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/CS5520/Home">
                            CS5520 Mobile Application Development
                        </Link>
                        <p className="wd-dashboard-course-title">
                            CS5520
                        </p>
                        <Link to="/Kanbas/Courses/CS5520/Home"> Go </Link>
                    </div>
                </div>

                {/* Course #8 */}
                <div className="wd-dashboard-course">
                    <img src="/images/pic8.jpg" alt="" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/CS5850/Home">
                            CS5850 Building Game Engines
                        </Link>
                        <p className="wd-dashboard-course-title">
                            CS5850
                        </p>
                        <Link to="/Kanbas/Courses/CS5850/Home"> Go </Link>
                    </div>
                </div>

                {/* Course #9 */}
                <div className="wd-dashboard-course">
                    <img src="/images/pic9.jpg" alt="" width={200} />
                    <div>
                        <Link className="wd-dashboard-course-link"
                            to="/Kanbas/Courses/CS7805/Home">
                            CS7805 Complexity Theory
                        </Link>
                        <p className="wd-dashboard-course-title">
                            CS7805
                        </p>
                        <Link to="/Kanbas/Courses/CS7805/Home"> Go </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
