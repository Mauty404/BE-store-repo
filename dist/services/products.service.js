"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const product_entity_1 = require("../entities/product.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("../entities/category.entity");
let ProductsService = class ProductsService {
    constructor(productRepository, categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }
    findAll() {
        return this.productRepository.find({
            relations: ['orders'],
        });
    }
    async findOne(id) {
        const product = await this.productRepository.findOne(id, {
            relations: ['orders'],
        });
        if (!product) {
            throw new common_1.NotFoundException(`Product #${id} not found`);
        }
        return product;
    }
    async findByCategory(categoryId) {
        const category = await this.categoryRepository.findOne(categoryId, {
            relations: ['products'],
        });
        if (!category) {
            throw new common_1.NotFoundException(`Category #${categoryId} not found`);
        }
        return category.products;
    }
    create(createProductsDto) {
        const product = this.productRepository.create(createProductsDto);
        return this.productRepository.save(product);
    }
    async update(id, updateProductDto) {
        const product = await this.productRepository.preload(Object.assign({ id: +id }, updateProductDto));
        if (!product) {
            throw new common_1.NotFoundException(`Product #${id} not found`);
        }
        return this.productRepository.save(product);
    }
    async remove(id) {
        const product = await this.findOne(id);
        return this.productRepository.remove(product);
    }
};
ProductsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(product_entity_1.Product)),
    __param(1, typeorm_1.InjectRepository(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map