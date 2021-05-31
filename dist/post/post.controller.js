"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express = tslib_1.__importStar(require("express"));
var typeorm_1 = require("typeorm");
var PostNotFoundException_1 = tslib_1.__importDefault(require("../exceptions/PostNotFoundException"));
var auth_middleware_1 = tslib_1.__importDefault(require("../middleware/auth.middleware"));
var validation_middleware_1 = tslib_1.__importDefault(require("../middleware/validation.middleware"));
var post_dto_1 = tslib_1.__importDefault(require("./post.dto"));
var post_entity_1 = tslib_1.__importDefault(require("./post.entity"));
var PostController = /** @class */ (function () {
    function PostController() {
        var _this = this;
        this.path = '/posts';
        this.router = express.Router();
        this.postRepository = typeorm_1.getRepository(post_entity_1.default);
        this.createPost = function (request, response) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var postData, newPost;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postData = request.body;
                        newPost = this.postRepository.create(tslib_1.__assign(tslib_1.__assign({}, postData), { author: request.user }));
                        return [4 /*yield*/, this.postRepository.save(newPost)];
                    case 1:
                        _a.sent();
                        newPost.author = undefined;
                        response.send(newPost);
                        return [2 /*return*/];
                }
            });
        }); };
        this.getAllPosts = function (request, response) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var posts;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.postRepository.find({ relations: ['categories'] })];
                    case 1:
                        posts = _a.sent();
                        response.send(posts);
                        return [2 /*return*/];
                }
            });
        }); };
        this.getPostById = function (request, response, next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var id, post;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        return [4 /*yield*/, this.postRepository.findOne(id, { relations: ['categories'] })];
                    case 1:
                        post = _a.sent();
                        if (post) {
                            response.send(post);
                        }
                        else {
                            next(new PostNotFoundException_1.default(id));
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.modifyPost = function (request, response, next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var id, postData, updatedPost;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        postData = request.body;
                        return [4 /*yield*/, this.postRepository.update(id, postData)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.postRepository.findOne(id)];
                    case 2:
                        updatedPost = _a.sent();
                        if (updatedPost) {
                            response.send(updatedPost);
                        }
                        else {
                            next(new PostNotFoundException_1.default(id));
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.deletePost = function (request, response, next) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var id, deleteResponse;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        return [4 /*yield*/, this.postRepository.delete(id)];
                    case 1:
                        deleteResponse = _a.sent();
                        if (deleteResponse.raw[1]) {
                            response.sendStatus(200);
                        }
                        else {
                            next(new PostNotFoundException_1.default(id));
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.initializeRoutes();
    }
    PostController.prototype.initializeRoutes = function () {
        this.router.get(this.path, this.getAllPosts);
        this.router.get(this.path + "/:id", this.getPostById);
        this.router
            .all(this.path + "/*", auth_middleware_1.default)
            .patch(this.path + "/:id", validation_middleware_1.default(post_dto_1.default, true), this.modifyPost)
            .delete(this.path + "/:id", this.deletePost)
            .post(this.path, auth_middleware_1.default, validation_middleware_1.default(post_dto_1.default), this.createPost);
    };
    return PostController;
}());
exports.default = PostController;
//# sourceMappingURL=post.controller.js.map