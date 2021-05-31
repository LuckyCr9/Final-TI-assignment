"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var CreateUserDto = /** @class */ (function () {
    function CreateUserDto() {
    }
    tslib_1.__decorate([
        class_validator_1.IsString()
    ], CreateUserDto.prototype, "fullName", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString()
    ], CreateUserDto.prototype, "email", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString()
    ], CreateUserDto.prototype, "password", void 0);
    tslib_1.__decorate([
        class_validator_1.IsOptional(),
        class_validator_1.ValidateNested()
    ], CreateUserDto.prototype, "address", void 0);
    return CreateUserDto;
}());
exports.default = CreateUserDto;
//# sourceMappingURL=user.dto.js.map