import { SortOrder } from "../../util/SortOrder";

export type BrushOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  size?: SortOrder;
  color?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  brushStyle?: SortOrder;
  brushVariant?: SortOrder;
};
