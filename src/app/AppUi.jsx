import React from "react";
import CreateTodoButton from "../components/button/CreateTodoButton";
import TodoCount from "../components/contador/TodoCount";
import TodoSearch from "../components/search/TodoSearch";
import TodoItem from "../components/icons/TodoItem";
import TodoList from "../components/list/TodoList";
import Loading from "../components/TodosLoading/Loading";
import Error from "../components/TodosError/Error";
import Empty from "../components/EmptyTodos/Empty";
import { TodoContext } from "../components/TodoContext/Context";

export default function AppUi() {
  return (
    <>
      <TodoCount />
      <TodoSearch />

      <TodoContext.Consumer>
        {({          
          loading,
          error,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }) => (
          <TodoList>
            {loading && (
              <>
                <Loading />
                <Loading />
                <Loading />
              </>
            )}
            {error && <Error />}
            {!loading && searchedTodos.length == 0 && <Empty />}
            {searchedTodos.map((todo) => {
              return (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              );
            })}
          </TodoList>
        )}
      </TodoContext.Consumer>
      <CreateTodoButton />
    </>
  );
}
