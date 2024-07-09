import { Drawing } from "../drawing/Drawing";

export type FillColor = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  color: string | null;
  drawing?: Drawing | null;
};
