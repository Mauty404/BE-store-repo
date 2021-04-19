import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ShippingProvidersService } from './shipping.providers.service';
import { CreateShippingProvidersDto } from './create-shipping.providers.dto';
import { UpdateShippingProvidersDto } from './update-shipping.providers.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ShippingProviders')
@Controller('shippingProviders')
export class ShippingProvidersController {
  constructor(
    private readonly shippingProvidersService: ShippingProvidersService,
  ) {}

  @Get()
  findAll() {
    return this.shippingProvidersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shippingProvidersService.findOne(id);
  }

  @Post()
  create(@Body() createShippingProvidersDto: CreateShippingProvidersDto) {
    return this.shippingProvidersService.create(createShippingProvidersDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateShippingProvidersDto: UpdateShippingProvidersDto,
  ) {
    return this.shippingProvidersService.update(id, updateShippingProvidersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shippingProvidersService.remove(id);
  }
}
