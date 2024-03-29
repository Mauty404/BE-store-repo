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
exports.CreateProductsDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const producer_entity_1 = require("../entities/producer.entity");
const category_entity_1 = require("../entities/category.entity");
class CreateProductsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, factoryName: { required: true, type: () => String }, producer: { required: true, type: () => require("../entities/producer.entity").Producer }, category: { required: true, type: () => require("../entities/category.entity").Category }, shortDescription: { required: true, type: () => String }, price: { required: true, type: () => Number }, quantity: { required: true, type: () => Number }, imageSource: { required: true, type: () => String } };
    }
}
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateProductsDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateProductsDto.prototype, "factoryName", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", producer_entity_1.Producer)
], CreateProductsDto.prototype, "producer", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", category_entity_1.Category)
], CreateProductsDto.prototype, "category", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateProductsDto.prototype, "shortDescription", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateProductsDto.prototype, "price", void 0);
__decorate([
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateProductsDto.prototype, "quantity", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateProductsDto.prototype, "imageSource", void 0);
exports.CreateProductsDto = CreateProductsDto;
//# sourceMappingURL=create-products.dto.js.map