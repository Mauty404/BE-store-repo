import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUsersDto } from './create-users.dto';
import { UpdateUsersDto } from './update-users.dto';

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

    const { name, surname, login, password } = createUserDto;
    const hasNumberRegex = /\d/;
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;


    if (typeof name !== 'string') {
      throw new HttpException(
        'Name must be a string',
        HttpStatus.CONFLICT,
      );
    }

    if (hasNumberRegex.test(name)) {
      throw new HttpException(
        'Name can not contains integer value',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (typeof surname !== 'string') {
      throw new HttpException(
        'Surname must be a string',
        HttpStatus.CONFLICT,
      );
    }

    if (hasNumberRegex.test(surname)) {
      throw new HttpException(
        'Surname can not contains integer value',
        HttpStatus.BAD_REQUEST,
      );
    }

    if(!passwordRegex.test(password)) {
      throw new HttpException(
        'Minimum eight characters, at least one upper case English letter, ' +
          'one lower case English letter, one number and one special character ',
        HttpStatus.FORBIDDEN,
      );
    }


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

    const { name, surname, login, password } = updateUsersDto;
    const hasNumberRegex = /\d/;
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;


    if (typeof name !== 'string') {
      throw new HttpException(
        'Name must be a string',
        HttpStatus.CONFLICT,
      );
    }

    if (hasNumberRegex.test(name)) {
      throw new HttpException(
        'Name can not contains integer value',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (typeof surname !== 'string') {
      throw new HttpException(
        'Surname must be a string',
        HttpStatus.CONFLICT,
      );
    }

    if (hasNumberRegex.test(surname)) {
      throw new HttpException(
        'Surname can not contains integer value',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (login) {
      throw new HttpException(
        'Changing login is disallowed',
        HttpStatus.FORBIDDEN,
      );
    }

    if(!passwordRegex.test(password)) {
      throw new HttpException(
        'Minimum eight characters, at least one upper case English letter, ' +
        'one lower case English letter, one number and one special character ',
        HttpStatus.FORBIDDEN,
      );
    }

    return this.userRepository.save(product);
  }

  async remove(id: string) {
    const product = await this.findOne(id);
    return this.userRepository.remove(product);
  }
}
