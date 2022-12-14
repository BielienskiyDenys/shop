import { Genre } from "../genre";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  categories: Genre[];
  isAvailable: boolean;
}