import { StrokeUpdateManyWithoutDrawingsInput } from "./StrokeUpdateManyWithoutDrawingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FillColorUpdateManyWithoutDrawingsInput } from "./FillColorUpdateManyWithoutDrawingsInput";

export type DrawingUpdateInput = {
  title?: string | null;
  description?: string | null;
  strokes?: StrokeUpdateManyWithoutDrawingsInput;
  user?: UserWhereUniqueInput | null;
  fillColors?: FillColorUpdateManyWithoutDrawingsInput;
};
