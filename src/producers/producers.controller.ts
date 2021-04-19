import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProducersService } from './producers.service';
import { CreateProducersDto } from './create-producers.dto';
import { UpdateProducersDto } from './update-producers.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Producers')
@Controller('producers')
export class ProducersController {
  constructor(private readonly producersService: ProducersService) {}
  @Get()
  findAll() {
    return this.producersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.producersService.findOne(id);
  }

  @Post()
  create(@Body() createProducersDto: CreateProducersDto) {
    return this.producersService.create(createProducersDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProducersDto: UpdateProducersDto,
  ) {
    return this.producersService.update(id, updateProducersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.producersService.remove(id);
  }
}
