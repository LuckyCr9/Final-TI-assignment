"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var CreateCategoryDto = /** @class */ (function () {
    function CreateCategoryDto() {
    }
    tslib_1.__decorate([
        class_validator_1.IsString()
    ], CreateCategoryDto.prototype, "name", void 0);
    return CreateCategoryDto;
}());
exports.default = CreateCategoryDto;
//# sourceMappingURL=category.dto.js.map