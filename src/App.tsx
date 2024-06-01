import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";

function App() {
  return (
    <main className="p-10">
      <AddTodo />
      <TodoList />
    </main>
  );
}

export default App;
