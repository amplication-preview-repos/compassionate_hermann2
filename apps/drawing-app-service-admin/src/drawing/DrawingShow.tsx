import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DRAWING_TITLE_FIELD } from "./DrawingTitle";
import { BRUSH_TITLE_FIELD } from "../brush/BrushTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const DrawingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="title" source="title" />
        <TextField label="description" source="description" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Stroke"
          target="drawingId"
          label="Strokes"
        >
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
        <ReferenceManyField
          reference="FillColor"
          target="drawingId"
          label="FillColors"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="color" source="color" />
            <ReferenceField
              label="Drawing"
              source="drawing.id"
              reference="Drawing"
            >
              <TextField source={DRAWING_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
