export interface ITodo {
  text: string;
  id: number;
  isReady: boolean;
}

export interface IExternalTodo {
  body: string;
  id: number;
  userId: number;
  title: string;
}

export const todosMapper = (externalTodo: IExternalTodo): ITodo => ({
  text: externalTodo.title,
  id: externalTodo.id,
  isReady: false,
});
