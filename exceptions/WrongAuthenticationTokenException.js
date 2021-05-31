"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var HttpException_1 = tslib_1.__importDefault(require("./HttpException"));
var WrongAuthenticationTokenException = /** @class */ (function (_super) {
    tslib_1.__extends(WrongAuthenticationTokenException, _super);
    function WrongAuthenticationTokenException() {
        return _super.call(this, 401, 'Wrong authentication token') || this;
    }
    return WrongAuthenticationTokenException;
}(HttpException_1.default));
exports.default = WrongAuthenticationTokenException;
//# sourceMappingURL=WrongAuthenticationTokenException.js.map