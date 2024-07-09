import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DRAWING_TITLE_FIELD } from "../drawing/DrawingTitle";
import { BRUSH_TITLE_FIELD } from "./BrushTitle";

export const BrushShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="size" source="size" />
        <TextField label="color" source="color" />
        <TextField label="name" source="name" />
        <TextField label="type" source="typeField" />
        <TextField label="brushStyle" source="brushStyle" />
        <TextField label="brushVariant" source="brushVariant" />
        <ReferenceManyField reference="Stroke" target="brushId" label="Strokes">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="path" source="path" />
            <TextField label="coordinates" source="coordinates" />
            <ReferenceField
              label="Drawing"
              source="drawing.id"
              reference="Drawing"
            >
              <TextField source={DRAWING_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Brush" source="brush.id" reference="Brush">
              <TextField source={BRUSH_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
