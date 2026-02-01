import { Category } from "./category";

export interface Tool {
  id?: number;
  title: string;
  category: Category[];
  url: string;
}
