import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="Roll" />
      <Todo title="Eat" />
      <Todo title="Sleep" />
      <span>Repeat :-)</span>
    </div>
  );
}

export default App;
