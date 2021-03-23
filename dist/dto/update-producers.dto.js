"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProducersDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_producers_dto_1 = require("./create-producers.dto");
class UpdateProducersDto extends swagger_1.PartialType(create_producers_dto_1.CreateProducersDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateProducersDto = UpdateProducersDto;
//# sourceMappingURL=update-producers.dto.js.map