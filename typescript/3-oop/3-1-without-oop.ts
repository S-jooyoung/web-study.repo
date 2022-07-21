{
  // Made by me
  // let beans: number;

  // function makeCoffee(shots: number): number {
  //   if (beans < shots || beans === undefined)
  //     throw Error("beans is not enough!");

  //   beans -= shots;

  //   return shots;
  // }

  // beans = 10;

  // console.log("coffee: " + makeCoffee(3));
  // console.log(beans);

  // Advanced answer

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAM_PER_SHOT: number = 7;

  let coffeeBean: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBean < shots * BEANS_GRAM_PER_SHOT) {
      throw Error("Not enough coffee beans!");
    }

    coffeeBean -= shots * BEANS_GRAM_PER_SHOT;

    return {
      shots,
      hasMilk: false,
    };
  }

  coffeeBean += 3 * BEANS_GRAM_PER_SHOT;

  const coffee = makeCoffee(2);

  console.log(coffee);
}
