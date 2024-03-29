"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const common_1 = require("@nestjs/common");
const products_controller_1 = require("../controlers/products.controller");
const products_service_1 = require("../services/products.service");
const typeorm_1 = require("@nestjs/typeorm");
const producer_entity_1 = require("../entities/producer.entity");
const product_entity_1 = require("../entities/product.entity");
const category_entity_1 = require("../entities/category.entity");
const orders_entity_1 = require("../entities/orders.entity");
let ProductsModule = class ProductsModule {
};
ProductsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([producer_entity_1.Producer, category_entity_1.Category, product_entity_1.Product, orders_entity_1.Order])],
        controllers: [products_controller_1.ProductsController],
        providers: [products_service_1.ProductsService],
    })
], ProductsModule);
exports.ProductsModule = ProductsModule;
//# sourceMappingURL=products.module.js.map