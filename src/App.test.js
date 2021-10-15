import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("productiv app", function () {
  it("renders without crashing", function () {
    render(<App />);
  });

  it("contains expected title", function () {
    const result = render(<App />);
    expect(result.queryByText("Prøductïv")).toBeInTheDocument();
  });


  it ("rendered quotes app", function () {
    const result = render(<App />);
    expect(result.queryByText("I don't procrastinate, I just wait for the right moment - Jean Paual Sartre")).toBeInTheDocument();
  });

  /////need to fix this test

  // it ("renders new quote on click of get inspired", function () {
  //   const result = render(<App />);
    
  //   const { getAllByText } = result;

  //   const inspireBtn = getAllByText("Get Inspired");
  //   console.log(inspireBtn);
  //   fireEvent.click(inspireBtn[0]);

  //   expect(result.queryByText("I don't procrastinate, I just wait for the right moment - Jean Paual Sartre")).not.toBeInTheDocument();
  // });

  it("adds todo to page after new todo form submission", function () {
    const result = render(<App />);
    const { getByLabelText, queryByText } = result;

    //todo not in page before we submit form
    expect(result.queryByText("my newest todo was put here")).not.toBeInTheDocument();

    const titleInput = getByLabelText("Title")
    const submitBtn = queryByText("Gø!");

    //submit form
    fireEvent.change(titleInput, { target: { value: "my newest todo was put here" } })
    fireEvent.click(submitBtn);

    //now todo is on page
    expect(result.queryByText("my newest todo was put here")).toBeInTheDocument();
  });

 
  it("deletes todo", function () {
    const result = render(<App />);
    const { getByLabelText, queryByText, getAllByText } = result;

    const delBtns = getAllByText("Del");

    expect(result.queryByText("Write some code")).toBeInTheDocument();

    fireEvent.click(delBtns[0]);

    expect(result.queryByText("Write some code")).not.toBeInTheDocument();

  });

  it("edits todo", function () {
    const result = render(<App />);
    const { getByLabelText, queryByText, getAllByText, getByDisplayValue } = result;

    const editBtns = getAllByText("Edit");

    expect(result.queryByText("Write some code")).toBeInTheDocument();

    fireEvent.click(editBtns[0]);

    const titleInput = getByDisplayValue("Code!")
    const descriptionInput = getByDisplayValue("Write some code")
    const submitBtns = getAllByText("Gø!");

    fireEvent.change(titleInput, { target: { value: "my edited title" } })
    fireEvent.change(descriptionInput, { target: { value: "my edited description" } })
    fireEvent.click(submitBtns[0])

    expect(result.queryByText("Write some code")).not.toBeInTheDocument();
    expect(result.queryByText("my edited title")).toBeInTheDocument();
    expect(result.queryByText("my edited description")).toBeInTheDocument();
  });

  it("shows top todo", function () {
    const result = render(<App />);
    const { getAllByText } = result;

    const instancesOfTopTodo = getAllByText("Cook something healthy");
    const editBtns = getAllByText("Edit");

    expect(instancesOfTopTodo.length).toEqual(2);
    expect(editBtns.length).toEqual(3);
    expect(result.queryByText("No to do's yet! Your most pressing one will show up here once you add to the list.")).not.toBeInTheDocument();
  });


});

