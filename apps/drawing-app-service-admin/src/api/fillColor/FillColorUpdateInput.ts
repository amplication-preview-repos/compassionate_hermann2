import { DrawingWhereUniqueInput } from "../drawing/DrawingWhereUniqueInput";

export type FillColorUpdateInput = {
  color?: string | null;
  drawing?: DrawingWhereUniqueInput | null;
};
