import { useEffect, useState } from "react";
import { CustomButton } from "../CustomButton";

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

const Interval = ({ contador }) => {
  useEffect(() => {
    const i = setInterval(() => console.log(contador), 1000);
    return () => clearInterval(i);
  }, [contador]);
  return <p>Intervalo</p>;
};

const UseEffectHook = () => {
  const [years, increase, decrease] = useContador(0);
  useEffect(() => {
    document.title = years;
  }, [years]);
  return (
    <>
      <p>How many years have you been working with React: {years}</p>
      <CustomButton onClick={increase}>Increase</CustomButton>
      <CustomButton onClick={decrease}>Decrease</CustomButton>
      <Interval contador={years} />
    </>
  );
};

export default UseEffectHook;
