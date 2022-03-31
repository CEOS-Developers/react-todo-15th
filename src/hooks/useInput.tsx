import { useState } from "react";

const useInput = (initialValue: string) => {
  const [text, setText] = useState(initialValue);

  // input text 변경
  const _handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  // 입력값 초기화
  const _resetText = (): void => {
    setText("");
  };

  return { text, _handleTextChange, _resetText };
};

export default useInput;
