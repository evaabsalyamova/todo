import { IExternalTodo, ITodo } from "../types/todo";

const headers = {
  "Content-type": "application/json; charset=UTF-8",
};

export const getTodos = async (): Promise<IExternalTodo[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers,
  })
    .then((res) => res.json())
    .then((json) => JSON.parse(JSON.stringify(json)));

  return response;
};

export const sendDeleteTodo = ({ id }: { id: number }): void => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
    headers,
  });
};

export const sendTodoUpdates = ({ todo }: { todo: ITodo }): void => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${todo.id}`, {
    method: "PUT",
    body: JSON.stringify({
      id: todo.id,
      title: todo.title,
      body: todo.text,
      userId: 1,
    }),
    headers,
  });
};

export const sendNewTodo = ({
  title,
  body,
}: {
  title: string;
  body: string;
}): void => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
      userId: 1,
    }),
    headers,
  });
};
