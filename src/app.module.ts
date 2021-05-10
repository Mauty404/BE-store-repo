import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducersModule } from './producers/producers.module';
import { ProductsModule } from './products/products.module';
import { ShippingProvidersModule } from './shipping_providers/shipping.providers.module';
import { UsersModule } from './users/users.module';
import { AddressesModule } from './addresses/addresses.module';
import { OrdersModule } from './orders/orders.module';
import { FileUploadModule } from './file_upload/file.upload.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './shared/http-error.filter';

@Module({
  imports: [
    CategoriesModule,
    ProducersModule,
    ProductsModule,
    ShippingProvidersModule,
    UsersModule,
    AddressesModule,
    OrdersModule,
    FileUploadModule,
    TypeOrmModule.forRoot({
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
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
  ],
})
export class AppModule {}
