import { FaPlus } from "react-icons/fa6";
// import { FaPencil } from "react-icons/fa6";
import ModuleEditor from "./ModuleEditor";
import GreenCheckmark from "./GreenCheckmark";
import { useSelector } from "react-redux";

export default function ModulesControls({
    moduleName,
    setModuleName,
    addModule
}: {
    moduleName: string;
    setModuleName: (title: string) => void;
    addModule: () => void;
}) {

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const userRole = currentUser?.role;

    if (userRole === "FACULTY" || userRole === "ADMIN") {
        return (
            <div id="wd-modules-controls" className="text-nowrap">
                <button id="wd-view-progress" className="btn btn-md btn-secondary ms-3 me-2"> View Progress</button>
                <button id="wd-collapse-all" className="btn btn-md btn-secondary me-2"> Collapse All </button>

                <div className="dropdown d-inline me-2 float-end">
                    <button id="wd-publish-all-btn" className="btn btn-md btn-secondary dropdown-toggle"
                        type="button" data-bs-toggle="dropdown">
                        <GreenCheckmark /> Publish All</button>
                    <ul className="dropdown-menu">
                        <li>
                            <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="dropdown">
                                <GreenCheckmark /> Publish all modules and items</a>
                        </li>
                        <li>
                            <a id="wd-publish-modules-only-button" className="dropdown-item" href="dropdown">
                                <GreenCheckmark /> Publish modules only</a>
                        </li>
                        <li>
                            <a id="wd-unpublish-all-modules-and-items" className="dropdown-item" href="dropdown">
                                <GreenCheckmark /> Unpublish all modules and items</a>
                        </li>
                        <li>
                            <a id="wd-unpublish-modules-only" className="dropdown-item" href="dropdown">
                                <GreenCheckmark /> Unpublish modules only</a>
                        </li>
                    </ul>
                </div>

                {/* RED +MODULE BUTTON */}
                <button className="btn btn-md btn-danger me-2 float-end"
                    // id="wd-add-module-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#wd-add-module-dialog" >
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Module
                </button>

                <ModuleEditor
                    dialogTitle="Add Module"
                    moduleName={moduleName}
                    setModuleName={setModuleName}
                    addModule={addModule}
                />
            </div>
        );
    }
    else {
        return (
            <div id="wd-modules-controls" className="text-nowrap">
                <button id="wd-view-progress" className="btn btn-md btn-secondary ms-3 me-2"> View Progress</button>
                <button id="wd-collapse-all" className="btn btn-md btn-secondary me-2"> Collapse All </button>
            </div>
        );
    }
}