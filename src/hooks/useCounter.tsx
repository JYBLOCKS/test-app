import { useState } from "react";

export default function useCounter() {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  return { count, increment, decrement };
}
