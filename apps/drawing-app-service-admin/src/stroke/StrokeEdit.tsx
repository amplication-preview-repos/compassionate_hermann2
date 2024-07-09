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
import { BrushTitle } from "../brush/BrushTitle";

export const StrokeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="coordinates" multiline source="coordinates" />
        <ReferenceInput source="drawing.id" reference="Drawing" label="Drawing">
          <SelectInput optionText={DrawingTitle} />
        </ReferenceInput>
        <ReferenceInput source="brush.id" reference="Brush" label="Brush">
          <SelectInput optionText={BrushTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
