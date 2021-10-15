import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
  const [toDoList, setToDoList] = useState(initialTodos) // could call this todos
  /** add a new todo to list */
  function create(newTodo) {
    const newItem = { ...newTodo, id: uuid() }
    console.log("new item created", newItem);
    setToDoList((initialTodos => [...initialTodos, newItem]));
  }

  /** update a todo with updatedTodo */
  function update(updatedData) {
    setToDoList(initialTodos => initialTodos.map(toDo =>
      updatedData.id === toDo.id ? updatedData : toDo));
  }

  /** delete a todo by id */
  function remove(id) {
    setToDoList(initialTodos => initialTodos.filter(todo => todo.id !== id));
  }



  /** check for todos in list, returns T if yes, returns false if none*/
  function checkForTodos() {
    return Boolean(toDoList.length);
  }
  const toDoCheck = checkForTodos();

  //if no todos, display messages -- otherwise display the todos + top todo
  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">

          {toDoCheck &&
            <EditableTodoList toDos={toDoList} update={update} remove={remove} />}
          {!toDoCheck && <span className="text-muted">You have no todos.</span>}
        </div>

        <div className="col-md-6">
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={toDoList} />
            </section>
          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={create} />
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;