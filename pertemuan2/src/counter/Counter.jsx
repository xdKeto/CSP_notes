import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="justify-center items-center flex flex-col">
      <h1 className="font-semibold text-5xl">Count: {count}</h1>
      <button onClick={handleClick} className="px-6 py-2 rounded-full bg-red-500 text-white"> Tekan </button>
    </div>
  );
}
