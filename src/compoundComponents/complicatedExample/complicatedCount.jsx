import { createContext, useContext, useState } from "react";

// 3. Create complicated child components in their own files to help implementing the common task. They need to use the CounterContext, so this needs to be exported
import { Count } from "./CounterComponents/Count";
import { Label } from "./CounterComponents/Label";
import { Increase } from "./CounterComponents/Increase";
import { Decrease } from "./CounterComponents/Decrease";
//1. Create a context
const CounterContext = createContext();
// 2. Create parent component
function ComplicatedCounter({ children }) {
  const [count, setCount] = useState(0);
  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      {children}
    </CounterContext.Provider>
  );
}

// 4. Add child components as proeprties to parent component
ComplicatedCounter.Count = Count;
ComplicatedCounter.Label = Label;
ComplicatedCounter.Increase = Increase;
ComplicatedCounter.Decrease = Decrease;

export default ComplicatedCounter;

function useCounter() {
  const context = useContext(CounterContext);
  if (context === undefined)
    throw new Error("Counter Context was used outside of CounterProvider");
  return context;
}

export { useCounter };
