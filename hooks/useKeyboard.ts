// make a hook that returns a function that can be used to add a keydown event listener
// that will call the callback when the key is pressed

import { AllKeyboardEvent } from "../interface/types";

const useKeyboard = () => {
  const isEnterKey = (e: AllKeyboardEvent) => {
    return e.code === "Enter";
  };

  return {
    isEnterKey,
  };
};
export default useKeyboard;
