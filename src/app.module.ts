import { Module } from '@nestjs/common';
import { CategoriesModule } from './modules/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducersModule } from './modules/producers.module';
import { ProductsModule } from './modules/products.module';
import { DictionaryModule } from './modules/dictionary.module';
import { ShippingProvidersModule } from './modules/shipping.providers.module';
import { UsersModule } from './modules/users.module';
import { AddressesModule } from './modules/addresses.module';
import { OrdersModule } from './modules/orders.module';

@Module({
  imports: [
    CategoriesModule,
    ProducersModule,
    ProductsModule,
    ShippingProvidersModule,
    DictionaryModule,
    UsersModule,
    AddressesModule,
    OrdersModule,
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
  providers: [],
})
export class AppModule {}
