import { useState } from "react";

const useInput = (initialValue: string) => {
  const [text, setText] = useState(initialValue);

  const _handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  // todo item 추가
  const _resetText = (): void => {
    setText("");
  };

  return { text, _handleTextChange, _resetText };
};

export default useInput;
