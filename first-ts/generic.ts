// 제네릭(generic)이란 데이터의 타입(data type)을 일반화한다(generalize)=변수화한다는 것을 의미
type Generic<T> = {
  someValue: T;
};

type Test = Generic<string>;

function someFunc<T>(value: T) {}

someFunc<string>("hello");
