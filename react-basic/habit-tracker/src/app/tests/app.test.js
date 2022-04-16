import React from "react";
import App from "../app";
import HabitPresenter from "../habit_presenter";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  const habits = [
    { id: 1, name: "Reading", count: 1 },
    { id: 2, name: "Running", count: 0 },
  ];
  let AppComponent;
  let presenter;

  beforeEach(() => {
    presenter = new HabitPresenter(habits, 3);
    AppComponent = <App presenter={presenter} />;
  });

  it("renders", () => {
    const component = renderer.create(AppComponent).toJSON();
    expect(component).toMatchSnapshot();
  });

  describe("Component", () => {
    beforeEach(() => {
      render(AppComponent);
    });

    it("count only active habits", () => {
      const button = screen.getAllByTitle("increase")[0];
      userEvent.click(button);
      const count = screen.getByTestId("total-count");
      expect(count.innerHTML).toBe("1");
    });

    it("adds new habit", () => {
      const newHabit = "New Habbit";
      const input = screen.getByPlaceholderText("Habit");
      const button = screen.getByText("Add");
      userEvent.type(input, newHabit);
      userEvent.click(button);
      const addedName = screen.getAllByTestId("habit-name")[2];
      expect(addedName.innerHTML).toBe(newHabit);
      const addedCount = screen.getAllByTestId("habit-count")[2];
      expect(addedCount.innerHTML).toBe("0");
    });

    it("deletes an item", () => {
      const first = screen.getAllByTitle("delete")[0];
      userEvent.click(first);
      const next = screen.getAllByTestId("habit-name")[0];
      expect(next.innerHTML).not.toBe("Reading");
    });

    it("increases the counter", () => {
      const button = screen.getAllByTitle("increase")[0];
      userEvent.click(button);
      const count = screen.getAllByTestId("habit-count")[0];
      expect(count.innerHTML).toBe("2");
    });

    it("decrease the counter", () => {
      const button = screen.getAllByTitle("decrease")[0];
      userEvent.click(button);
      const count = screen.getAllByTestId("habit-count")[0];
      expect(count.innerHTML).toBe("0");
    });

    it("resets all counters", () => {
      const button = screen.getByText("Reset All");
      userEvent.click(button);
      screen.getAllByTestId("habit-count").forEach((count) => {
        expect(count.innerHTML).toBe("0");
      });
    });
  });
});
