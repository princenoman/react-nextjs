import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addTodo = (inputText) => {
    if (inputText !== "") {
      setListTodo([...listTodo, inputText]);
    }
  };

  const DeleteTodo = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  return (
    <>
      <Header appName="Todo App" />
      <AddTodo addTodo={addTodo} />
      <TodoList todoList={listTodo} deleteTodo={DeleteTodo} />
      <Footer />
    </>
  );
}

export default App;
