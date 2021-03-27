import { Module } from '@nestjs/common';
import { CategoriesModule } from './modules/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducersModule } from './modules/producers.module';
import { ProductsModule } from './modules/products.module';
import { DictionaryModule } from './modules/dictionary.module';
import { ShippingProvidersModule } from './modules/shipping.providers.module';

@Module({
  imports: [
    CategoriesModule,
    ProducersModule,
    ProductsModule,
    ShippingProvidersModule,
    DictionaryModule,
    TypeOrmModule.forRoot({
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
export class AppModule {}
