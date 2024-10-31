import React, { useState } from "react";

export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };
    return (

        //<div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
        <div id="wd-array-state-variables">
            <h2>Array State Variable</h2>
            <button onClick={addElement}
                className="wd-add-element-click btn btn-success mb-3">
                Add Element
            </button>
            
            <ul className="list-group">
                {array.map((item, index) => (
                    <li key={index}
                        className="wd-list-of-items list-group-item p-2 col-sm-10">
                        {item}

                        <button onClick={() => deleteElement(index)}
                            className="wd-delete-element-click btn btn-danger mt-1 float-end">
                            Delete</button>
                    </li>
                ))}
            </ul>
            <hr />
        </div>
    );
}