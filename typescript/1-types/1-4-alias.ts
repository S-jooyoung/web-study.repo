{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = "jooyoung";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "jooyoung",
    age: 12,
  };

  /**
   * String Literal Types
   */
  type Name = "name";
  let jooyoungName: Name;
  jooyoungName = "name";
  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
}
