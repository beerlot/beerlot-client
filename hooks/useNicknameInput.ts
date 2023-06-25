import React, {useState} from "react";

interface NicknameInputProps {
  initialInputState: string;
}

const useNicknameInput = ({initialInputState}: NicknameInputProps) => {
  const [input, setInput] = useState<string>(initialInputState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  return {
    input,
    setInput,
    onChange,
  };
};

export default useNicknameInput;
