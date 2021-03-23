import { Category } from '../entities/category.entity';
import { UpdateCategoriesDto } from '../dto/update-categories.dto';
import { Repository } from 'typeorm';
import { CreateCategoriesDto } from '../dto/create-categories.dto';
export declare class CategoriesService {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    findAll(): Promise<Category[]>;
    findOne(id: string): Promise<Category>;
    create(createCategoriesDto: CreateCategoriesDto): Promise<Category>;
    update(id: string, updateCategoryDto: UpdateCategoriesDto): Promise<Category>;
    remove(id: string): Promise<Category>;
}
