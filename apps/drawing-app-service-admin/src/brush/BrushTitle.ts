import { Brush as TBrush } from "../api/brush/Brush";

export const BRUSH_TITLE_FIELD = "name";

export const BrushTitle = (record: TBrush): string => {
  return record.name?.toString() || String(record.id);
};
