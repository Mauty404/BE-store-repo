import { IsString } from 'class-validator';

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

  @IsString()
  readonly propertyNumber: string;

  @IsString()
  readonly buildingNumber: string;
}
