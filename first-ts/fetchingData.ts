type Person = { id: number; age: number; height: number };

async function getPerson(): Promise<Person[]> {
  const res = await fetch(`http://localhost:5008/people`);
  if (!res.ok) {
    throw new Error();
  }
  return res.json();
  // 이렇게 해도 res[0].id 이런식으로 접근가능 함수 타입 안정해도됨
  return res.json() as any as Person[];
}
//타입 명시로 속성 접근 가능
getPerson().then((res) => console.log(res[0].age));
