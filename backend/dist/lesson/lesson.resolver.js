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
exports.LessonResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const lesson_type_1 = require("./lesson.type");
const lesson_service_1 = require("./lesson.service");
const lesson_input_1 = require("./lesson.input");
const assign_students_to_lesson_input_1 = require("./assign-students-to-lesson.input");
const lesson_update_1 = require("./lesson.update");
let LessonResolver = class LessonResolver {
    constructor(lessonService) {
        this.lessonService = lessonService;
    }
    lesson(id) {
        return this.lessonService.getLesson(id);
    }
    lessons() {
        return this.lessonService.getLessons();
    }
    createLesson(createLessonInput) {
        console.log('you found me');
        return this.lessonService.createLesson(createLessonInput);
    }
    assignStudentsToLesson(assignStudentsToLessonInput) {
        const { lessonId, studentIds } = assignStudentsToLessonInput;
        return this.lessonService.assignStudentsToLesson(lessonId, studentIds);
    }
    async updateLesson(id, updateLesson) {
        return this.lessonService.updateLesson(id, updateLesson);
    }
    async deleteLesson(id) {
        return this.lessonService.deleteLesson(id);
    }
};
exports.LessonResolver = LessonResolver;
__decorate([
    (0, graphql_1.Query)((returns) => lesson_type_1.LessonType),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LessonResolver.prototype, "lesson", null);
__decorate([
    (0, graphql_1.Query)((returns) => [lesson_type_1.LessonType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LessonResolver.prototype, "lessons", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => lesson_type_1.LessonType),
    __param(0, (0, graphql_1.Args)('createLessonInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [lesson_input_1.CreateLessonInput]),
    __metadata("design:returntype", void 0)
], LessonResolver.prototype, "createLesson", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => lesson_type_1.LessonType),
    __param(0, (0, graphql_1.Args)('assignStudentsToLessonInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [assign_students_to_lesson_input_1.AssignStudentsToLessonInput]),
    __metadata("design:returntype", void 0)
], LessonResolver.prototype, "assignStudentsToLesson", null);
__decorate([
    (0, graphql_1.Mutation)(() => lesson_type_1.LessonType),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, lesson_update_1.UpdateLesson]),
    __metadata("design:returntype", Promise)
], LessonResolver.prototype, "updateLesson", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LessonResolver.prototype, "deleteLesson", null);
exports.LessonResolver = LessonResolver = __decorate([
    (0, graphql_1.Resolver)((of) => lesson_type_1.LessonType),
    __metadata("design:paramtypes", [lesson_service_1.LessonService])
], LessonResolver);
//# sourceMappingURL=lesson.resolver.js.map