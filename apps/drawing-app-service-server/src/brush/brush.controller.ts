import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BrushService } from "./brush.service";
import { BrushControllerBase } from "./base/brush.controller.base";

@swagger.ApiTags("brushes")
@common.Controller("brushes")
export class BrushController extends BrushControllerBase {
  constructor(protected readonly service: BrushService) {
    super(service);
  }
}
