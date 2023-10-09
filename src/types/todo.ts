export interface ITodo {
  text: string;
  id: number;
  isReady: boolean;
  title: string;
}

export interface IExternalTodo {
  body: string;
  id: number;
  userId: number;
  title: string;
}

export const todosMapper = (externalTodo: IExternalTodo): ITodo => ({
  text: externalTodo.body,
  id: externalTodo.id,
  isReady: false,
  title: externalTodo.title,
});
