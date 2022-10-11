import { CategoryOptions } from "./options";

export interface AddTodoInterface {
  date: Date;
  todo: string;
  duration: number;
  done: false;
  category: string;
}
