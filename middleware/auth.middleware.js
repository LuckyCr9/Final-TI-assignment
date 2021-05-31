"use strict";
/*import { NextFunction, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import AuthenticationTokenMissingException from '../exceptions/AuthenticationTokenMissingException';
import WrongAuthenticationTokenException from '../exceptions/WrongAuthenticationTokenException';
import DataStoredInToken from '../interfaces/dataStoredInToken';
import RequestWithUser from '../interfaces/requestWithUser.interface';
import User from '../user/user.entity';

async function authMiddleware(request: RequestWithUser, response: Response, next: NextFunction) {
  const cookies = request.cookies;
  const userRepository = getRepository(User);
  if (cookies && cookies.Authorization) {
    const secret = process.env.JWT_SECRET;
    try {
      const verificationResponse = jwt.verify(cookies.Authorization, secret) as DataStoredInToken;
      const id = verificationResponse.id;
      const user = await userRepository.findOne(id);
      if (user) {
        request.user = user;
        next();
      } else {
        next(new WrongAuthenticationTokenException());
      }
    } catch (error) {
      next(new WrongAuthenticationTokenException());
    }
  } else {
    next(new AuthenticationTokenMissingException());
  }
}

export default authMiddleware;

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
var tslib_1 = require("tslib");
var express_jwt_1 = tslib_1.__importDefault(require("express-jwt"));
var jwks_rsa_1 = tslib_1.__importDefault(require("jwks-rsa"));
var dotenv = tslib_1.__importStar(require("dotenv"));
dotenv.config();
exports.checkJwt = express_jwt_1.default({
    secret: jwks_rsa_1.default.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://" + process.env.AUTH0_DOMAIN + "/.well-known/jwks.json"
    }),
    // Validate the audience and the issuer.
    audience: process.env.AUTH0_AUDIENCE,
    issuer: "https://" + process.env.AUTH0_DOMAIN + "/",
    algorithms: ["RS256"]
});
//# sourceMappingURL=auth.middleware.js.map