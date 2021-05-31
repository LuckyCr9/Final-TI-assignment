"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express = tslib_1.__importStar(require("express"));
var typeorm_1 = require("typeorm");
var address_entity_1 = tslib_1.__importDefault(require("./address.entity"));
var AddressController = /** @class */ (function () {
    function AddressController() {
        var _this = this;
        this.path = '/addresses';
        this.router = express.Router();
        this.addressRepository = typeorm_1.getRepository(address_entity_1.default);
        this.getAllAddresses = function (request, response) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var addresses;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addressRepository.find()];
                    case 1:
                        addresses = _a.sent();
                        response.send(addresses);
                        return [2 /*return*/];
                }
            });
        }); };
        this.initializeRoutes();
    }
    AddressController.prototype.initializeRoutes = function () {
        this.router.get(this.path, this.getAllAddresses);
    };
    return AddressController;
}());
exports.default = AddressController;
//# sourceMappingURL=address.controller.js.map