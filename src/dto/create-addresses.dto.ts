import { IsString } from 'class-validator';

export class CreateAddressesDto {
  @IsString()
  readonly land: string;

  @IsString()
  readonly region: string;

  @IsString()
  readonly city: string;

  @IsString()
  readonly postal_address: string;

  @IsString()
  readonly street: string;

  @IsString()
  readonly property_number: string;

  @IsString()
  readonly building_number: string;
}
