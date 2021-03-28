import { Injectable, NotFoundException } from '@nestjs/common';
import { ShippingProvider } from '../entities/shipping.provider.entity';
import { UpdateShippingProvidersDto } from '../dto/update-shipping.providers.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShippingProvidersDto } from '../dto/create-shipping.providers.dto';

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
    return this.shippingProviderRepository.save(shippingProvider);
  }

  async remove(id: string) {
    const shippingProvider = await this.findOne(id);
    return this.shippingProviderRepository.remove(shippingProvider);
  }
}
