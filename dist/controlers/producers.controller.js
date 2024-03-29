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
exports.ProducersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const producers_service_1 = require("../services/producers.service");
const create_producers_dto_1 = require("../dto/create-producers.dto");
const update_producers_dto_1 = require("../dto/update-producers.dto");
const swagger_1 = require("@nestjs/swagger");
let ProducersController = class ProducersController {
    constructor(producersService) {
        this.producersService = producersService;
    }
    findAll() {
        return this.producersService.findAll();
    }
    findOne(id) {
        return this.producersService.findOne(id);
    }
    create(createProducersDto) {
        return this.producersService.create(createProducersDto);
    }
    update(id, updateProducersDto) {
        return this.producersService.update(id, updateProducersDto);
    }
    remove(id) {
        return this.producersService.remove(id);
    }
};
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: [require("../entities/producer.entity").Producer] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProducersController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    openapi.ApiResponse({ status: 200, type: require("../entities/producer.entity").Producer }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProducersController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("../entities/producer.entity").Producer }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_producers_dto_1.CreateProducersDto]),
    __metadata("design:returntype", void 0)
], ProducersController.prototype, "create", null);
__decorate([
    common_1.Patch(':id'),
    openapi.ApiResponse({ status: 200, type: require("../entities/producer.entity").Producer }),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_producers_dto_1.UpdateProducersDto]),
    __metadata("design:returntype", void 0)
], ProducersController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200, type: require("../entities/producer.entity").Producer }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProducersController.prototype, "remove", null);
ProducersController = __decorate([
    swagger_1.ApiTags('Producers'),
    common_1.Controller('producers'),
    __metadata("design:paramtypes", [producers_service_1.ProducersService])
], ProducersController);
exports.ProducersController = ProducersController;
//# sourceMappingURL=producers.controller.js.map