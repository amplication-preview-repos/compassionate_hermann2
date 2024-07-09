import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BrushServiceBase } from "./base/brush.service.base";

@Injectable()
export class BrushService extends BrushServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
