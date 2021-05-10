import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './address.entity';
import { Repository } from 'typeorm';
import { CreateAddressesDto } from './create-addresses.dto';
import { UpdateAddressesDto } from './update-addresses.dto';

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

    const { land } = createAddressDto;
    const { region } = createAddressDto;
    const { city } = createAddressDto;
    const { postalAddress } = createAddressDto;
    const { street } = createAddressDto;
    const { propertyNumber } = createAddressDto;
    const { buildingNumber } = createAddressDto;

    const regexNumber = new RegExp('[0-9]');
    const regexPostal = /^\d{2}[\-]\d{3}$/;

    if (regexNumber.test(land)) {
      throw new HttpException(
        'Land can not contains integer value',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (regexNumber.test(region)) {
      throw new HttpException(
        'Region can not contains integer value',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (regexNumber.test(city)) {
      throw new HttpException(
        'City can not contains integer value',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!regexPostal.test(postalAddress)) {
      throw new HttpException(
        'Postal code has incorrect format',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (regexNumber.test(street)) {
      throw new HttpException(
        `Street can not contain integer value`,
        HttpStatus.BAD_REQUEST,
      );
    }

    if (parseInt(propertyNumber) < 0) {
      throw new HttpException(
        'Property number can not be negative',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (typeof propertyNumber === 'string') {
      throw new HttpException(
        'Property Number can not be a string',
        HttpStatus.CONFLICT,
      );
    }

    if (parseInt(buildingNumber) < 0) {
      throw new HttpException(
        'Building number can not be negative',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (typeof buildingNumber === 'string') {
      throw new HttpException(
        'Building Number can not be a string',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.addressRepository.save(address);
  }

  async update(id: string, updateAddressDto: UpdateAddressesDto) {
    const address = await this.addressRepository.preload({
      id: +id,
      ...updateAddressDto,
    });
    if (!address) {
      throw new NotFoundException(`Address #${id} not found`);
    }

    const {
      land,
      region,
      city,
      postalAddress,
      street,
      propertyNumber,
      buildingNumber,
    } = updateAddressDto;

    const regexNumber = new RegExp('[0-9]');
    const regexPostal = /^\d{2}[\-]\d{3}$/;

    if (regexNumber.test(land)) {
      throw new HttpException(
        'Land can not contains integer value',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (regexNumber.test(region)) {
      throw new HttpException(
        'Region can not contains integer value',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (regexNumber.test(city)) {
      throw new HttpException(
        'City can not contains integer value',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (!regexPostal.test(postalAddress)) {
      throw new HttpException(
        'Postal code has incorrect format',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (regexNumber.test(street)) {
      throw new HttpException(
        `Street can not contain integer value`,
        HttpStatus.BAD_REQUEST,
      );
    }

    if (parseInt(propertyNumber) < 0) {
      throw new HttpException(
        'Property number can not be negative',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (typeof propertyNumber === 'string') {
      throw new HttpException(
        'Property Number can not be a string',
        HttpStatus.CONFLICT,
      );
    }

    if (parseInt(buildingNumber) < 0) {
      throw new HttpException(
        'Building number can not be negative',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (typeof buildingNumber === 'string') {
      throw new HttpException(
        'Building Number can not be a string',
        HttpStatus.BAD_REQUEST,
      );
    }

    //console.log(regex.test(land));

    /*if(!isNaN(land)) {
      throw new HttpException(
        'Land can not be number',
        HttpStatus.BAD_REQUEST,
      );
    }*/

    return this.addressRepository.save(address);
  }

  async remove(id: string) {
    const address = await this.findOne(id);
    if (!address) {
      throw new NotFoundException(`Address #${id} not found`);
    }
    return this.addressRepository.remove(address);
  }
}
