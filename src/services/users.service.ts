import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUsersDto } from '../dto/create-users.dto';
import { UpdateUsersDto } from '../dto/update-users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find({
      relations: ['orders'],
    });
  }

  async findOne(id: string) {
    const product = await this.userRepository.findOne(id, {
      relations: ['orders'],
    });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(createUserDto: CreateUsersDto) {
    const product = this.userRepository.create(createUserDto);
    return this.userRepository.save(product);
  }

  async update(id: string, updateUsersDto: UpdateUsersDto) {
    const product = await this.userRepository.preload({
      id: +id,
      ...updateUsersDto,
    });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return this.userRepository.save(product);
  }

  async remove(id: string) {
    const product = await this.findOne(id);
    return this.userRepository.remove(product);
  }
}
