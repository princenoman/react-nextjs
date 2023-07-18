import { useState } from "react";

function AddTodo({ addTodo }) {
  const [inputText, setInputText] = useState("");

  const handleEnterKey = (e) => {
    if (e.keyCode === 13) {
      addTodo(inputText);
      setInputText("");
    }
  };
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Add Todo</h5>
          <input
            onChange={handleInputChange}
            onKeyDown={handleEnterKey}
            className="form-control"
            type="text"
            placeholder="Add your todo"
            value={inputText}
          />
          <button
            onClick={() => {
              addTodo(inputText);
              setInputText("");
            }}
            className="btn btn-primary m-2"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
