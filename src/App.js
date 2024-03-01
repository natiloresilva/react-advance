import "./App.css";
import { CustomButton } from "./CustomButton";
import UseEffectHook from "./hooks/UseEffectHook";
import UseReducerHook from "./hooks/UseReducerHook";
import UseRefHook from "./hooks/UseRefHook";
import UseStateHook from "./hooks/UseStateHook";

//Función impura: Siempre cambia su valor de retorno
const MyDate = () => new Date().toLocaleString();

//Función pura: Nunca cambia su valor de retorno
const MyComponente = ({ miProp }) => <p>Hello {miProp} </p>;

const App = () => {
  return (
    <>
      <p>The current time and date is: {MyDate()}</p>
      <MyComponente miProp={"Galileo"} />
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseReducerHook /> */}
      {/* <UseRefHook /> */}
    </>
  );
};

export default App;
