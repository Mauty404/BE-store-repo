import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from '../entities/address.entity';
import { Repository } from 'typeorm';
import { CreateAddressesDto } from '../dto/create-addresses.dto';
import { UpdateAddressesDto } from '../dto/update-addresses.dto';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ) {}

  findAll() {
    return this.addressRepository.find({
      relations: ['users', 'orders'],
    });
  }

  async findOne(id: string) {
    const address = await this.addressRepository.findOne(id, {
      relations: ['users', 'orders'],
    });
    if (!address) {
      throw new NotFoundException(`Address #${id} not found`);
    }
    return address;
  }

  create(createAddressDto: CreateAddressesDto) {
    const address = this.addressRepository.create(createAddressDto);
    return this.addressRepository.save(address);
  }

  async update(id: string, updateAddressDto: UpdateAddressesDto) {
    const address = await this.addressRepository.preload({
      id: +id,
      ...updateAddressDto,
    });
    if (!address) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return this.addressRepository.save(address);
  }

  async remove(id: string) {
    const address = await this.findOne(id);
    return this.addressRepository.remove(address);
  }
}
