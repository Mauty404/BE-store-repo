"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const categories_module_1 = require("./modules/categories.module");
const typeorm_1 = require("@nestjs/typeorm");
const producers_module_1 = require("./modules/producers.module");
const products_module_1 = require("./modules/products.module");
const dictionary_module_1 = require("./modules/dictionary.module");
const shipping_providers_module_1 = require("./modules/shipping.providers.module");
const users_module_1 = require("./modules/users.module");
const addresses_module_1 = require("./modules/addresses.module");
const orders_module_1 = require("./modules/orders.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            categories_module_1.CategoriesModule,
            producers_module_1.ProducersModule,
            products_module_1.ProductsModule,
            shipping_providers_module_1.ShippingProvidersModule,
            dictionary_module_1.DictionaryModule,
            users_module_1.UsersModule,
            addresses_module_1.AddressesModule,
            orders_module_1.OrdersModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'xx2BcD399',
                database: 'postgres',
                autoLoadEntities: true,
                synchronize: true,
            }),
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map