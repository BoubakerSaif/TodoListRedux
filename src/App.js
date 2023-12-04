import { useSelector } from "react-redux";
import "./App.css";
import TodoList from "./Components/TodoList";
import Add from "./Components/Add";

function App() {
  const { todos } = useSelector((state) => state.todoReducer);

  return (
    <div className="App">
      <Add />
      <br />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
