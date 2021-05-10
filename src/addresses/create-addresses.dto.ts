import { IsNumber, IsString } from 'class-validator';

export class CreateAddressesDto {

  @IsString()
  readonly land: string;

  @IsString()
  readonly region: string;

  @IsString()
  readonly city: string;

  @IsString()
  readonly postalAddress: string;

  @IsString()
  readonly street: string;

  @IsNumber()
  readonly propertyNumber: string;

  @IsNumber()
  readonly buildingNumber: string;
}
