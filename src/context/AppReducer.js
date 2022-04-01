const AppReducer = (state, action) => {
  //DELETE = 아이템 삭제, ADD = 아이템 추가, MODIFY = 아이템 type 수정(done/todo)
  switch (action.type) {
    case "DELETE":
      return [...state.filter((item) => item.id !== action.payload.id)];
    case "ADD":
      return [...state.concat([action.payload])];
    case "MODIFY":
      return [
        ...state.map((item) =>
          item.id === action.payload.id
            ? { ...item, type: item.type === "todo" ? "done" : "todo" }
            : item
        ),
      ];
    default:
      return [...state];
  }
};

export default AppReducer;
