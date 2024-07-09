import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DrawingTitle } from "../drawing/DrawingTitle";

export const FillColorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="color" source="color" />
        <ReferenceInput source="drawing.id" reference="Drawing" label="Drawing">
          <SelectInput optionText={DrawingTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
