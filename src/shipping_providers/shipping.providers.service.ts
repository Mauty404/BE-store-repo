import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ShippingProvider } from './shipping.provider.entity';
import { UpdateShippingProvidersDto } from './update-shipping.providers.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShippingProvidersDto } from './create-shipping.providers.dto';

@Injectable()
export class ShippingProvidersService {
  constructor(
    @InjectRepository(ShippingProvider)
    private readonly shippingProviderRepository: Repository<ShippingProvider>,
  ) {}

  findAll() {
    return this.shippingProviderRepository.find({
      relations: ['orders'],
    });
  }

  async findOne(id: string) {
    const shippingProvider = await this.shippingProviderRepository.findOne(id, {
      relations: ['orders'],
    });
    if (!shippingProvider) {
      throw new NotFoundException(`Shipping provider #${id} not found`);
    }
    return shippingProvider;
  }

  create(createShippingProvidersDto: CreateShippingProvidersDto) {
    const shippingProvider = this.shippingProviderRepository.create(
      createShippingProvidersDto,
    );

    const { name, price } = createShippingProvidersDto;


    if (typeof name !== 'string') {
      throw new HttpException('Name must be a string', HttpStatus.CONFLICT);
    }

    if (typeof price === 'string') {
      throw new HttpException('Price can not be a string', HttpStatus.CONFLICT);
    }

    if (price < 0) {
      throw new HttpException(
        'Price can not be negative value',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.shippingProviderRepository.save(shippingProvider);
  }

  async update(
    id: string,
    updateShippingProvidersDto: UpdateShippingProvidersDto,
  ) {
    const shippingProvider = await this.shippingProviderRepository.preload({
      id: +id,
      ...updateShippingProvidersDto,
    });
    if (!shippingProvider) {
      throw new NotFoundException(`Shipping provider #${id} not found`);
    }

    const { name } = updateShippingProvidersDto;
    const { price } = updateShippingProvidersDto;

    if (typeof name !== 'string') {
      throw new HttpException('Name must be a string', HttpStatus.CONFLICT);
    }

    if (typeof price === 'string') {
      throw new HttpException('Price can not be a string', HttpStatus.CONFLICT);
    }

    if (price < 0) {
      throw new HttpException(
        'Price can not be negative value',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.shippingProviderRepository.save(shippingProvider);
  }

  async remove(id: string) {
    const shippingProvider = await this.findOne(id);
    return this.shippingProviderRepository.remove(shippingProvider);
  }
}
