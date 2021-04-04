import { CategoriesService } from '../services/categories.service';
import { ProducersService } from '../services/producers.service';
import { ProductsService } from '../services/products.service';
import { UsersService } from '../services/users.service';
import { AddressesService } from '../services/addresses.service';
import { OrdersService } from '../services/orders.service';
import { ShippingProvidersService } from '../services/shipping.providers.service';
export declare class DictionaryController {
    private readonly categoriesService;
    private readonly producersService;
    private readonly productsService;
    private readonly usersService;
    private readonly addressesService;
    private readonly shippingProvidersService;
    private readonly ordersService;
    constructor(categoriesService: CategoriesService, producersService: ProducersService, productsService: ProductsService, usersService: UsersService, addressesService: AddressesService, shippingProvidersService: ShippingProvidersService, ordersService: OrdersService);
    findAllCategories(): Promise<import("../entities/category.entity").Category[]>;
    findAllProducers(): Promise<import("../entities/producer.entity").Producer[]>;
    findAllProducts(): Promise<import("../entities/product.entity").Product[]>;
    findAllUsers(): Promise<import("../entities/user.entity").User[]>;
    findAllAddresses(): Promise<import("../entities/address.entity").Address[]>;
    findAllShippingProviders(): Promise<import("../entities/shipping.provider.entity").ShippingProvider[]>;
    findAllOrders(): Promise<import("../entities/orders.entity").Order[]>;
}
