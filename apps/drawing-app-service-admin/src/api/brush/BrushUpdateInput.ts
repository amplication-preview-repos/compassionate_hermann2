import { StrokeUpdateManyWithoutBrushesInput } from "./StrokeUpdateManyWithoutBrushesInput";

export type BrushUpdateInput = {
  size?: number | null;
  color?: string | null;
  name?: string | null;
  typeField?: "Option1" | null;
  strokes?: StrokeUpdateManyWithoutBrushesInput;
  brushStyle?: "Option1" | null;
  brushVariant?: "Option1" | null;
};
