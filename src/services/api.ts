import axios from "axios";
import { Todo } from "../types/todo";

//const BASE_URL = "https://dummyjson.com";
const BASE_URL = "http://localhost:8080";
const apiClient = axios.create({ baseURL: BASE_URL });

export const getTodos = async () => {
  return (await apiClient.get<Todo[]>("/todos")).data;
};

export const getTodo = async (id: number) => {
  return (await apiClient.get<Todo>("/todos/[id]", {
    params: { id },
  })).data;
};

export const updateTodo = (todo: Todo) => {
  return apiClient.put(`/todos/${todo.id}`, todo);
};

export const createTodo = (todo: Todo) => {
  return apiClient.post('/todos', todo)
}
