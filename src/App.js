import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="Roll" />
      <Todo title="Eat" />
      <Todo title="Sleep" />
      <span>Repeat :-)</span>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
