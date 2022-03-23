import InputContainer from "./containers/InputContainer";
import TodoItemContainer from "./containers/TodoItemContainer";
import DoneItemContainer from "./containers/DoneItemContainer";

function App() {
  return (
    <div className="background">
      <div className="container">
        <InputContainer />
        <TodoItemContainer />
        <DoneItemContainer />
      </div>
    </div>
  );
}

export default App;
