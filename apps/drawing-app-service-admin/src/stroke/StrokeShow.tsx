import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { DRAWING_TITLE_FIELD } from "../drawing/DrawingTitle";
import { BRUSH_TITLE_FIELD } from "../brush/BrushTitle";

export const StrokeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="path" source="path" />
        <TextField label="coordinates" source="coordinates" />
        <ReferenceField label="Drawing" source="drawing.id" reference="Drawing">
          <TextField source={DRAWING_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Brush" source="brush.id" reference="Brush">
          <TextField source={BRUSH_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
