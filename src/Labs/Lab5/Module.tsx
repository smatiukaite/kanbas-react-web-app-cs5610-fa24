import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function Module() {
    const [module, setModule] = useState({
        id: "RS101",
        name: "Rocket Propulsion",
        number: "RS4550",
        startDate: "2023-01-10",
        endDate: "2023-05-15",
        department: "D123",
        credits: 4,
        picture: "pic19.jpg",
        description: "This course provides an in-depth study of the fundamentals of rocket propulsion, covering topics such as propulsion theory, engine types, fuel chemistry, and the practical applications of rocket technology. Designed for students with a strong background in physics and engineering, the course includes both theoretical instruction and hands-on laboratory work",
        score: 1
    });
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`

    return (
        <div id="wd-module">
            <h3>Module</h3>
            <a id="wd-get-module"
                href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
            </a><hr />
            <a id="wd-retrieve-module-name"
                href={`${REMOTE_SERVER}/lab5/module/name`}>
                Get Module Name
            </a><hr />
            <a id="wd-update-module-name"
                className="btn btn-primary float-end"
                href={`${MODULE_API_URL}/name/${module.name}`}>
                Update Name
            </a>
            <input className="form-control w-75" id="wd-module-name"
                defaultValue={module.name} onChange={(e) =>
                    setModule({ ...module, name: e.target.value })} />
            <hr />
        </div>
    );
}