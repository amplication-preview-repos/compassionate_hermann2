import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DrawingWhereUniqueInput } from "../drawing/DrawingWhereUniqueInput";

export type FillColorWhereInput = {
  id?: StringFilter;
  color?: StringNullableFilter;
  drawing?: DrawingWhereUniqueInput;
};
