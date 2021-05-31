"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var post_entity_1 = tslib_1.__importDefault(require("../post/post.entity"));
var Category = /** @class */ (function () {
    function Category() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Category.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column()
    ], Category.prototype, "name", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToMany(function () { return post_entity_1.default; }, function (post) { return post.categories; })
    ], Category.prototype, "posts", void 0);
    Category = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Category);
    return Category;
}());
exports.default = Category;
//# sourceMappingURL=category.entity.js.map