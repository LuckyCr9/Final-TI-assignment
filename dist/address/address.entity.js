"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var user_entity_1 = tslib_1.__importDefault(require("../user/user.entity"));
var Address = /** @class */ (function () {
    function Address() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Address.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.Column()
    ], Address.prototype, "street", void 0);
    tslib_1.__decorate([
        typeorm_1.Column()
    ], Address.prototype, "city", void 0);
    tslib_1.__decorate([
        typeorm_1.Column()
    ], Address.prototype, "country", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToOne(function () { return user_entity_1.default; }, function (user) { return user.address; })
    ], Address.prototype, "user", void 0);
    Address = tslib_1.__decorate([
        typeorm_1.Entity()
    ], Address);
    return Address;
}());
exports.default = Address;
//# sourceMappingURL=address.entity.js.map