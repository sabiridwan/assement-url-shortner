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
exports.handlePageResult = exports.handlePageFacet = exports.PageResult = exports.PageParams = exports.ShortnerSchema = exports.Shortner = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Shortner = class Shortner {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Shortner.prototype, "url", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Shortner.prototype, "shortUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Shortner.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Shortner.prototype, "createdAt", void 0);
Shortner = __decorate([
    (0, mongoose_1.Schema)()
], Shortner);
exports.Shortner = Shortner;
exports.ShortnerSchema = mongoose_1.SchemaFactory.createForClass(Shortner);
exports.ShortnerSchema.index({ shortUrl: 1 });
class PageParams {
}
exports.PageParams = PageParams;
class PageResult {
}
exports.PageResult = PageResult;
const handlePageFacet = (page) => {
    return {
        $facet: {
            data: [{ $skip: Number(page.skip) }, { $limit: Number(page.take) }],
            totalRecords: [{ $count: 'count' }],
        },
    };
};
exports.handlePageFacet = handlePageFacet;
const handlePageResult = (res) => {
    let rs = res[0];
    if (rs.totalRecords.length)
        rs = Object.assign(Object.assign({}, rs), { totalRecords: rs.totalRecords[0].count });
    else
        rs = Object.assign(Object.assign({}, rs), { totalRecords: 0 });
    return rs;
};
exports.handlePageResult = handlePageResult;
//# sourceMappingURL=shortner.schema.js.map