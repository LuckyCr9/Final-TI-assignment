"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var HttpException_1 = tslib_1.__importDefault(require("./HttpException"));
var UserWithThatEmailAlreadyExistsException = /** @class */ (function (_super) {
    tslib_1.__extends(UserWithThatEmailAlreadyExistsException, _super);
    function UserWithThatEmailAlreadyExistsException(email) {
        return _super.call(this, 400, "User with email " + email + " already exists") || this;
    }
    return UserWithThatEmailAlreadyExistsException;
}(HttpException_1.default));
exports.default = UserWithThatEmailAlreadyExistsException;
//# sourceMappingURL=UserWithThatEmailAlreadyExistsException.js.map