import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButton";
import { useParams } from "react-router";
import * as db from "../../Database";
import React, { useState } from "react";
import { addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux"

export default function Modules() {
  const { cid } = useParams();
  const [modules, setModules] = useState<any[]>(db.modules);
  const [moduleName, setModuleName] = useState("");
  const addModule = () => {
    setModules([...modules, { _id: new Date().getTime().toString(), name: moduleName, course: cid, lessons: [] }]);
    setModuleName("");
  };
  const deleteModule = (moduleId: string) => {
    setModules(modules.filter((m) => m._id !== moduleId));
  };
  const editModule = (moduleId: string) => {
    setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
  };
  const updateModule = (module: any) => {
    setModules(modules.map((m) => (m._id === module._id ? module : m)));
  };
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  return (
    <div className="wd-modules">
      <ModulesControls moduleName={moduleName} setModuleName={setModuleName}
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }} />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            {!module.editing && module.name}
        {module.editing && (
          <input className="form-control w-50 d-inline-block"
            onChange={(e) =>
              dispatch(
                updateModule({ ...module, name: e.target.value })
              )
            } onKeyDown={(e) => {
              if (e.key === "Enter") {
                dispatch(updateModule({ ...module, editing: false }));
              }
            }}
            defaultValue={module.name} />
        )}
        <ModuleControlButtons moduleId={module._id}
          deleteModule={(moduleId) => {
            dispatch(deleteModule(moduleId));
          }}
          editModule={(moduleId) => dispatch(editModule(moduleId))} />

        {
          module.lessons && (
            <ul className="wd-lessons list-group rounded-0">
              {module.lessons.map((lesson: any) => (

                <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  {lesson.name}
                  <LessonControlButtons />
                </li>
              ))}
            </ul>
          )
        }
      </ul >
      ))
    </div >
  );
}