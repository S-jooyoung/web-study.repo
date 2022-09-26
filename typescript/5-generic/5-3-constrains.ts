{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay(): void {
      console.log("full time!!");
    }

    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay(): void {
      console.log(`part time!!`);
    }
    workPartTime() {}
  }

  // 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다 리턴하는 함수는 💩💩💩
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const jooyoung = new FullTimeEmployee();
  const bob = new PartTimeEmployee();

  jooyoung.workFullTime();
  bob.workPartTime();

  const jooyoungAfterPay = pay(jooyoung);
  const bobAfterPay = pay(bob);

  // ------------------------------------------
  const obj = {
    name: "jooyoung",
    age: 27,
  };

  const obj2 = {
    animal: "🐶",
  };

  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  console.log(getValue(obj, "name")); // jooyoung
  console.log(getValue(obj, "age")); // 27
  console.log(getValue(obj2, "animal")); // 🐶
}
