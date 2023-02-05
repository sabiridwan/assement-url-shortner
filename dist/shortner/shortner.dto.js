"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortnerPageResult = exports.ShortnerPageInput = exports.ShortnerQueryInput = exports.ShortnerUpdateInput = exports.ShortnerCreateInput = exports.Shortner = void 0;
const graphql_1 = require("@nestjs/graphql");
let Shortner = class Shortner {
};
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Shortner.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Shortner.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Shortner.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], Shortner.prototype, "shortUrl", void 0);
__decorate([
    (0, graphql_1.Field)((type) => Number),
    __metadata("design:type", Number)
], Shortner.prototype, "createdAt", void 0);
Shortner = __decorate([
    (0, graphql_1.ObjectType)()
], Shortner);
exports.Shortner = Shortner;
let ShortnerCreateInput = class ShortnerCreateInput {
};
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], ShortnerCreateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String),
    __metadata("design:type", String)
], ShortnerCreateInput.prototype, "url", void 0);
ShortnerCreateInput = __decorate([
    (0, graphql_1.InputType)()
], ShortnerCreateInput);
exports.ShortnerCreateInput = ShortnerCreateInput;
let ShortnerUpdateInput = class ShortnerUpdateInput {
};
__decorate([
    (0, graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], ShortnerUpdateInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], ShortnerUpdateInput.prototype, "url", void 0);
ShortnerUpdateInput = __decorate([
    (0, graphql_1.InputType)()
], ShortnerUpdateInput);
exports.ShortnerUpdateInput = ShortnerUpdateInput;
let ShortnerQueryInput = class ShortnerQueryInput {
};
__decorate([
    (0, graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], ShortnerQueryInput.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], ShortnerQueryInput.prototype, "url", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], ShortnerQueryInput.prototype, "shortUrl", void 0);
ShortnerQueryInput = __decorate([
    (0, graphql_1.InputType)()
], ShortnerQueryInput);
exports.ShortnerQueryInput = ShortnerQueryInput;
let ShortnerPageInput = class ShortnerPageInput {
};
__decorate([
    (0, graphql_1.Field)((type) => Number),
    __metadata("design:type", Number)
], ShortnerPageInput.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)((type) => Number),
    __metadata("design:type", Number)
], ShortnerPageInput.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)((type) => String, { nullable: true }),
    __metadata("design:type", String)
], ShortnerPageInput.prototype, "kewyword", void 0);
ShortnerPageInput = __decorate([
    (0, graphql_1.InputType)()
], ShortnerPageInput);
exports.ShortnerPageInput = ShortnerPageInput;
let ShortnerPageResult = class ShortnerPageResult {
};
__decorate([
    (0, graphql_1.Field)((type) => Number, { nullable: false }),
    __metadata("design:type", Number)
], ShortnerPageResult.prototype, "totalRecords", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [Shortner]),
    __metadata("design:type", Array)
], ShortnerPageResult.prototype, "data", void 0);
ShortnerPageResult = __decorate([
    (0, graphql_1.ObjectType)()
], ShortnerPageResult);
exports.ShortnerPageResult = ShortnerPageResult;
//# sourceMappingURL=shortner.dto.js.map