import { IsString } from 'class-validator';

export class CreateProducersDto {
  @IsString()
  readonly name: string;
}
