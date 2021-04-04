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
const swagger_1 = require("@nestjs/swagger");
const categories_service_1 = require("../services/categories.service");
const producers_service_1 = require("../services/producers.service");
const products_service_1 = require("../services/products.service");
const users_service_1 = require("../services/users.service");
const addresses_service_1 = require("../services/addresses.service");
const orders_service_1 = require("../services/orders.service");
const shipping_providers_service_1 = require("../services/shipping.providers.service");
let DictionaryController = class DictionaryController {
    constructor(categoriesService, producersService, productsService, usersService, addressesService, shippingProvidersService, ordersService) {
        this.categoriesService = categoriesService;
        this.producersService = producersService;
        this.productsService = productsService;
        this.usersService = usersService;
        this.addressesService = addressesService;
        this.shippingProvidersService = shippingProvidersService;
        this.ordersService = ordersService;
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
    findAllUsers() {
        return this.usersService.findAll();
    }
    findAllAddresses() {
        return this.addressesService.findAll();
    }
    findAllShippingProviders() {
        return this.shippingProvidersService.findAll();
    }
    findAllOrders() {
        return this.ordersService.findAll();
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
__decorate([
    common_1.Get('/users'),
    openapi.ApiResponse({ status: 200, type: [require("../entities/user.entity").User] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DictionaryController.prototype, "findAllUsers", null);
__decorate([
    common_1.Get('/addresses'),
    openapi.ApiResponse({ status: 200, type: [require("../entities/address.entity").Address] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DictionaryController.prototype, "findAllAddresses", null);
__decorate([
    common_1.Get('/shippingProviders'),
    openapi.ApiResponse({ status: 200, type: [require("../entities/shipping.provider.entity").ShippingProvider] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DictionaryController.prototype, "findAllShippingProviders", null);
__decorate([
    common_1.Get('/orders'),
    openapi.ApiResponse({ status: 200, type: [require("../entities/orders.entity").Order] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DictionaryController.prototype, "findAllOrders", null);
DictionaryController = __decorate([
    swagger_1.ApiTags('Dictionary'),
    common_1.Controller('dictionary'),
    __metadata("design:paramtypes", [categories_service_1.CategoriesService,
        producers_service_1.ProducersService,
        products_service_1.ProductsService,
        users_service_1.UsersService,
        addresses_service_1.AddressesService,
        shipping_providers_service_1.ShippingProvidersService,
        orders_service_1.OrdersService])
], DictionaryController);
exports.DictionaryController = DictionaryController;
//# sourceMappingURL=dictionary.controller.js.map