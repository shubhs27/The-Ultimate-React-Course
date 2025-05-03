import { useState } from "react";

function SlowComponent() {
  // If this is too slow on your maching, reduce the `length`
  const words = Array.from({ length: 100_000 }, () => "WORD");
  return (
    <ul>
      {words.map((word, i) => (
        <li key={i}>
          {i}: {word}
        </li>
      ))}
    </ul>
  );
}

function Counter({ children }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Slow counter?!?</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
      {children}
    </div>
  );
}

// This way SlowComponent is already created before Counter component re-rendered, so there's no way in which SlowComponent could have been affected by the state change in the Counter

export default function Test() {
  //   const [count, setCount] = useState(0);
  //   return (
  //     <div>
  //       <h1>Slow counter?!?</h1>
  //       <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
  //       <SlowComponent />
  //     </div>
  //   );

  return (
    <div>
      <h1>Slow counter?!?</h1>
      <Counter>
        <SlowComponent />
      </Counter>
    </div>
  );
}
