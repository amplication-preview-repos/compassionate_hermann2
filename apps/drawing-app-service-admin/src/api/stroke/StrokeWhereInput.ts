import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DrawingWhereUniqueInput } from "../drawing/DrawingWhereUniqueInput";
import { BrushWhereUniqueInput } from "../brush/BrushWhereUniqueInput";

export type StrokeWhereInput = {
  id?: StringFilter;
  path?: JsonFilter;
  coordinates?: StringNullableFilter;
  drawing?: DrawingWhereUniqueInput;
  brush?: BrushWhereUniqueInput;
};
