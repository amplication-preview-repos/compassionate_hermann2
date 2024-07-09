import * as graphql from "@nestjs/graphql";
import { BrushResolverBase } from "./base/brush.resolver.base";
import { Brush } from "./base/Brush";
import { BrushService } from "./brush.service";

@graphql.Resolver(() => Brush)
export class BrushResolver extends BrushResolverBase {
  constructor(protected readonly service: BrushService) {
    super(service);
  }
}
