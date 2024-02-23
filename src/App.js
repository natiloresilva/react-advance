import "./App.css";
import { CustomButton } from "./CustomButton";

const App = () => {
  return (
    <>
      <p>Hola mi Gali </p>
      <CustomButton onClick={() => console.log("Enviado")}>Enviar</CustomButton>
    </>
  );
};

export default App;
