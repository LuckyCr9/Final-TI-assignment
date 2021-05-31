"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var typeorm = tslib_1.__importStar(require("typeorm"));
var UserWithThatEmailAlreadyExistsException_1 = tslib_1.__importDefault(require("../../exceptions/UserWithThatEmailAlreadyExistsException"));
var authentication_service_1 = tslib_1.__importDefault(require("../authentication.service"));
typeorm.getRepository = jest.fn();
describe('The AuthenticationService', function () {
    describe('when creating a cookie', function () {
        it('should return a string', function () {
            var tokenData = {
                token: '',
                expiresIn: 1,
            };
            typeorm.getRepository.mockReturnValue({});
            var authenticationService = new authentication_service_1.default();
            expect(typeof authenticationService.createCookie(tokenData))
                .toEqual('string');
        });
    });
    describe('when registering a user', function () {
        describe('if the email is already taken', function () {
            it('should throw an error', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
                var userData, authenticationService;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            userData = {
                                fullName: 'John Smith',
                                email: 'john@smith.com',
                                password: 'strongPassword123',
                            };
                            typeorm.getRepository.mockReturnValue({
                                findOne: function () { return Promise.resolve(userData); },
                            });
                            authenticationService = new authentication_service_1.default();
                            return [4 /*yield*/, expect(authenticationService.register(userData))
                                    .rejects.toMatchObject(new UserWithThatEmailAlreadyExistsException_1.default(userData.email))];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        describe('if the email is not taken', function () {
            it('should not throw an error', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
                var userData, authenticationService;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            userData = {
                                fullName: 'John Smith',
                                email: 'john@smith.com',
                                password: 'strongPassword123',
                            };
                            process.env.JWT_SECRET = 'jwt_secret';
                            typeorm.getRepository.mockReturnValue({
                                findOne: function () { return Promise.resolve(undefined); },
                                create: function () { return (tslib_1.__assign(tslib_1.__assign({}, userData), { id: 0 })); },
                                save: function () { return Promise.resolve(); },
                            });
                            authenticationService = new authentication_service_1.default();
                            return [4 /*yield*/, expect(authenticationService.register(userData))
                                    .resolves.toBeDefined()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    });
});
//# sourceMappingURL=authentication.service.test.js.map