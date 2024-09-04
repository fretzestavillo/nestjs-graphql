import { InputType, Field } from '@nestjs/graphql';
import { MinLength, IsDateString } from 'class-validator';

@InputType()
export class UpdateLesson {
  @MinLength(1)
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  startDate?: string;

  @Field({ nullable: true })
  endDate?: string;
}
