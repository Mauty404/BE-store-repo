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
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'K788khzwtf#',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
