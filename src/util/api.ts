import axios, { AxiosInstance } from "axios";
import { AddTodoInterface } from "./interfaces";

const client: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const todoApi = {
  addTodo: (todoData: AddTodoInterface) => client.post("/todo", todoData),
};
