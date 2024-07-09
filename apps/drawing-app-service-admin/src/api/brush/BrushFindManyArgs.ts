import { BrushWhereInput } from "./BrushWhereInput";
import { BrushOrderByInput } from "./BrushOrderByInput";

export type BrushFindManyArgs = {
  where?: BrushWhereInput;
  orderBy?: Array<BrushOrderByInput>;
  skip?: number;
  take?: number;
};
