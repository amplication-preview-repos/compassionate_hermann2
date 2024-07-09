import { JsonValue } from "type-fest";
import { Drawing } from "../drawing/Drawing";
import { Brush } from "../brush/Brush";

export type Stroke = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  path: JsonValue;
  coordinates: string | null;
  drawing?: Drawing | null;
  brush?: Brush | null;
};
