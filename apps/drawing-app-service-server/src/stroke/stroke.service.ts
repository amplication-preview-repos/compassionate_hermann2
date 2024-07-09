import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StrokeServiceBase } from "./base/stroke.service.base";

@Injectable()
export class StrokeService extends StrokeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
