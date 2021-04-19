import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { Address } from '../addresses/address.entity';

export class CreateUsersDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly surname: string;

  @IsString()
  readonly login: string;

  @IsString()
  readonly password: string;

  @IsBoolean()
  readonly isWorker: boolean;

  @IsNumber()
  readonly address: Address;
}
