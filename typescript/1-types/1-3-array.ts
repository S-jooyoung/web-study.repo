{
  // Array
  const fruits: string[] = ["🍅", "🍌"];
  const scores: number[] = [1, 2, 3];
  const scores2: Array<number> = [4, 5, 6];

  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123

  // object desturcturing
  const [name, age] = student;
}
