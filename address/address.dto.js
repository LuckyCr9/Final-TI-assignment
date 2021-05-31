"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var CreateAddressDto = /** @class */ (function () {
    function CreateAddressDto() {
    }
    tslib_1.__decorate([
        class_validator_1.IsString()
    ], CreateAddressDto.prototype, "street", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString()
    ], CreateAddressDto.prototype, "city", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString()
    ], CreateAddressDto.prototype, "country", void 0);
    return CreateAddressDto;
}());
exports.default = CreateAddressDto;
function IsEmail() {
    throw new Error('Function not implemented.');
}
function IsOptional() {
    throw new Error('Function not implemented.');
}
function IsEnum(Permissions, arg1) {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=address.dto.js.map