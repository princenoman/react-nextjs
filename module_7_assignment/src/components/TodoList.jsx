function TodoList({ todoList, deleteTodo }) {
  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Todo List</h5>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {todoList.map((item, key) => {
                const listItem = (
                  <tr
                    className="animate__animated animate__slideInUp"
                    key={key}
                  >
                    <td>{key + 1}</td>
                    <td>{item}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={(e) => {
                          e.target.parentElement.parentElement.style.textDecoration =
                            "line-through";
                          e.target.textContent = "Completed";
                        }}
                      >
                        Mark as Completed
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteTodo(key)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
                return listItem;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
