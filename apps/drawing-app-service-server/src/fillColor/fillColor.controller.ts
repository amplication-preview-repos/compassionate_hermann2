import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FillColorService } from "./fillColor.service";
import { FillColorControllerBase } from "./base/fillColor.controller.base";

@swagger.ApiTags("fillColors")
@common.Controller("fillColors")
export class FillColorController extends FillColorControllerBase {
  constructor(protected readonly service: FillColorService) {
    super(service);
  }
}
