import { SortOrder } from "../../util/SortOrder";

export type DrawingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  userId?: SortOrder;
};
