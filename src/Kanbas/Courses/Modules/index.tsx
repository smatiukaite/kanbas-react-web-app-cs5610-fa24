import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { useState, useEffect } from "react";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

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
  }, []);

  if (userRole === "FACULTY") {
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

        {/* Home module list */}
        <ul id="wd-modules" className="list-group rounded-0 p-0 mb-3 fs-5 m-3 border-gray">
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

        {/* Home module list */}
        <ul id="wd-modules" className="list-group rounded-0 p-0 mb-3 fs-5 m-3 border-gray">
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
      </div>
    );
  }
}