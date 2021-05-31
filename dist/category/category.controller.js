"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express = tslib_1.__importStar(require("express"));
var typeorm_1 = require("typeorm");
var CategoryNotFoundException_1 = tslib_1.__importDefault(require("../exceptions/CategoryNotFoundException"));
var validation_middleware_1 = tslib_1.__importDefault(require("../middleware/validation.middleware"));
var category_dto_1 = tslib_1.__importDefault(require("./category.dto"));
var category_entity_1 = tslib_1.__importDefault(require("./category.entity"));
var CategoryController = /** @class */ (function () {
    function CategoryController() {
        var _this = this;
        this.path = '/categories';
        this.router = express.Router();
        this.categoryRepository = typeorm_1.getRepository(category_entity_1.default);
        this.getAllCategories = function (request, response) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var categories;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.categoryRepository.find({ relations: ['posts'] })];
                    case 1:
                        categories = _a.sent();
                        response.send(categories);
                        return [2 /*return*/];
                }
            });
        }); };
        this.getCategoryById = function (request, response, next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var id, category;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        return [4 /*yield*/, this.categoryRepository.findOne(id, { relations: ['posts'] })];
                    case 1:
                        category = _a.sent();
                        if (category) {
                            response.send(category);
                        }
                        else {
                            next(new CategoryNotFoundException_1.default(id));
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.createCategory = function (request, response) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var categoryData, newCategory;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        categoryData = request.body;
                        newCategory = this.categoryRepository.create(categoryData);
                        return [4 /*yield*/, this.categoryRepository.save(newCategory)];
                    case 1:
                        _a.sent();
                        response.send(newCategory);
                        return [2 /*return*/];
                }
            });
        }); };
        this.initializeRoutes();
    }
    CategoryController.prototype.initializeRoutes = function () {
        this.router.get(this.path, this.getAllCategories);
        this.router.get(this.path + "/:id", this.getCategoryById);
        this.router.post(this.path, validation_middleware_1.default(category_dto_1.default), this.createCategory);
    };
    return CategoryController;
}());
exports.default = CategoryController;
//# sourceMappingURL=category.controller.js.map