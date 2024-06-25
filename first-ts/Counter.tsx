import React, { useState } from "react";

function App() {
  // 타입 명시 없이 값을 넣을 경우(이니셜 값) 값에 맞는 타입으로 자동으로 들어감
  const [counter, setCounter] = useState<number>(1);
  const increment = () => {
    setCounter((prev) => prev++);
  };
  return <div onClick={increment}>{counter}</div>;
}

export default App;
