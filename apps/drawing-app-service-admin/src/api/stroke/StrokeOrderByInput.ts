import { SortOrder } from "../../util/SortOrder";

export type StrokeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  path?: SortOrder;
  coordinates?: SortOrder;
  drawingId?: SortOrder;
  brushId?: SortOrder;
};
