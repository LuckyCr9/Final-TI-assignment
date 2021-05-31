"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var category_entity_1 = tslib_1.__importDefault(require("../category/category.entity"));
var user_entity_1 = tslib_1.__importDefault(require("../user/user.entity"));
var Post = /** @class */ (function () {
    function Post() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Post.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column()
    ], Post.prototype, "title", void 0);
    tslib_1.__decorate([
        typeorm_1.Column()
    ], Post.prototype, "content", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.default; }, function (author) { return author.posts; })
    ], Post.prototype, "author", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToMany(function () { return category_entity_1.default; }, function (category) { return category.posts; }),
        typeorm_1.JoinTable()
    ], Post.prototype, "categories", void 0);
    Post = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Post);
    return Post;
}());
exports.default = Post;
//# sourceMappingURL=post.entity.js.map