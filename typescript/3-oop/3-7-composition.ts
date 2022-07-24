{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSuger?: boolean;
  };

  // public
  // private
  // protected
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("cleaning the machine... 🧹");
    }

    grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    preheat(): void {
      console.log("heating up... 🔥");
    }

    extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);

      return {
        shots: shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSuger(cup: CoffeeCup): CoffeeCup;
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): boolean {
      console.log("Steaming some milk... 🥛");
      return true;
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      const milk: boolean = this.steamMilk();
      return {
        ...cup,
        hasMilk: milk,
      };
    }
  }

  // 고급 우유 거품기
  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): boolean {
      console.log("Fancy Steaming some milk... 🥛");
      return true;
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      const milk: boolean = this.steamMilk();
      return {
        ...cup,
        hasMilk: milk,
      };
    }
  }

  // 차가운 우유 거품기
  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): boolean {
      console.log("Cold Steaming some milk... 🥛");
      return true;
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      const milk: boolean = this.steamMilk();
      return {
        ...cup,
        hasMilk: milk,
      };
    }
  }

  // 설탕 제조기
  class CandySugerMixer implements SugarProvider {
    private getSuger() {
      console.log("Getting some sugar from jas 🍭");
      return true;
    }

    addSuger(cup: CoffeeCup): CoffeeCup {
      const suger: boolean = this.getSuger();

      return {
        ...cup,
        hasSuger: suger,
      };
    }
  }

  // 설탕 제조기
  class SugerMixer implements SugarProvider {
    private getSuger() {
      console.log("Getting some sugar from jar 🍰");
      return true;
    }

    addSuger(cup: CoffeeCup): CoffeeCup {
      const suger: boolean = this.getSuger();

      return {
        ...cup,
        hasSuger: suger,
      };
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      public readonly serialNumber: string,
      private milkFrother: MilkFrother
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);

      return this.milkFrother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(private beans: number, private sugar: SugarProvider) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);

      return this.sugar.addSuger(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milk.makeMilk(this.sugar.addSuger(coffee));
    }
  }

  // Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();

  // Sugar
  const candySuger = new CandySugerMixer();
  const sugar = new SugerMixer();

  //
  const sweetCandyMachine = new SweetCoffeeMaker(12, candySuger);
  const sweetMachine = new SweetCoffeeMaker(12, sugar);

  const latterMachine = new CaffeLatteMachine(12, "SS", cheapMilkMaker);
  const coldLatterMachine = new CaffeLatteMachine(12, "SS", coldMilkMaker);
  const sweetLatterMachine = new SweetCaffeLatteMachine(
    12,
    cheapMilkMaker,
    candySuger
  );
}
