import { useReducer, useState } from "react";
import { CustomButton } from "../CustomButton";

//const state = {contador: 0}
//action = { type: string, payload: any } => convention
const initial = { contador: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { contador: state.contador + 1 };
    case "decrease":
      return { contador: state.contador - 1 };
    case "set":
      return { contador: action.payload };
    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initial);
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>Contador: {state.contador}</p>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter only numbers"
      />
      <CustomButton onClick={() => dispatch({ type: "increase" })}>
        Más
      </CustomButton>
      <CustomButton onClick={() => dispatch({ type: "decrease" })}>
        Menos
      </CustomButton>
      <CustomButton onClick={() => dispatch({ type: "set", payload: value })}>
        Set
      </CustomButton>
    </div>
  );
};

export default UseReducerHook;
