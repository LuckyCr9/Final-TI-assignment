"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var HttpException_1 = tslib_1.__importDefault(require("./HttpException"));
var PostNotFoundException = /** @class */ (function (_super) {
    tslib_1.__extends(PostNotFoundException, _super);
    function PostNotFoundException(id) {
        return _super.call(this, 404, "Post with id " + id + " not found") || this;
    }
    return PostNotFoundException;
}(HttpException_1.default));
exports.default = PostNotFoundException;
//# sourceMappingURL=PostNotFoundException.js.map