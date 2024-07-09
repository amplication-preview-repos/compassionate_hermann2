import { Module } from "@nestjs/common";
import { FillColorModuleBase } from "./base/fillColor.module.base";
import { FillColorService } from "./fillColor.service";
import { FillColorController } from "./fillColor.controller";
import { FillColorResolver } from "./fillColor.resolver";

@Module({
  imports: [FillColorModuleBase],
  controllers: [FillColorController],
  providers: [FillColorService, FillColorResolver],
  exports: [FillColorService],
})
export class FillColorModule {}
