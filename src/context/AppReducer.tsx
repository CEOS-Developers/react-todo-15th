import {Item, ItemType, Action, ActionType, State} from "../Objects"

const AppReducer = (state: State, action: Action):State => {
  switch (action.type) {
    case ActionType.DELETE:
      return [...state.filter((item) => item.id !== action.payload.id)];
    case ActionType.ADD:
      return [...state.concat([action.payload])];
    case ActionType.MODIFY:
      return [
        ...state.map((item: Item) =>
          item.id === action.payload.id
            ? { ...item, type: item.type === ItemType.Todo ? ItemType.Done : ItemType.Todo }
            : item
        ),
      ];
    default:
      return [...state];
  }
};

export default AppReducer;
