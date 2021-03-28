import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddressesService } from '../services/addresses.service';
import { CreateAddressesDto } from '../dto/create-addresses.dto';
import { UpdateAddressesDto } from '../dto/update-addresses.dto';

@ApiTags('Addresses')
@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}
  @Get()
  findAll() {
    return this.addressesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressesService.findOne(id);
  }

  @Post()
  create(@Body() createAddressesDto: CreateAddressesDto) {
    return this.addressesService.create(createAddressesDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAddressesDto: UpdateAddressesDto,
  ) {
    return this.addressesService.update(id, updateAddressesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressesService.remove(id);
  }
}
