import { useState } from "react";

export const NewTodoForm: React.FC<{ addTodo: Function }> = (props) => {
  const [assigned, setAssigned] = useState("");

  const [description, setDescription] = useState("");

  const assignedChange = (event: any) => {
    console.log("assigned", event.target.value);
    setAssigned(event.target.value);
  };

  // const descriptionChange = (event) => {
  //   console.log("description", event.target.value);
  //   setDescription(event.target.value);
  // };

  const submitTodo = () => {
    if (description !== "" && assigned !== "") {
      props.addTodo(description, assigned);
      setDescription("");
      setAssigned("");
    }
  };

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={assignedChange}
            value={assigned}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={3}
            required
            onChange={(e) => setDescription(e.target.value)} //another way of doing this
            value={description}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={submitTodo}
        >
          Add todo
        </button>
      </form>
    </div>
  );
};
