import React, { useState } from "react";

function Parent() {
  // 이니셜값도 맞는 타입으로 할당
  const [count, setCount] = useState("");
  return <Child count={count}></Child>;
}

type Props = {
  count: string;
};

// 타입을 명시안하면 any타입이므로 타입 명시해줘야함
function Child({ count }: Props) {
  return <div>{count}</div>;
}

export default Parent;
