"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var bcrypt = tslib_1.__importStar(require("bcrypt"));
var jwt = tslib_1.__importStar(require("jsonwebtoken"));
var typeorm_1 = require("typeorm");
var UserWithThatEmailAlreadyExistsException_1 = tslib_1.__importDefault(require("../exceptions/UserWithThatEmailAlreadyExistsException"));
var user_entity_1 = tslib_1.__importDefault(require("../user/user.entity"));
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService() {
        this.userRepository = typeorm_1.getRepository(user_entity_1.default);
    }
    AuthenticationService.prototype.register = function (userData) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var hashedPassword, user, tokenData, cookie;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({ email: userData.email })];
                    case 1:
                        if (_a.sent()) {
                            throw new UserWithThatEmailAlreadyExistsException_1.default(userData.email);
                        }
                        return [4 /*yield*/, bcrypt.hash(userData.password, 10)];
                    case 2:
                        hashedPassword = _a.sent();
                        user = this.userRepository.create(tslib_1.__assign(tslib_1.__assign({}, userData), { password: hashedPassword }));
                        return [4 /*yield*/, this.userRepository.save(user)];
                    case 3:
                        _a.sent();
                        user.password = undefined;
                        tokenData = this.createToken(user);
                        cookie = this.createCookie(tokenData);
                        return [2 /*return*/, {
                                cookie: cookie,
                                user: user,
                            }];
                }
            });
        });
    };
    AuthenticationService.prototype.createCookie = function (tokenData) {
        return "Authorization=" + tokenData.token + "; HttpOnly; Max-Age=" + tokenData.expiresIn;
    };
    AuthenticationService.prototype.createToken = function (user) {
        var expiresIn = 60 * 60; // an hour
        var secret = process.env.JWT_SECRET;
        var dataStoredInToken = {
            id: user.id,
        };
        return {
            expiresIn: expiresIn,
            token: jwt.sign(dataStoredInToken, secret, { expiresIn: expiresIn }),
        };
    };
    return AuthenticationService;
}());
exports.default = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map