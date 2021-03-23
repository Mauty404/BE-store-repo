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
exports.Product = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const producer_entity_1 = require("./producer.entity");
const category_entity_1 = require("./category.entity");
let Product = class Product {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, factory_name: { required: true, type: () => String }, producer_id: { required: true, type: () => require("./producer.entity").Producer }, category_id: { required: true, type: () => require("./category.entity").Category }, short_description: { required: true, type: () => String }, price: { required: true, type: () => Number }, quantity: { required: true, type: () => Number }, image_source: { required: true, type: () => String } };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    __metadata("design:type", String)
], Product.prototype, "factory_name", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => producer_entity_1.Producer, (producer) => producer.id),
    __metadata("design:type", producer_entity_1.Producer)
], Product.prototype, "producer_id", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => category_entity_1.Category, (category) => category.id),
    __metadata("design:type", category_entity_1.Category)
], Product.prototype, "category_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Product.prototype, "short_description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "quantity", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Product.prototype, "image_source", void 0);
Product = __decorate([
    typeorm_1.Entity('Products')
], Product);
exports.Product = Product;
//# sourceMappingURL=product.entity.js.map