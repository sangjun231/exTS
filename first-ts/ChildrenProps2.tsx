import { PropsWithChildren } from "react";

type BaseType = {
  id: string;
};

function Child({ children }: PropsWithChildren<BaseType>) {
  return <div>{children}</div>;
}

export function Parent() {
  return <Child id=""></Child>;
}
