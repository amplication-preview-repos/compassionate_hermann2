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
import { DrawingWhereUniqueInput } from "./DrawingWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DrawingUpdateInput } from "./DrawingUpdateInput";

@ArgsType()
class UpdateDrawingArgs {
  @ApiProperty({
    required: true,
    type: () => DrawingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DrawingWhereUniqueInput)
  @Field(() => DrawingWhereUniqueInput, { nullable: false })
  where!: DrawingWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DrawingUpdateInput,
  })
  @ValidateNested()
  @Type(() => DrawingUpdateInput)
  @Field(() => DrawingUpdateInput, { nullable: false })
  data!: DrawingUpdateInput;
}

export { UpdateDrawingArgs as UpdateDrawingArgs };
