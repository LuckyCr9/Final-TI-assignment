"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var HttpException = /** @class */ (function (_super) {
    tslib_1.__extends(HttpException, _super);
    function HttpException(status, message) {
        var _this = _super.call(this, message) || this;
        _this.status = status;
        _this.message = message;
        return _this;
    }
    return HttpException;
}(Error));
exports.default = HttpException;
//# sourceMappingURL=HttpException.js.map