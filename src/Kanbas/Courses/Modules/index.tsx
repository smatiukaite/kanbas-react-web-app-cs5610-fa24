import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { useState } from "react";

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const [moduleName, setModuleName] = useState("");
  const modules = useSelector((state: any) => state.modulesReducer.modules);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const userRole = currentUser?.role;

  if (userRole === "FACULTY") {
    return (
      <div className="wd-modules">
        <ModulesControls
          moduleName={moduleName}
          setModuleName={setModuleName}
          addModule={() => {
            dispatch(addModule({ name: moduleName, course: cid }));
            setModuleName("");
          }}
        />

        {/* Home module list */}
        <ul id="wd-modules" className="list-group rounded-0 p-0 mb-3 fs-5 m-3 border-gray">
          {modules
            .filter((module: any) => module.course === cid)
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
                        dispatch(updateModule({ ...module, editing: false }));
                      }
                    }}
                    defaultValue={module.name}
                  />
                )}

                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={() => dispatch(deleteModule(module._id))}
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
          addModule={() => {
            dispatch(addModule({ name: moduleName, course: cid }));
            setModuleName("");
          }}
        />

        {/* Home module list */}
        <ul id="wd-modules" className="list-group rounded-0 p-0 mb-3 fs-5 m-3 border-gray">
          {modules
            .filter((module: any) => module.course === cid)
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
                        dispatch(updateModule({ ...module, editing: false }));
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