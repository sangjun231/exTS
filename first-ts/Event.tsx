import { useState } from "react";

function App() {
  const [counter, setCounter] = useState<number>(1);
  const eventHandler = (e: React.MouseEvent<HTMLDivElement>) => {};
  return <div onClick={eventHandler}>{counter}</div>;
}

export default App;
