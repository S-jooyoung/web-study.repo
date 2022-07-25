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

    constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSuger(coffee);
      return this.milk.makeMilk(sugarAdded);
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

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  class NoSugar implements SugarProvider {
    addSuger(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements SugarProvider {
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

  // Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  // Sugar
  const candySugar = new CandySugarMixer();
  const sugar = new SugerMixer();
  const noSugar = new NoSugar();

  //
  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
  const sweetMachine = new CoffeeMachine(12, noMilk, sugar);
  const latterMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
  const coldLatterMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
  const sweetLatterMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);
}
