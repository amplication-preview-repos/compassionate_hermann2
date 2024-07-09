import * as graphql from "@nestjs/graphql";
import { FillColorResolverBase } from "./base/fillColor.resolver.base";
import { FillColor } from "./base/FillColor";
import { FillColorService } from "./fillColor.service";

@graphql.Resolver(() => FillColor)
export class FillColorResolver extends FillColorResolverBase {
  constructor(protected readonly service: FillColorService) {
    super(service);
  }
}
