import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import Habits from "../habits";
import userEvent from "@testing-library/user-event";

describe("Habits", () => {
  const habits = [
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Running", count: 0 },
    { id: 3, name: "Coding", count: 0 },
  ];
  let HabitsComponent;
  let onIncrement;
  let onDecrement;
  let onDelete;
  let onAdd;
  let onReset;

  beforeEach(() => {
    onIncrement = jest.fn();
    onDecrement = jest.fn();
    onDelete = jest.fn();
    onAdd = jest.fn();
    onReset = jest.fn();
    HabitsComponent = (
      <Habits
        habits={habits}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
        onAdd={onAdd}
        onReset={onReset}
      />
    );
  });

  it("renders", () => {
    const component = renderer.create(HabitsComponent).toJSON();
    expect(component).toMatchSnapshot();
  });

  describe("Button Click", () => {
    beforeEach(() => {
      render(HabitsComponent);
    });

    it('calls onAdd when clicking "Add" button', () => {
      const input = screen.getByPlaceholderText("Habit");
      const button = screen.getByText("Add");
      userEvent.type(input, "New Habit");
      userEvent.click(button);
      expect(onAdd).toHaveBeenCalledWith("New Habit");
    });

    it('calls onIncrement when clicking "increment" button', () => {
      let button = screen.getAllByTitle("increase")[0];
      userEvent.click(button);
      expect(onIncrement).toHaveBeenCalledWith(habits[0]);
    });

    it('calls onDecrement when clicking "decrease" button', () => {
      let button = screen.getAllByTitle("decrease")[0];
      userEvent.click(button);
      expect(onDecrement).toHaveBeenCalledWith(habits[0]);
    });

    it('calls onDelete when clicking "delete" button', () => {
      let button = screen.getAllByTitle("delete")[0];
      userEvent.click(button);
      expect(onDelete).toHaveBeenCalledWith(habits[0]);
    });
  });
});
