import useCounter from "./hooks/useCounter";

function App() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <button onClick={decrement}>-</button>
      <h1 role="heading">{count}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
