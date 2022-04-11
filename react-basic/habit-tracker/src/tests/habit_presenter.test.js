import HabitPresenter from "../habit_presenter";

describe("HabitPresenter", () => {
  const habits = [
    { id: 1, name: "Reading", count: 1 },
    { id: 2, name: "Running", count: 0 },
  ];

  let presenter;
  let update;

  beforeEach(() => {
    presenter = new HabitPresenter(habits, 3);
    update = jest.fn();
  });

  it("inits with habits ", () => {
    expect(presenter.getHabits()).toEqual(habits);
  });

  it("increment habit and call update callback", () => {
    presenter.increment(habits[0], update);
    expect(presenter.getHabits()[0].count).toBe(2);
    checkUpdateIsCalled();
  });

  it("decrement habit and call update callback", () => {
    presenter.decrement(habits[0], update);
    expect(presenter.getHabits()[0].count).toBe(0);
    checkUpdateIsCalled();
  });

  it("does not set the value below 0 when decrease", () => {
    presenter.decrement(habits[0], update);
    presenter.decrement(habits[0], update);
    expect(presenter.getHabits()[0].count).toBe(0);
  });

  it("delete habit and call update callback", () => {
    presenter.delete(habits[0], update);
    expect(presenter.getHabits().length).toEqual(1);
    expect(presenter.getHabits()[0].name).toBe("Running");
    checkUpdateIsCalled();
  });

  it("add habit and call update callback", () => {
    presenter.add("eating", update);
    expect(presenter.getHabits().length).toEqual(3);
    expect(presenter.getHabits()[2].name).toBe("eating");
    expect(presenter.getHabits()[2].count).toBe(0);
    checkUpdateIsCalled();
  });

  it("throws an error when the max habits limit is exceeded", () => {
    presenter.add("swimming", update);
    expect(() => presenter.add("working", update)).toThrow(
      `습관의 갯수는 3 이상이 될 수 없습니다.`
    );
  });

  describe("reset", () => {
    it("reset habit that count is zero", () => {
      presenter.reset(update);
      expect(presenter.getHabits()[0].count).toEqual(0);
      expect(presenter.getHabits()[1].count).toEqual(0);
      checkUpdateIsCalled();
    });

    it("does not create new object when count is 0", () => {
      const original = presenter.getHabits();
      presenter.reset(update);
      const updateHabits = presenter.getHabits();

      expect(updateHabits[1]).toBe(original[1]);
    });
  });

  function checkUpdateIsCalled() {
    expect(update).toHaveBeenCalled();
    expect(update).toBeCalledWith(presenter.getHabits());
  }
});
