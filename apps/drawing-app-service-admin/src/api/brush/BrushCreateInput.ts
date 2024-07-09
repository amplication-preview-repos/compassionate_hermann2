import { StrokeCreateNestedManyWithoutBrushesInput } from "./StrokeCreateNestedManyWithoutBrushesInput";

export type BrushCreateInput = {
  size?: number | null;
  color?: string | null;
  name?: string | null;
  typeField?: "Option1" | null;
  strokes?: StrokeCreateNestedManyWithoutBrushesInput;
  brushStyle?: "Option1" | null;
  brushVariant?: "Option1" | null;
};
