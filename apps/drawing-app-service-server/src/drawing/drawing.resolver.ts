import * as graphql from "@nestjs/graphql";
import { DrawingResolverBase } from "./base/drawing.resolver.base";
import { Drawing } from "./base/Drawing";
import { DrawingService } from "./drawing.service";

@graphql.Resolver(() => Drawing)
export class DrawingResolver extends DrawingResolverBase {
  constructor(protected readonly service: DrawingService) {
    super(service);
  }
}
