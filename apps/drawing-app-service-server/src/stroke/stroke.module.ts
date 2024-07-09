import { Module } from "@nestjs/common";
import { StrokeModuleBase } from "./base/stroke.module.base";
import { StrokeService } from "./stroke.service";
import { StrokeController } from "./stroke.controller";
import { StrokeResolver } from "./stroke.resolver";

@Module({
  imports: [StrokeModuleBase],
  controllers: [StrokeController],
  providers: [StrokeService, StrokeResolver],
  exports: [StrokeService],
})
export class StrokeModule {}
