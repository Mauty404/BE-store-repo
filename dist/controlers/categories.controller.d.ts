import { CategoriesService } from '../services/categories.service';
import { CreateCategoriesDto } from '../dto/create-categories.dto';
import { UpdateCategoriesDto } from '../dto/update-categories.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    findAll(): Promise<import("../entities/category.entity").Category[]>;
    findOne(id: string): Promise<import("../entities/category.entity").Category>;
    create(createCategoriesDto: CreateCategoriesDto): Promise<import("../entities/category.entity").Category>;
    update(id: string, updateCategoryDto: UpdateCategoriesDto): Promise<import("../entities/category.entity").Category>;
    remove(id: string): Promise<import("../entities/category.entity").Category>;
}
