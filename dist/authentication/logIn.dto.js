"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var LogInDto = /** @class */ (function () {
    function LogInDto() {
    }
    tslib_1.__decorate([
        class_validator_1.IsString()
    ], LogInDto.prototype, "email", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString()
    ], LogInDto.prototype, "password", void 0);
    return LogInDto;
}());
exports.default = LogInDto;
//# sourceMappingURL=logIn.dto.js.map