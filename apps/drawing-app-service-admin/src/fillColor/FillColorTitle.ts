import { FillColor as TFillColor } from "../api/fillColor/FillColor";

export const FILLCOLOR_TITLE_FIELD = "color";

export const FillColorTitle = (record: TFillColor): string => {
  return record.color?.toString() || String(record.id);
};
