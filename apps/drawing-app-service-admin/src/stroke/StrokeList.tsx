import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DRAWING_TITLE_FIELD } from "../drawing/DrawingTitle";
import { BRUSH_TITLE_FIELD } from "../brush/BrushTitle";

export const StrokeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Strokes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
