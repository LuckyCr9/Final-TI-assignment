"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * Required External Modules
 */
var dotenv = tslib_1.__importStar(require("dotenv"));
var express_1 = tslib_1.__importDefault(require("express"));
var cors_1 = tslib_1.__importDefault(require("cors"));
var helmet_1 = tslib_1.__importDefault(require("helmet"));
dotenv.config();
/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1);
}
var PORT = parseInt(process.env.PORT, 10);
var app = express_1.default();
/**
 *  App Configuration
 */
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
/**
 * Server Activation
 */
app.listen(PORT, function () {
    console.log("Listening on port " + PORT);
});
//# sourceMappingURL=index.js.map