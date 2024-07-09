import { Stroke as TStroke } from "../api/stroke/Stroke";

export const STROKE_TITLE_FIELD = "id";

export const StrokeTitle = (record: TStroke): string => {
  return record.id?.toString() || String(record.id);
};
