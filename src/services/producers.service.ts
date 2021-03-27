import { Injectable, NotFoundException } from '@nestjs/common';
import { Producer } from '../entities/producer.entity';
import { UpdateProducersDto } from '../dto/update-producers.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProducersDto } from '../dto/create-producers.dto';

@Injectable()
export class ProducersService {
  constructor(
    @InjectRepository(Producer)
    private readonly producerRepository: Repository<Producer>,
  ) {}

  findAll() {
    return this.producerRepository.find({
      relations: ['products'],
    });
  }

  async findOne(id: string) {
    const producer = await this.producerRepository.findOne(id, {
      relations: ['products'],
    });
    if (!producer) {
      throw new NotFoundException(`Producer #${id} not found`);
    }
    return producer;
  }

  create(createProducersDto: CreateProducersDto) {
    const producer = this.producerRepository.create(createProducersDto);
    return this.producerRepository.save(producer);
  }

  async update(id: string, updateProducerDto: UpdateProducersDto) {
    const producer = await this.producerRepository.preload({
      id: +id,
      ...updateProducerDto,
    });
    if (!producer) {
      throw new NotFoundException(`Producer #${id} not found`);
    }
    return this.producerRepository.save(producer);
  }

  async remove(id: string) {
    const producer = await this.findOne(id);
    return this.producerRepository.remove(producer);
  }
}
