"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var envalid_1 = require("envalid");
function validateEnv() {
    envalid_1.cleanEnv(process.env, {
        JWT_SECRET: envalid_1.str(),
        POSTGRES_HOST: envalid_1.str(),
        POSTGRES_PORT: envalid_1.port(),
        POSTGRES_USER: envalid_1.str(),
        POSTGRES_PASSWORD: envalid_1.str(),
        POSTGRES_DB: envalid_1.str(),
        PORT: envalid_1.port(),
    });
}
exports.default = validateEnv;
//# sourceMappingURL=validateEnv.js.map