import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ toDos, update, remove }) {
  return toDos.map(toDo => (
    <EditableTodo key={toDo.id}
      todo={toDo}
      update={update}
      remove={remove}
    />
  ))
};

export default EditableTodoList;
