import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BrushList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Brushes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="size" source="size" />
        <TextField label="color" source="color" />
        <TextField label="name" source="name" />
        <TextField label="type" source="typeField" />
        <TextField label="brushStyle" source="brushStyle" />
        <TextField label="brushVariant" source="brushVariant" />
      </Datagrid>
    </List>
  );
};
