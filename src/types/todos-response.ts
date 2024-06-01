import { Todo } from "./todo";

export type TodosResponse = {
  limit: number;
  skip: number;
  todos: Todo[];
  total: number;
}
