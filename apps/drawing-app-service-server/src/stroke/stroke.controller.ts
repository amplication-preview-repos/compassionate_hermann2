import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StrokeService } from "./stroke.service";
import { StrokeControllerBase } from "./base/stroke.controller.base";

@swagger.ApiTags("strokes")
@common.Controller("strokes")
export class StrokeController extends StrokeControllerBase {
  constructor(protected readonly service: StrokeService) {
    super(service);
  }
}
