
function App() {
  const [toDo, inputToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  
  //inputToDo를 통해 입력받음
  const onChange = (event) => inputToDo(event.target.value);


  const submitInput = (event) => {
      event.preventDefault();
      if (toDo === "") {
        return;
      }
      setToDos((currentArray) => [toDo, ...currentArray]); //입력받은 걸 배열에 넣음
      inputToDo("");

    };


  return (
    <div className="center">
    <Clock></Clock>
    <div className="whiteBox">
     
     <h1>❗투두리스트❗</h1>
    
     <header className = "input-box">
      
     <form onSubmit={submitInput} >
      <input
        className = "toDo"
        onChange={onChange}
        value={toDo}
        type="text"
        placeholder="할 일을 입력하세요"
      />
      <span className = "toDoButton" onClick={submitInput}> +</span>
    </form>
      
      </header>

      </div>

</div>
  );
}

export default App;
