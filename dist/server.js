"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require("dotenv/config");
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var app_1 = tslib_1.__importDefault(require("./app"));
var ormconfig_1 = tslib_1.__importDefault(require("./ormconfig"));
var post_controller_1 = tslib_1.__importDefault(require("./post/post.controller"));
var validateEnv_1 = tslib_1.__importDefault(require("./utils/validateEnv"));
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
validateEnv_1.default();
(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var error_1, app;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, typeorm_1.createConnection(ormconfig_1.default)];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.log('Error while connecting to the database', error_1);
                return [2 /*return*/, error_1];
            case 3:
                app = new app_1.default([
                    new post_controller_1.default(),
                ]);
                app.listen();
                return [2 /*return*/];
        }
    });
}); })();
//# sourceMappingURL=server.js.map