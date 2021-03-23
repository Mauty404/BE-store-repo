import { Producer } from '../entities/producer.entity';
import { UpdateProducersDto } from '../dto/update-producers.dto';
import { Repository } from 'typeorm';
import { CreateProducersDto } from '../dto/create-producers.dto';
export declare class ProducersService {
    private readonly producerRepository;
    constructor(producerRepository: Repository<Producer>);
    findAll(): Promise<Producer[]>;
    findOne(id: string): Promise<Producer>;
    create(createProducersDto: CreateProducersDto): Promise<Producer>;
    update(id: string, updateProducerDto: UpdateProducersDto): Promise<Producer>;
    remove(id: string): Promise<Producer>;
}
