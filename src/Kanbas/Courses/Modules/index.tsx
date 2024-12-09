import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { useState, useEffect } from "react";
import * as coursesClient from "../client";
import * as modulesClient from "./client";
import { BsGripVertical } from "react-icons/bs";
// import { IoEllipsisVertical } from "react-icons/io5";
// import { FaPlus } from "react-icons/fa6";
// import { VscFileSubmodule } from "react-icons/vsc";

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const [moduleName, setModuleName] = useState("");
  const modules = useSelector((state: any) => state.modulesReducer.modules);
  const dispatch = useDispatch();

  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const userRole = currentUser?.role;

  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };

  useEffect(() => {
    fetchModules();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (userRole === "FACULTY") {
    return (
      <div className="wd-modules d-flex flex-column align-items-stretch w-100">
        <div className="d-flex justify-content-end mb-0">
          <ModulesControls
            moduleName={moduleName}
            setModuleName={setModuleName}
            addModule={createModuleForCourse}
          // addModule={() => {
          //   dispatch(addModule({ name: moduleName, course: cid }));
          //   setModuleName("");
          // }}
          />
        </div>

        <ul id="wd-modules-exams" className="list-group rounded-0">
          <li className="wd-module-exams list-group-item p-0 mb-3 fs-5 m-3 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              MODULES123
            </div>

            {/* Home module list */}
            <ul id="wd-modules" className="list-group rounded-0 border-gray">
              {modules
                .map((module: any) => (
                  <li key={module._id} className="list-group-item">

                    {!module.editing && module.name}
                    {module.editing && (
                      <input
                        className="form-control w-50 d-inline-block"
                        onChange={(e) =>
                          dispatch(updateModule({ ...module, name: e.target.value }))
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            // dispatch(updateModule({ ...module, editing: false }));
                            saveModule({ ...module, editing: false });
                          }
                        }}
                        defaultValue={module.name}
                      />
                    )}

                    <ModuleControlButtons
                      moduleId={module._id}
                      deleteModule={(moduleId) => removeModule(moduleId)}
                      editModule={() => dispatch(editModule(module._id))}
                    />
                  </li>
                ))}
            </ul>



          </li>
        </ul>
      </div>
    );
  }

  // THE REST OF THE USERS VIEW
  else {
    return (
      <div className="wd-modules">
        <ModulesControls
          moduleName={moduleName}
          setModuleName={setModuleName}
          addModule={createModuleForCourse}
        // addModule={() => {
        //   dispatch(addModule({ name: moduleName, course: cid }));
        //   setModuleName("");
        // }}
        />

        <ul id="wd-modules-exams" className="list-group rounded-0">
          <li className="wd-module-exams list-group-item p-0 mb-3 fs-5 m-3 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              MODULES123
            </div>

            {/* Home module list */}
            <ul id="wd-modules" className="list-group rounded-0 border-gray">
              {modules
                .map((module: any) => (

                  <li key={module._id} className="list-group-item">

                    {!module.editing && module.name}
                    {module.editing && (
                      <input
                        className="form-control w-50 d-inline-block"
                        onChange={(e) =>
                          dispatch(updateModule({ ...module, name: e.target.value }))
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            // dispatch(updateModule({ ...module, editing: false }));
                            saveModule({ ...module, editing: false });
                          }
                        }}
                        defaultValue={module.name}
                      />
                    )}
                  </li>
                ))}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}