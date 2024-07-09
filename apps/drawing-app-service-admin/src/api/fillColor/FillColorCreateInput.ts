import { DrawingWhereUniqueInput } from "../drawing/DrawingWhereUniqueInput";

export type FillColorCreateInput = {
  color?: string | null;
  drawing?: DrawingWhereUniqueInput | null;
};
