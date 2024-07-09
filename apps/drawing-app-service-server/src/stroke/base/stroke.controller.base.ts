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
import { StrokeService } from "../stroke.service";
import { StrokeCreateInput } from "./StrokeCreateInput";
import { Stroke } from "./Stroke";
import { StrokeFindManyArgs } from "./StrokeFindManyArgs";
import { StrokeWhereUniqueInput } from "./StrokeWhereUniqueInput";
import { StrokeUpdateInput } from "./StrokeUpdateInput";

export class StrokeControllerBase {
  constructor(protected readonly service: StrokeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Stroke })
  @swagger.ApiBody({
    type: StrokeCreateInput,
  })
  async createStroke(@common.Body() data: StrokeCreateInput): Promise<Stroke> {
    return await this.service.createStroke({
      data: {
        ...data,

        drawing: data.drawing
          ? {
              connect: data.drawing,
            }
          : undefined,

        brush: data.brush
          ? {
              connect: data.brush,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Stroke] })
  @ApiNestedQuery(StrokeFindManyArgs)
  async strokes(@common.Req() request: Request): Promise<Stroke[]> {
    const args = plainToClass(StrokeFindManyArgs, request.query);
    return this.service.strokes({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Stroke })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async stroke(
    @common.Param() params: StrokeWhereUniqueInput
  ): Promise<Stroke | null> {
    const result = await this.service.stroke({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Stroke })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: StrokeUpdateInput,
  })
  async updateStroke(
    @common.Param() params: StrokeWhereUniqueInput,
    @common.Body() data: StrokeUpdateInput
  ): Promise<Stroke | null> {
    try {
      return await this.service.updateStroke({
        where: params,
        data: {
          ...data,

          drawing: data.drawing
            ? {
                connect: data.drawing,
              }
            : undefined,

          brush: data.brush
            ? {
                connect: data.brush,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Stroke })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStroke(
    @common.Param() params: StrokeWhereUniqueInput
  ): Promise<Stroke | null> {
    try {
      return await this.service.deleteStroke({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
