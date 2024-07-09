/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DrawingWhereUniqueInput } from "../../drawing/base/DrawingWhereUniqueInput";
import { BrushWhereUniqueInput } from "../../brush/base/BrushWhereUniqueInput";

@InputType()
class StrokeWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  path?: JsonFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  coordinates?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => DrawingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DrawingWhereUniqueInput)
  @IsOptional()
  @Field(() => DrawingWhereUniqueInput, {
    nullable: true,
  })
  drawing?: DrawingWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => BrushWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BrushWhereUniqueInput)
  @IsOptional()
  @Field(() => BrushWhereUniqueInput, {
    nullable: true,
  })
  brush?: BrushWhereUniqueInput;
}

export { StrokeWhereInput as StrokeWhereInput };
