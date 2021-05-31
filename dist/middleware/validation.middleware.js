"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var HttpException_1 = tslib_1.__importDefault(require("../exceptions/HttpException"));
function validationMiddleware(type, skipMissingProperties) {
    if (skipMissingProperties === void 0) { skipMissingProperties = false; }
    return function (req, res, next) {
        class_validator_1.validate(class_transformer_1.plainToClass(type, req.body), { skipMissingProperties: skipMissingProperties })
            .then(function (errors) {
            if (errors.length > 0) {
                var message = errors.map(function (error) { return Object.values(error.constraints); }).join(', ');
                next(new HttpException_1.default(400, message));
            }
            else {
                next();
            }
        });
    };
}
exports.default = validationMiddleware;
//# sourceMappingURL=validation.middleware.js.map