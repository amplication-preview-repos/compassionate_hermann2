/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BrushWhereInput } from "./BrushWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BrushOrderByInput } from "./BrushOrderByInput";

@ArgsType()
class BrushFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BrushWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BrushWhereInput, { nullable: true })
  @Type(() => BrushWhereInput)
  where?: BrushWhereInput;

  @ApiProperty({
    required: false,
    type: [BrushOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BrushOrderByInput], { nullable: true })
  @Type(() => BrushOrderByInput)
  orderBy?: Array<BrushOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BrushFindManyArgs as BrushFindManyArgs };