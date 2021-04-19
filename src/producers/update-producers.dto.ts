import { PartialType } from '@nestjs/swagger';
import { CreateProducersDto } from './create-producers.dto';

export class UpdateProducersDto extends PartialType(CreateProducersDto) {}
