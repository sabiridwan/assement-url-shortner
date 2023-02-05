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
exports.ShortnerService = void 0;
const common_1 = require("@nestjs/common");
const utils_1 = require("../utils");
const shotner_repository_1 = require("./shotner.repository");
let ShortnerService = class ShortnerService {
    constructor(shortnerRepository) {
        this.shortnerRepository = shortnerRepository;
    }
    async create(model) {
        if (!(0, utils_1.validateUrl)(model.url))
            throw new common_1.HttpException('Invalid url provided', common_1.HttpStatus.BAD_REQUEST);
        model.shortUrl = (0, utils_1.generateId)();
        return this.shortnerRepository.create(model);
    }
    async update(model) {
        if (model.url && !(0, utils_1.validateUrl)(model.url))
            throw new common_1.HttpException('Invalid url provided', common_1.HttpStatus.BAD_REQUEST);
        return this.shortnerRepository.update(model._id, model);
    }
    async delete(id) {
        this.shortnerRepository.delete(id);
    }
    async find(model) {
        return this.shortnerRepository.find(model);
    }
    async findOne(model) {
        return this.shortnerRepository.findOne(model);
    }
    async page(page) {
        return this.shortnerRepository.page(page);
    }
};
ShortnerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [shotner_repository_1.ShortnerRepository])
], ShortnerService);
exports.ShortnerService = ShortnerService;
//# sourceMappingURL=shortner.service.js.map