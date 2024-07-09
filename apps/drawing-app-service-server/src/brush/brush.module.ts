import { Module } from "@nestjs/common";
import { BrushModuleBase } from "./base/brush.module.base";
import { BrushService } from "./brush.service";
import { BrushController } from "./brush.controller";
import { BrushResolver } from "./brush.resolver";

@Module({
  imports: [BrushModuleBase],
  controllers: [BrushController],
  providers: [BrushService, BrushResolver],
  exports: [BrushService],
})
export class BrushModule {}
