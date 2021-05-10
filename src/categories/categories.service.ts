import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Category } from './category.entity';
import { UpdateCategoriesDto } from './update-categories.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoriesDto } from './create-categories.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  findAll() {
    return this.categoryRepository.find({
      relations: ['products'],
    });
  }

  async findOne(id: string) {
    const category = await this.categoryRepository.findOne(id, {
      relations: ['products'],
    });
    if (!category) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return category;
  }

  create(createCategoriesDto: CreateCategoriesDto) {
    const category = this.categoryRepository.create(createCategoriesDto);

    const { name } = createCategoriesDto;
    const regexNumber = new RegExp('[0-9]');

    if (regexNumber.test(name)) {
      throw new HttpException(
        'Name can not contains integer value',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.categoryRepository.save(category);
  }

  async update(id: string, updateCategoryDto: UpdateCategoriesDto) {
    const category = await this.categoryRepository.preload({
      id: +id,
      ...updateCategoryDto,
    });
    if (!category) {
      throw new NotFoundException(`Category #${id} not found`);
    }

    const { name } = updateCategoryDto;
    const regexNumber = new RegExp('[0-9]');

    if (regexNumber.test(name)) {
      throw new HttpException(
        'Name can not contains integer value',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.categoryRepository.save(category);
  }

  async remove(id: string) {
    const category = await this.findOne(id);
    return this.categoryRepository.remove(category);
  }
}
