import "./App.css";
import { CustomButton } from "./CustomButton";

//Función impura: Siempre cambia su valor de retorno
const MyDate = () => new Date().toLocaleString();

//Función pura: Nunca cambia su valor de retorno
const MyComponente = ({ miProp }) => <p>Hello {miProp} </p>;

const App = () => {
  return (
    <>
      <p>The current time and date is: {MyDate()}</p>
      <MyComponente miProp={"Galileo"} />
      <CustomButton onClick={() => console.log("Enviado")}>Send</CustomButton>
    </>
  );
};

export default App;
