/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DrawingService } from "../drawing.service";
import { DrawingCreateInput } from "./DrawingCreateInput";
import { Drawing } from "./Drawing";
import { DrawingFindManyArgs } from "./DrawingFindManyArgs";
import { DrawingWhereUniqueInput } from "./DrawingWhereUniqueInput";
import { DrawingUpdateInput } from "./DrawingUpdateInput";
import { StrokeFindManyArgs } from "../../stroke/base/StrokeFindManyArgs";
import { Stroke } from "../../stroke/base/Stroke";
import { StrokeWhereUniqueInput } from "../../stroke/base/StrokeWhereUniqueInput";
import { FillColorFindManyArgs } from "../../fillColor/base/FillColorFindManyArgs";
import { FillColor } from "../../fillColor/base/FillColor";
import { FillColorWhereUniqueInput } from "../../fillColor/base/FillColorWhereUniqueInput";

export class DrawingControllerBase {
  constructor(protected readonly service: DrawingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Drawing })
  @swagger.ApiBody({
    type: DrawingCreateInput,
  })
  async createDrawing(
    @common.Body() data: DrawingCreateInput
  ): Promise<Drawing> {
    return await this.service.createDrawing({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        description: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Drawing] })
  @ApiNestedQuery(DrawingFindManyArgs)
  async drawings(@common.Req() request: Request): Promise<Drawing[]> {
    const args = plainToClass(DrawingFindManyArgs, request.query);
    return this.service.drawings({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        description: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Drawing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async drawing(
    @common.Param() params: DrawingWhereUniqueInput
  ): Promise<Drawing | null> {
    const result = await this.service.drawing({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        description: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Drawing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: DrawingUpdateInput,
  })
  async updateDrawing(
    @common.Param() params: DrawingWhereUniqueInput,
    @common.Body() data: DrawingUpdateInput
  ): Promise<Drawing | null> {
    try {
      return await this.service.updateDrawing({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          title: true,
          description: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Drawing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDrawing(
    @common.Param() params: DrawingWhereUniqueInput
  ): Promise<Drawing | null> {
    try {
      return await this.service.deleteDrawing({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          title: true,
          description: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/strokes")
  @ApiNestedQuery(StrokeFindManyArgs)
  async findStrokes(
    @common.Req() request: Request,
    @common.Param() params: DrawingWhereUniqueInput
  ): Promise<Stroke[]> {
    const query = plainToClass(StrokeFindManyArgs, request.query);
    const results = await this.service.findStrokes(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        path: true,
        coordinates: true,

        drawing: {
          select: {
            id: true,
          },
        },

        brush: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/strokes")
  async connectStrokes(
    @common.Param() params: DrawingWhereUniqueInput,
    @common.Body() body: StrokeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      strokes: {
        connect: body,
      },
    };
    await this.service.updateDrawing({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/strokes")
  async updateStrokes(
    @common.Param() params: DrawingWhereUniqueInput,
    @common.Body() body: StrokeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      strokes: {
        set: body,
      },
    };
    await this.service.updateDrawing({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/strokes")
  async disconnectStrokes(
    @common.Param() params: DrawingWhereUniqueInput,
    @common.Body() body: StrokeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      strokes: {
        disconnect: body,
      },
    };
    await this.service.updateDrawing({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/fillColors")
  @ApiNestedQuery(FillColorFindManyArgs)
  async findFillColors(
    @common.Req() request: Request,
    @common.Param() params: DrawingWhereUniqueInput
  ): Promise<FillColor[]> {
    const query = plainToClass(FillColorFindManyArgs, request.query);
    const results = await this.service.findFillColors(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        color: true,

        drawing: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/fillColors")
  async connectFillColors(
    @common.Param() params: DrawingWhereUniqueInput,
    @common.Body() body: FillColorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      fillColors: {
        connect: body,
      },
    };
    await this.service.updateDrawing({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/fillColors")
  async updateFillColors(
    @common.Param() params: DrawingWhereUniqueInput,
    @common.Body() body: FillColorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      fillColors: {
        set: body,
      },
    };
    await this.service.updateDrawing({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/fillColors")
  async disconnectFillColors(
    @common.Param() params: DrawingWhereUniqueInput,
    @common.Body() body: FillColorWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      fillColors: {
        disconnect: body,
      },
    };
    await this.service.updateDrawing({
      where: params,
      data,
      select: { id: true },
    });
  }
}