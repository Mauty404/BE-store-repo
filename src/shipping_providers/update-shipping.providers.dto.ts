import { PartialType } from '@nestjs/swagger';
import { CreateShippingProvidersDto } from './create-shipping.providers.dto';

export class UpdateShippingProvidersDto extends PartialType(
  CreateShippingProvidersDto,
) {}
