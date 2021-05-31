"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var address_entity_1 = tslib_1.__importDefault(require("../address/address.entity"));
var post_entity_1 = tslib_1.__importDefault(require("../post/post.entity"));
var User = /** @class */ (function () {
    function User() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], User.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column()
    ], User.prototype, "fullName", void 0);
    tslib_1.__decorate([
        typeorm_1.Column()
    ], User.prototype, "email", void 0);
    tslib_1.__decorate([
        typeorm_1.Column()
    ], User.prototype, "password", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToOne(function () { return address_entity_1.default; }, function (address) { return address.user; }, {
            cascade: true,
            eager: true,
        }),
        typeorm_1.JoinColumn()
    ], User.prototype, "address", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function () { return post_entity_1.default; }, function (post) { return post.author; })
    ], User.prototype, "posts", void 0);
    User = tslib_1.__decorate([
        typeorm_1.Entity()
    ], User);
    return User;
}());
exports.default = User;
//# sourceMappingURL=user.entity.js.map