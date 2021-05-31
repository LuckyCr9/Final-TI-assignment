"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var bodyParser = tslib_1.__importStar(require("body-parser"));
var cookieParser = require("cookie-parser");
var express = require("express");
var error_middleware_1 = tslib_1.__importDefault(require("./middleware/error.middleware"));
require("reflect-metadata");
require("es6-shim");
var App = /** @class */ (function () {
    function App(controllers) {
        this.app = express();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
    }
    App.prototype.listen = function () {
        this.app.listen(process.env.PORT, function () {
            console.log("App listening on the port " + process.env.PORT);
        });
    };
    App.prototype.getServer = function () {
        return this.app;
    };
    App.prototype.initializeMiddlewares = function () {
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
    };
    App.prototype.initializeErrorHandling = function () {
        this.app.use(error_middleware_1.default);
    };
    App.prototype.initializeControllers = function (controllers) {
        var _this = this;
        controllers.forEach(function (controller) {
            _this.app.use('/', controller.router);
        });
    };
    return App;
}());
exports.default = App;
//# sourceMappingURL=app.js.map