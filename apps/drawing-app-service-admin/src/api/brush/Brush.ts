import { Stroke } from "../stroke/Stroke";

export type Brush = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  size: number | null;
  color: string | null;
  name: string | null;
  typeField?: "Option1" | null;
  strokes?: Array<Stroke>;
  brushStyle?: "Option1" | null;
  brushVariant?: "Option1" | null;
};
