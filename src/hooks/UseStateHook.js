import { useState } from "react";
import { CustomButton } from "../CustomButton";

// Reglas Hooks
// No se llaman en loops, ni condiciones, if, while, etc
// Siempre se colocan en el nivel más alto del componente
// Sólo se llama en 2 partes:
// Componentes de react y custom hooks
// Cuando creemos un custom hook use*

//Custom Hook example

const useContador = (initValue) => {
  const [years, setYears] = useState(0);
  const increase = () => {
    setYears(years + 1);
  };
  const decrease = () => {
    if (years > 0) setYears(years - 1);
  };
  return [years, increase, decrease];
};

const UseStateHook = () => {
  const [years, increase, decrease] = useContador(0);
  return (
    <>
      <p>How many years have you been working with React: {years}</p>
      <CustomButton onClick={increase}>Increase</CustomButton>
      <CustomButton onClick={decrease}>Decrease</CustomButton>
    </>
  );
};

export default UseStateHook;
