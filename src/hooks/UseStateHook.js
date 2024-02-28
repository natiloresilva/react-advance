import { useState } from "react";
import { CustomButton } from "../CustomButton";

// Reglas Hooks
// No se llaman en loops, ni condiciones, if, while, etc
// Siempre se colocan en el nivel más alto del componente
// Sólo se llama en 2 partes:
// Componentes de react y custom hooks
// Cuando creemos un custom hook use*

const UseStateHook = () => {
  const [years, setYears] = useState(0);
  return (
    <>
      <p>How many years have you been working with React: {years}</p>
      <CustomButton onClick={() => setYears(years + 1)}>Increase</CustomButton>
      <CustomButton
        onClick={() => {
          if (years > 0) setYears(years - 1);
        }}
      >
        Decrease
      </CustomButton>
    </>
  );
};

export default UseStateHook;
