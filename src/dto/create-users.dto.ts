import { IsBoolean, IsNumber, IsString } from 'class-validator';

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
  readonly is_worker: boolean;

  @IsNumber()
  readonly address_id: number;
}
