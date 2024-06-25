function sum(a: number, b: number): number {
  return a + b;
}

function objSum({ a, b }: { a: number; b: number }): string {
  return `${a + b}`;
}
