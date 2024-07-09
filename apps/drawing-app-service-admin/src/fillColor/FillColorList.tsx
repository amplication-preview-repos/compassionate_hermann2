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

export const FillColorList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FillColors"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="color" source="color" />
        <ReferenceField label="Drawing" source="drawing.id" reference="Drawing">
          <TextField source={DRAWING_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
