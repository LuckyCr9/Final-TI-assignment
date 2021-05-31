"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var request = require("supertest");
var typeorm = tslib_1.__importStar(require("typeorm"));
var app_1 = tslib_1.__importDefault(require("../../app"));
var authentication_controller_1 = tslib_1.__importDefault(require("../authentication.controller"));
typeorm.getRepository = jest.fn();
describe('The AuthenticationController', function () {
    describe('POST /auth/register', function () {
        describe('if the email is not taken', function () {
            it('response should have the Set-Cookie header with the Authorization token', function () {
                var userData = {
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
                var authenticationController = new authentication_controller_1.default();
                var app = new app_1.default([
                    authenticationController,
                ]);
                return request(app.getServer())
                    .post(authenticationController.path + "/register")
                    .send(userData)
                    .expect('Set-Cookie', /^Authorization=.+/);
            });
        });
    });
});
//# sourceMappingURL=authentication.controller.test.js.map