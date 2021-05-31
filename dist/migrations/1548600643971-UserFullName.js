"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFullName1548600643971 = void 0;
var tslib_1 = require("tslib");
var UserFullName1548600643971 = /** @class */ (function () {
    function UserFullName1548600643971() {
    }
    UserFullName1548600643971.prototype.up = function (queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.renameColumn('user', 'name', 'fullName')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserFullName1548600643971.prototype.down = function (queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.renameColumn('user', 'fullName', 'name')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return UserFullName1548600643971;
}());
exports.UserFullName1548600643971 = UserFullName1548600643971;
//# sourceMappingURL=1548600643971-UserFullName.js.map