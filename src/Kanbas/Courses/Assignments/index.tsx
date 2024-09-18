export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/CS5010/Assignments/123">
              A1 - ENV + HTML
            </a>

            <div>
                Multiple modules | <b>Not available until </b> May 6 at 12:00 am |
                <br />
                <b>Due</b> May 13 at 11:59 pm | 100 pts 
            </div>
          
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/CS5010/Assignments/123">
                A2 - CSS + BOOTSTRAP
            </a>
            <div>
                Multiple modules | <b>Not available until </b> May 13 at 12:00 am |
                <br />
                <b>Due</b> May 20 at 11:59 pm | 100 pts 
            </div>
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/CS5010/Assignments/123">
                A3 - JAVASCRIPT + REACT
            </a>
            <div>
                Multiple modules | <b>Not available until </b> May 20 at 12:00 am |
                <br />
                <b>Due</b> May 27 at 11:59 pm | 100 pts 
            </div>
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/CS5010/Assignments/123">
                A4 - GITHUB ACTIONS
            </a>
            <div>
                Multiple modules | <b>Not available until </b> May 28 at 12:00 am |
                <br />
                <b>Due</b> June 06 at 11:59 pm | 100 pts 
            </div>
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/CS5010/Assignments/123">
                A5 - NETLIFY
            </a>
            <div>
                Multiple modules | <b>Not available until </b> June 06 at 12:00 am |
                <br />
                <b>Due</b> June 12 at 11:59 pm | 100 pts 
            </div>
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/CS5010/Assignments/123">
                A6 - NODE JS
            </a>
            <div>
                Multiple modules | <b>Not available until </b> June 12 at 12:00 am |
                <br />
                <b>Due</b> June 16 at 11:59 pm | 100 pts 
            </div>
          </li>
        </ul>
      </div>
  );}
  
  