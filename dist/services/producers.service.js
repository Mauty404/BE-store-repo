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
exports.ProducersService = void 0;
const common_1 = require("@nestjs/common");
const producer_entity_1 = require("../entities/producer.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ProducersService = class ProducersService {
    constructor(producerRepository) {
        this.producerRepository = producerRepository;
    }
    findAll() {
        return this.producerRepository.find({
            relations: ['products'],
        });
    }
    async findOne(id) {
        const producer = await this.producerRepository.findOne(id, {
            relations: ['products'],
        });
        if (!producer) {
            throw new common_1.NotFoundException(`Producer #${id} not found`);
        }
        return producer;
    }
    create(createProducersDto) {
        const producer = this.producerRepository.create(createProducersDto);
        return this.producerRepository.save(producer);
    }
    async update(id, updateProducerDto) {
        const producer = await this.producerRepository.preload(Object.assign({ id: +id }, updateProducerDto));
        if (!producer) {
            throw new common_1.NotFoundException(`Producer #${id} not found`);
        }
        return this.producerRepository.save(producer);
    }
    async remove(id) {
        const producer = await this.findOne(id);
        return this.producerRepository.remove(producer);
    }
};
ProducersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(producer_entity_1.Producer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProducersService);
exports.ProducersService = ProducersService;
//# sourceMappingURL=producers.service.js.map