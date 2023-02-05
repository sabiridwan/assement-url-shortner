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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortnerResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const shortner_dto_1 = require("./shortner.dto");
const shortner_service_1 = require("./shortner.service");
let ShortnerResolver = class ShortnerResolver {
    constructor(shortnerSvc) {
        this.shortnerSvc = shortnerSvc;
    }
    async create(url) {
        return this.shortnerSvc.create(url);
    }
    async update(url) {
        return this.shortnerSvc.update(url);
    }
    async url(url) {
        return await this.shortnerSvc.findOne({ shortUrl: url });
    }
    async delete(url) {
        await this.shortnerSvc.update(url);
        return true;
    }
    async findOne(query) {
        return this.shortnerSvc.findOne(query);
    }
    async find(query) {
        return this.shortnerSvc.find(query);
    }
    async page(page) {
        return this.shortnerSvc.page(page);
    }
};
__decorate([
    (0, graphql_1.Mutation)((returns) => shortner_dto_1.Shortner, { name: 'createUrl' }),
    __param(0, (0, graphql_1.Args)('url')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shortner_dto_1.ShortnerCreateInput]),
    __metadata("design:returntype", Promise)
], ShortnerResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => shortner_dto_1.Shortner, { name: 'updateUrl' }),
    __param(0, (0, graphql_1.Args)('url')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shortner_dto_1.ShortnerUpdateInput]),
    __metadata("design:returntype", Promise)
], ShortnerResolver.prototype, "update", null);
__decorate([
    (0, graphql_1.Query)((returns) => shortner_dto_1.Shortner, { name: 'url' }),
    __param(0, (0, graphql_1.Args)('shortUrl')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ShortnerResolver.prototype, "url", null);
__decorate([
    (0, graphql_1.Query)((returns) => Boolean, { name: 'deleteUrl' }),
    __param(0, (0, graphql_1.Args)('url')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shortner_dto_1.ShortnerUpdateInput]),
    __metadata("design:returntype", Promise)
], ShortnerResolver.prototype, "delete", null);
__decorate([
    (0, graphql_1.Query)((returns) => shortner_dto_1.Shortner, { name: 'findOneUrl', nullable: true }),
    __param(0, (0, graphql_1.Args)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shortner_dto_1.ShortnerQueryInput]),
    __metadata("design:returntype", Promise)
], ShortnerResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Query)((returns) => [shortner_dto_1.Shortner], { name: 'findUrl' }),
    __param(0, (0, graphql_1.Args)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shortner_dto_1.ShortnerQueryInput]),
    __metadata("design:returntype", Promise)
], ShortnerResolver.prototype, "find", null);
__decorate([
    (0, graphql_1.Query)((returns) => shortner_dto_1.ShortnerPageResult, { name: 'urlPage' }),
    __param(0, (0, graphql_1.Args)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shortner_dto_1.ShortnerPageInput]),
    __metadata("design:returntype", Promise)
], ShortnerResolver.prototype, "page", null);
ShortnerResolver = __decorate([
    (0, graphql_1.Resolver)((of) => shortner_dto_1.Shortner),
    __metadata("design:paramtypes", [shortner_service_1.ShortnerService])
], ShortnerResolver);
exports.ShortnerResolver = ShortnerResolver;
//# sourceMappingURL=shortner.resolver.js.map