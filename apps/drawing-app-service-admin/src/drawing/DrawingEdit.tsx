import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StrokeTitle } from "../stroke/StrokeTitle";
import { UserTitle } from "../user/UserTitle";
import { FillColorTitle } from "../fillColor/FillColorTitle";

export const DrawingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="strokes"
          reference="Stroke"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StrokeTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="fillColors"
          reference="FillColor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FillColorTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
