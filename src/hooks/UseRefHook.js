import { useRef } from "react";
import { CustomButton } from "../CustomButton";

const UseRefHook = () => {
  const ref = useRef();
  const inputRef = useRef();

  const click = () => {
    console.log(ref.current.clientHeight);
    ref.current.innerHTML = "Bravo!";
  };
  const focus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} />
      <CustomButton onClick={focus}>Focus</CustomButton>
      <div onClick={click} ref={ref}>
        Hola
      </div>
    </div>
  );
};

export default UseRefHook;
