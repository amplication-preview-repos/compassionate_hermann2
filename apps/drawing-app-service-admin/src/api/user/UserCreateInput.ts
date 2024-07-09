import { InputJsonValue } from "../../types";
import { DrawingCreateNestedManyWithoutUsersInput } from "./DrawingCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  drawings?: DrawingCreateNestedManyWithoutUsersInput;
};
