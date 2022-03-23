import InputContainer from "./containers/InputContainer";
import TodoItemContainer from "./containers/TodoItemContainer";
import DoneItemContainer from "./containers/DoneItemContainer";

function App() {
  return (
    <div class="background">
      <div class="container">
        <InputContainer />
        <TodoItemContainer />
        <DoneItemContainer />
      </div>
    </div>
  );
}

export default App;
