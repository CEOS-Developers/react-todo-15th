// input event handler
export interface HandleInputChangeInterface {
  target: HTMLInputElement;
}

// default data form
export interface TodoItemData {
  data: string;
}

// TodoItem Element type
export interface TodoItemElement {
  data: string;
  index: number;
  deleteFromList: (index: number) => void;
  toggleToAnother: (textData: string) => void;
}
