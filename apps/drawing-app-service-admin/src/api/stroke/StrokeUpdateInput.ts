import { InputJsonValue } from "../../types";
import { DrawingWhereUniqueInput } from "../drawing/DrawingWhereUniqueInput";
import { BrushWhereUniqueInput } from "../brush/BrushWhereUniqueInput";

export type StrokeUpdateInput = {
  path?: InputJsonValue;
  coordinates?: string | null;
  drawing?: DrawingWhereUniqueInput | null;
  brush?: BrushWhereUniqueInput | null;
};
