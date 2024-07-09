import { JsonValue } from "type-fest";
import { Drawing } from "../drawing/Drawing";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  drawings?: Array<Drawing>;
};
