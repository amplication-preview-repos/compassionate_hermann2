import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DrawingTitle } from "../drawing/DrawingTitle";

export const FillColorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="color" source="color" />
        <ReferenceInput source="drawing.id" reference="Drawing" label="Drawing">
          <SelectInput optionText={DrawingTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
