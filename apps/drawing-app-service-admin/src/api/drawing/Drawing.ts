import { Stroke } from "../stroke/Stroke";
import { User } from "../user/User";
import { FillColor } from "../fillColor/FillColor";

export type Drawing = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  strokes?: Array<Stroke>;
  user?: User | null;
  fillColors?: Array<FillColor>;
};
