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
exports.ShortnerRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const shortner_schema_1 = require("./shortner.schema");
let ShortnerRepository = class ShortnerRepository {
    constructor(shortnerModel) {
        this.shortnerModel = shortnerModel;
    }
    async create(model) {
        const createdActivity = new this.shortnerModel(Object.assign(Object.assign({}, model), { createdAt: Date.now() }));
        return createdActivity.save();
    }
    async update(id, model) {
        await this.shortnerModel.updateOne({ _id: id }, Object.assign(Object.assign({}, model), { updatedAt: Date.now() }));
        return this.findOne({ _id: id });
    }
    async delete(id) {
        await this.shortnerModel.deleteOne({
            _id: new mongoose_2.Types.ObjectId(id),
        });
    }
    async find(query) {
        return await this.shortnerModel.find(query);
    }
    async findOne(query) {
        if (query._id)
            query._id = new mongoose_2.Types.ObjectId(query._id);
        return await this.shortnerModel.findOne(query);
    }
    async page(page) {
        let query = {
            $match: {},
        };
        return await this.shortnerModel
            .aggregate([query, { $sort: { name: 1 } }, Object.assign({}, (0, shortner_schema_1.handlePageFacet)(page))])
            .then(shortner_schema_1.handlePageResult);
    }
};
ShortnerRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(shortner_schema_1.Shortner.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ShortnerRepository);
exports.ShortnerRepository = ShortnerRepository;
//# sourceMappingURL=shotner.repository.js.map