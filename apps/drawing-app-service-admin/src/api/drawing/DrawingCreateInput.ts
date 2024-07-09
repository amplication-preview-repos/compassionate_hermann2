import { StrokeCreateNestedManyWithoutDrawingsInput } from "./StrokeCreateNestedManyWithoutDrawingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FillColorCreateNestedManyWithoutDrawingsInput } from "./FillColorCreateNestedManyWithoutDrawingsInput";

export type DrawingCreateInput = {
  title?: string | null;
  description?: string | null;
  strokes?: StrokeCreateNestedManyWithoutDrawingsInput;
  user?: UserWhereUniqueInput | null;
  fillColors?: FillColorCreateNestedManyWithoutDrawingsInput;
};
