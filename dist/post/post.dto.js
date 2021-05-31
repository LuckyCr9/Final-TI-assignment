"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var CategoryInPostDto = /** @class */ (function () {
    function CategoryInPostDto() {
    }
    tslib_1.__decorate([
        class_validator_1.IsNumber()
    ], CategoryInPostDto.prototype, "id", void 0);
    return CategoryInPostDto;
}());
var CreatePostDto = /** @class */ (function () {
    function CreatePostDto() {
    }
    tslib_1.__decorate([
        class_validator_1.IsString()
    ], CreatePostDto.prototype, "content", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString()
    ], CreatePostDto.prototype, "title", void 0);
    tslib_1.__decorate([
        class_validator_1.ValidateNested()
    ], CreatePostDto.prototype, "categories", void 0);
    return CreatePostDto;
}());
exports.default = CreatePostDto;
//# sourceMappingURL=post.dto.js.map