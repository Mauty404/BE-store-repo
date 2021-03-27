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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DictionaryController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const categories_service_1 = require("../services/categories.service");
const swagger_1 = require("@nestjs/swagger");
const producers_service_1 = require("../services/producers.service");
const products_service_1 = require("../services/products.service");
let DictionaryController = class DictionaryController {
    constructor(categoriesService, producersService, productsService) {
        this.categoriesService = categoriesService;
        this.producersService = producersService;
        this.productsService = productsService;
    }
    findAllCategories() {
        return this.categoriesService.findAll();
    }
    findAllProducers() {
        return this.producersService.findAll();
    }
    findAllProducts() {
        return this.productsService.findAll();
    }
};
__decorate([
    common_1.Get('/categories'),
    openapi.ApiResponse({ status: 200, type: [require("../entities/category.entity").Category] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DictionaryController.prototype, "findAllCategories", null);
__decorate([
    common_1.Get('/producers'),
    openapi.ApiResponse({ status: 200, type: [require("../entities/producer.entity").Producer] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DictionaryController.prototype, "findAllProducers", null);
__decorate([
    common_1.Get('/products'),
    openapi.ApiResponse({ status: 200, type: [require("../entities/product.entity").Product] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DictionaryController.prototype, "findAllProducts", null);
DictionaryController = __decorate([
    swagger_1.ApiTags('Dictionary'),
    common_1.Controller('dictionary'),
    __metadata("design:paramtypes", [categories_service_1.CategoriesService,
        producers_service_1.ProducersService,
        products_service_1.ProductsService])
], DictionaryController);
exports.DictionaryController = DictionaryController;
//# sourceMappingURL=dictionary.controller.js.map