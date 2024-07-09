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
import { BrushTitle } from "../brush/BrushTitle";

export const StrokeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
