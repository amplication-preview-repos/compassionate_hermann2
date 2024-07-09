import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StrokeListRelationFilter } from "../stroke/StrokeListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FillColorListRelationFilter } from "../fillColor/FillColorListRelationFilter";

export type DrawingWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  strokes?: StrokeListRelationFilter;
  user?: UserWhereUniqueInput;
  fillColors?: FillColorListRelationFilter;
};
