"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoriesDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_categories_dto_1 = require("./create-categories.dto");
class UpdateCategoriesDto extends swagger_1.PartialType(create_categories_dto_1.CreateCategoriesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateCategoriesDto = UpdateCategoriesDto;
//# sourceMappingURL=update-categories.dto.js.map