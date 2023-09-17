export enum TodoStatus {
  INITIAL = "initial",
  READY = "ready",
  CLOSED = "closed",
}

export interface ITodo {
  text: string;
  id: number;
  status: TodoStatus;
}
