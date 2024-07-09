import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FillColorServiceBase } from "./base/fillColor.service.base";

@Injectable()
export class FillColorService extends FillColorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
