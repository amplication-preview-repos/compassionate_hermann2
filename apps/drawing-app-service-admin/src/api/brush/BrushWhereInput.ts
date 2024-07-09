import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StrokeListRelationFilter } from "../stroke/StrokeListRelationFilter";

export type BrushWhereInput = {
  id?: StringFilter;
  size?: IntNullableFilter;
  color?: StringNullableFilter;
  name?: StringNullableFilter;
  typeField?: "Option1";
  strokes?: StrokeListRelationFilter;
  brushStyle?: "Option1";
  brushVariant?: "Option1";
};
