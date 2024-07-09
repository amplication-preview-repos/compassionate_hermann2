import { StrokeWhereInput } from "./StrokeWhereInput";
import { StrokeOrderByInput } from "./StrokeOrderByInput";

export type StrokeFindManyArgs = {
  where?: StrokeWhereInput;
  orderBy?: Array<StrokeOrderByInput>;
  skip?: number;
  take?: number;
};
