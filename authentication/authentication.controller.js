"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express = tslib_1.__importStar(require("express"));
var validation_middleware_1 = tslib_1.__importDefault(require("../middleware/validation.middleware"));
var user_dto_1 = tslib_1.__importDefault(require("../user/user.dto"));
var authentication_service_1 = tslib_1.__importDefault(require("./authentication.service"));
var AuthenticationController = /** @class */ (function () {
    function AuthenticationController() {
        var _this = this;
        this.path = '/auth';
        this.router = express.Router();
        this.authenticationService = new authentication_service_1.default();
        this.registration = function (request, response, next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var userData, _a, cookie, user, error_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userData = request.body;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.authenticationService.register(userData)];
                    case 2:
                        _a = _b.sent(), cookie = _a.cookie, user = _a.user;
                        response.setHeader('Set-Cookie', [cookie]);
                        response.send(user);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        next(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.initializeRoutes();
    }
    AuthenticationController.prototype.initializeRoutes = function () {
        this.router.post(this.path + "/register", validation_middleware_1.default(user_dto_1.default), this.registration);
    };
    return AuthenticationController;
}());
exports.default = AuthenticationController;
//# sourceMappingURL=authentication.controller.js.map