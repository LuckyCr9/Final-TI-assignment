"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var HttpException_1 = tslib_1.__importDefault(require("./HttpException"));
var AuthenticationTokenMissingException = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationTokenMissingException, _super);
    function AuthenticationTokenMissingException() {
        return _super.call(this, 401, 'Authentication token missing') || this;
    }
    return AuthenticationTokenMissingException;
}(HttpException_1.default));
exports.default = AuthenticationTokenMissingException;
//# sourceMappingURL=AuthenticationTokenMissingException.js.map