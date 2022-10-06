/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ToDoList from "./ToDoList";

function addToDo(ToDoList, task = 'Walk the dogs') {
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const taskInput = ToDoList.getByLabelText("Task");
    fireEvent.change(taskInput, { target: { value: task } });
    const button = ToDoList.getByText('Update To Do List!');
    fireEvent.click(button);
}

it("renders without crashing", () => {
    render(<ToDoList />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<ToDoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("can add to do", () => {
    const list = render(<ToDoList />);
    addToDo(list);

    expect(list.getByLabelText("Task")).toHaveValue("");
    expect(list.getByText("Walk the dogs")).toBeInTheDocument();
    expect(list.getByText("X")).toBeInTheDocument();

});

it("can delete todo", () => {
    const list = render(<ToDoList />);
    addToDo(list);

    fireEvent.click(list.getByText("X"));

    // expect todo to be gone
    expect(list.queryByText("Walk the dogs")).not.toBeInTheDocument();
});