import React, { ReactNode } from "react";

type BaseType = {
  id: string;
};

type StrictChildren<T> = T & { children: ReactNode };

function Child({ children }: StrictChildren<BaseType>) {
  return <div>{children}</div>;
}

export function Parent() {
  return (
    <Child id="">
      <div>chlidren</div>
    </Child>
  );
}
