import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({ todos }) {
  if (todos.length === 0){
    return(<span>No to do's yet! Your most pressing one will show up here once you add to the list.</span>)
  }

  let top = todos.reduce(
    (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);
  return <Todo 
            id={top.id} 
            title={top.title} 
            description={top.description} 
            priority={top.priority} 
            />;
}

export default TopTodo;