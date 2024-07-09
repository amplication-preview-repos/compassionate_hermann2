import { Drawing as TDrawing } from "../api/drawing/Drawing";

export const DRAWING_TITLE_FIELD = "title";

export const DrawingTitle = (record: TDrawing): string => {
  return record.title?.toString() || String(record.id);
};
