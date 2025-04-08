import React, { useEffect, useState } from "react";

const Counter = ({ targetNumber, duration, title }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(targetNumber);
    if (start === end) return;

    let incrementTime = Math.floor(duration / end);

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [targetNumber, duration]);

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold  transition-all duration-300">{count}</h2>
      <p className="text-gray-600 mt-2">{title}</p>
    </div>
  );
};

export default Counter;
