"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var HttpException_1 = tslib_1.__importDefault(require("./HttpException"));
var CategoryNotFoundException = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryNotFoundException, _super);
    function CategoryNotFoundException(id) {
        return _super.call(this, 404, "Category with id " + id + " not found") || this;
    }
    return CategoryNotFoundException;
}(HttpException_1.default));
exports.default = CategoryNotFoundException;
//# sourceMappingURL=CategoryNotFoundException.js.map