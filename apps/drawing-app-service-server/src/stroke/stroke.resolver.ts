import * as graphql from "@nestjs/graphql";
import { StrokeResolverBase } from "./base/stroke.resolver.base";
import { Stroke } from "./base/Stroke";
import { StrokeService } from "./stroke.service";

@graphql.Resolver(() => Stroke)
export class StrokeResolver extends StrokeResolverBase {
  constructor(protected readonly service: StrokeService) {
    super(service);
  }
}
