"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var HttpException_1 = tslib_1.__importDefault(require("./HttpException"));
var WrongCredentialsException = /** @class */ (function (_super) {
    tslib_1.__extends(WrongCredentialsException, _super);
    function WrongCredentialsException() {
        return _super.call(this, 401, 'Wrong credentials provided') || this;
    }
    return WrongCredentialsException;
}(HttpException_1.default));
exports.default = WrongCredentialsException;
//# sourceMappingURL=WrongCredentialsException.js.map