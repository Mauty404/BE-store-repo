import { Module } from '@nestjs/common';
import { CategoriesController } from './controlers/categories.controller';
import { CategoriesService } from './services/categories.service';
import { CategoriesModule } from './modules/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducersModule } from './modules/producers.module';
import { ProductsModule } from './modules/products.module';

@Module({
  imports: [
    CategoriesModule,
    ProducersModule,
    ProductsModule,
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
