import { IsNumber, IsString } from 'class-validator';

export class CreateShippingProvidersDto {
  @IsString()
  readonly name: string;
  @IsNumber()
  readonly price: number;
}
