import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DrawingServiceBase } from "./base/drawing.service.base";

@Injectable()
export class DrawingService extends DrawingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
