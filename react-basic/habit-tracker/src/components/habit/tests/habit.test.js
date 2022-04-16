import React from "react";

import { render, screen } from "@testing-library/react";
import Habit from "../habit";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

describe("Habit", () => {
  const habit = { name: "Reading", count: 0 };
  let HabitComponent;
  let onIncrement;
  let onDecrement;
  let onDelete;

  beforeEach(() => {
    onIncrement = jest.fn();
    onDecrement = jest.fn();
    onDelete = jest.fn();
    HabitComponent = (
      <Habit
        habit={habit}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      />
    );
  });

  it("render", () => {
    const component = renderer.create(HabitComponent).toJSON();
    expect(component).toMatchSnapshot();
  });

  describe("Button Click", () => {
    beforeEach(() => {
      render(HabitComponent);
    });

    it('calls onIncrement when clicking "increment" button', () => {
      let button = screen.getByTitle("increase");
      userEvent.click(button);

      expect(onIncrement).toHaveBeenCalledWith(habit);
    });

    it('calls onDecrement when clicking "decrease" button', () => {
      let button = screen.getByTitle("decrease");
      userEvent.click(button);

      expect(onDecrement).toHaveBeenCalledWith(habit);
    });

    it('calls onDelete when clicking "delete" button', () => {
      let button = screen.getByTitle("delete");
      userEvent.click(button);

      expect(onDelete).toHaveBeenCalledWith(habit);
    });
  });
});
