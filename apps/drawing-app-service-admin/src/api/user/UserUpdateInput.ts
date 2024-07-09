import { InputJsonValue } from "../../types";
import { DrawingUpdateManyWithoutUsersInput } from "./DrawingUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  drawings?: DrawingUpdateManyWithoutUsersInput;
};
