import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DrawingService } from "./drawing.service";
import { DrawingControllerBase } from "./base/drawing.controller.base";

@swagger.ApiTags("drawings")
@common.Controller("drawings")
export class DrawingController extends DrawingControllerBase {
  constructor(protected readonly service: DrawingService) {
    super(service);
  }
}
