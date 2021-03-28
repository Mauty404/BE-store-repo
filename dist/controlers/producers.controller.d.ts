import { ProducersService } from '../services/producers.service';
import { CreateProducersDto } from '../dto/create-producers.dto';
import { UpdateProducersDto } from '../dto/update-producers.dto';
export declare class ProducersController {
    private readonly producersService;
    constructor(producersService: ProducersService);
    findAll(): Promise<import("../entities/producer.entity").Producer[]>;
    findOne(id: string): Promise<import("../entities/producer.entity").Producer>;
    create(createProducersDto: CreateProducersDto): Promise<import("../entities/producer.entity").Producer>;
    update(id: string, updateProducersDto: UpdateProducersDto): Promise<import("../entities/producer.entity").Producer>;
    remove(id: string): Promise<import("../entities/producer.entity").Producer>;
}
