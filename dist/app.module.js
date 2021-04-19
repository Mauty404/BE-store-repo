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
const categories_module_1 = require("./categories/categories.module");
const typeorm_1 = require("@nestjs/typeorm");
const producers_module_1 = require("./producers/producers.module");
const products_module_1 = require("./products/products.module");
const shipping_providers_module_1 = require("./shipping_providers/shipping.providers.module");
const users_module_1 = require("./users/users.module");
const addresses_module_1 = require("./addresses/addresses.module");
const orders_module_1 = require("./orders/orders.module");
const file_upload_module_1 = require("./file_upload/file.upload.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            categories_module_1.CategoriesModule,
            producers_module_1.ProducersModule,
            products_module_1.ProductsModule,
            shipping_providers_module_1.ShippingProvidersModule,
            users_module_1.UsersModule,
            addresses_module_1.AddressesModule,
            orders_module_1.OrdersModule,
            file_upload_module_1.FileUploadModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'electronicsstoredb.cyg48ow7yrwx.eu-west-3.rds.amazonaws.com',
                port: 5432,
                username: 'postgresstore',
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