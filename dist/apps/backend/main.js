/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const typeorm_1 = __webpack_require__(5);
const graphql_1 = __webpack_require__(6);
const lesson_module_1 = __webpack_require__(7);
const lesson_entity_1 = __webpack_require__(12);
const student_entity_1 = __webpack_require__(21);
const student_module_1 = __webpack_require__(19);
const apollo_1 = __webpack_require__(25);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mongodb',
                url: 'mongodb://mongo:27017/school',
                //   url: 'mongodb://host.docker.internal:27017/school',
                synchronize: true,
                //   useUnifiedTopology: true,
                entities: [lesson_entity_1.Lesson, student_entity_1.Student],
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                //   playground: false,
                autoSchemaFile: true,
            }),
            lesson_module_1.LessonModule,
            student_module_1.StudentModule,
        ],
    })
], AppModule);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LessonModule = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const typeorm_1 = __webpack_require__(5);
const lesson_resolver_1 = __webpack_require__(8);
const lesson_service_1 = __webpack_require__(11);
const lesson_entity_1 = __webpack_require__(12);
const student_module_1 = __webpack_require__(19);
let LessonModule = class LessonModule {
};
exports.LessonModule = LessonModule;
exports.LessonModule = LessonModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([lesson_entity_1.Lesson]), student_module_1.StudentModule],
        providers: [lesson_resolver_1.LessonResolver, lesson_service_1.LessonService],
    })
], LessonModule);


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LessonResolver = void 0;
const tslib_1 = __webpack_require__(3);
const graphql_1 = __webpack_require__(6);
const lesson_type_1 = __webpack_require__(9);
const lesson_service_1 = __webpack_require__(11);
const lesson_input_1 = __webpack_require__(15);
const assign_students_to_lesson_input_1 = __webpack_require__(17);
const lesson_update_1 = __webpack_require__(18);
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
tslib_1.__decorate([
    (0, graphql_1.Query)((returns) => lesson_type_1.LessonType),
    tslib_1.__param(0, (0, graphql_1.Args)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], LessonResolver.prototype, "lesson", null);
tslib_1.__decorate([
    (0, graphql_1.Query)((returns) => [lesson_type_1.LessonType]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], LessonResolver.prototype, "lessons", null);
tslib_1.__decorate([
    (0, graphql_1.Mutation)((returns) => lesson_type_1.LessonType),
    tslib_1.__param(0, (0, graphql_1.Args)('createLessonInput')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof lesson_input_1.CreateLessonInput !== "undefined" && lesson_input_1.CreateLessonInput) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], LessonResolver.prototype, "createLesson", null);
tslib_1.__decorate([
    (0, graphql_1.Mutation)((returns) => lesson_type_1.LessonType),
    tslib_1.__param(0, (0, graphql_1.Args)('assignStudentsToLessonInput')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof assign_students_to_lesson_input_1.AssignStudentsToLessonInput !== "undefined" && assign_students_to_lesson_input_1.AssignStudentsToLessonInput) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], LessonResolver.prototype, "assignStudentsToLesson", null);
tslib_1.__decorate([
    (0, graphql_1.Mutation)(() => lesson_type_1.LessonType),
    tslib_1.__param(0, (0, graphql_1.Args)('id')),
    tslib_1.__param(1, (0, graphql_1.Args)('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_d = typeof lesson_update_1.UpdateLesson !== "undefined" && lesson_update_1.UpdateLesson) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LessonResolver.prototype, "updateLesson", null);
tslib_1.__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    tslib_1.__param(0, (0, graphql_1.Args)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], LessonResolver.prototype, "deleteLesson", null);
exports.LessonResolver = LessonResolver = tslib_1.__decorate([
    (0, graphql_1.Resolver)((of) => lesson_type_1.LessonType),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof lesson_service_1.LessonService !== "undefined" && lesson_service_1.LessonService) === "function" ? _a : Object])
], LessonResolver);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LessonType = void 0;
const tslib_1 = __webpack_require__(3);
const graphql_1 = __webpack_require__(6);
const student_type_1 = __webpack_require__(10);
let LessonType = class LessonType {
};
exports.LessonType = LessonType;
tslib_1.__decorate([
    (0, graphql_1.Field)((type) => graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], LessonType.prototype, "id", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], LessonType.prototype, "name", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], LessonType.prototype, "startDate", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], LessonType.prototype, "endDate", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)((type) => [student_type_1.StudentType])
    //   students: string[];
    ,
    tslib_1.__metadata("design:type", Array)
], LessonType.prototype, "students", void 0);
exports.LessonType = LessonType = tslib_1.__decorate([
    (0, graphql_1.ObjectType)('Lesson')
], LessonType);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StudentType = void 0;
const tslib_1 = __webpack_require__(3);
const graphql_1 = __webpack_require__(6);
let StudentType = class StudentType {
};
exports.StudentType = StudentType;
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], StudentType.prototype, "id", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], StudentType.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], StudentType.prototype, "lastName", void 0);
exports.StudentType = StudentType = tslib_1.__decorate([
    (0, graphql_1.ObjectType)('Student')
], StudentType);


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LessonService = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const typeorm_1 = __webpack_require__(5);
const lesson_entity_1 = __webpack_require__(12);
const typeorm_2 = __webpack_require__(13);
const uuid_1 = __webpack_require__(14);
let LessonService = class LessonService {
    constructor(lessonRepository) {
        this.lessonRepository = lessonRepository;
    }
    async getLesson(id) {
        return this.lessonRepository.findOneBy({ id });
    }
    async getLessons() {
        return this.lessonRepository.find();
    }
    async createLesson(createLessonInput) {
        const { name, startDate, endDate } = createLessonInput;
        const lesson = this.lessonRepository.create({
            id: (0, uuid_1.v4)(),
            name,
            startDate,
            endDate,
        });
        return this.lessonRepository.save(lesson);
    }
    async assignStudentsToLesson(lessonId, studentIds) {
        const lesson = await this.lessonRepository.findOneBy({ id: lessonId });
        if (!lesson) {
            throw new Error('Lesson not found');
        }
        lesson.students = Array.isArray(lesson.students) ? lesson.students : [];
        lesson.students = [...lesson.students, ...studentIds];
        return this.lessonRepository.save(lesson);
    }
    async updateLesson(id, updateLesson) {
        const { name } = updateLesson;
        const lesson = await this.getLesson(id);
        lesson.name = name;
        await this.lessonRepository.save(lesson);
        return lesson;
    }
    async deleteLesson(id) {
        const result = await this.lessonRepository.delete({ id });
        if (result.affected === 0) {
            console.log(`No lesson found with id: ${id}`);
            return false;
        }
        console.log(`Lesson with id: ${id} deleted successfully`);
        return true;
    }
};
exports.LessonService = LessonService;
exports.LessonService = LessonService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(lesson_entity_1.Lesson)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], LessonService);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Lesson = void 0;
const tslib_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(13);
let Lesson = class Lesson {
};
exports.Lesson = Lesson;
tslib_1.__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    tslib_1.__metadata("design:type", String)
], Lesson.prototype, "_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", String)
], Lesson.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Lesson.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Lesson.prototype, "startDate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Lesson.prototype, "endDate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", Array)
], Lesson.prototype, "students", void 0);
exports.Lesson = Lesson = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Lesson);


/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateLessonInput = void 0;
const tslib_1 = __webpack_require__(3);
const graphql_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(16);
let CreateLessonInput = class CreateLessonInput {
};
exports.CreateLessonInput = CreateLessonInput;
tslib_1.__decorate([
    (0, class_validator_1.MinLength)(1),
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], CreateLessonInput.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], CreateLessonInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], CreateLessonInput.prototype, "endDate", void 0);
exports.CreateLessonInput = CreateLessonInput = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], CreateLessonInput);


/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AssignStudentsToLessonInput = void 0;
const tslib_1 = __webpack_require__(3);
const graphql_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(16);
let AssignStudentsToLessonInput = class AssignStudentsToLessonInput {
};
exports.AssignStudentsToLessonInput = AssignStudentsToLessonInput;
tslib_1.__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, graphql_1.Field)((type) => graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], AssignStudentsToLessonInput.prototype, "lessonId", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsUUID)('4', { each: true }),
    (0, graphql_1.Field)((type) => [graphql_1.ID]),
    tslib_1.__metadata("design:type", Array)
], AssignStudentsToLessonInput.prototype, "studentIds", void 0);
exports.AssignStudentsToLessonInput = AssignStudentsToLessonInput = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], AssignStudentsToLessonInput);


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateLesson = void 0;
const tslib_1 = __webpack_require__(3);
const graphql_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(16);
let UpdateLesson = class UpdateLesson {
};
exports.UpdateLesson = UpdateLesson;
tslib_1.__decorate([
    (0, class_validator_1.MinLength)(1),
    (0, graphql_1.Field)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], UpdateLesson.prototype, "name", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], UpdateLesson.prototype, "startDate", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    tslib_1.__metadata("design:type", String)
], UpdateLesson.prototype, "endDate", void 0);
exports.UpdateLesson = UpdateLesson = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], UpdateLesson);


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StudentModule = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const typeorm_1 = __webpack_require__(5);
const student_service_1 = __webpack_require__(20);
const student_entity_1 = __webpack_require__(21);
const student_resolver_1 = __webpack_require__(22);
let StudentModule = class StudentModule {
};
exports.StudentModule = StudentModule;
exports.StudentModule = StudentModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([student_entity_1.Student])],
        providers: [student_resolver_1.StudentResolver, student_service_1.StudentService],
        exports: [student_service_1.StudentService],
    })
], StudentModule);


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StudentService = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const typeorm_1 = __webpack_require__(5);
const uuid_1 = __webpack_require__(14);
const typeorm_2 = __webpack_require__(13);
const student_entity_1 = __webpack_require__(21);
let StudentService = class StudentService {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    async getStudent(id) {
        return this.studentRepository.findOneBy({ id });
    }
    async getStudents() {
        return this.studentRepository.find();
    }
    async createStudent(createStudentInput) {
        const { firstName, lastName } = createStudentInput;
        const student = this.studentRepository.create({
            id: (0, uuid_1.v4)(),
            firstName,
            lastName,
        });
        return this.studentRepository.save(student);
    }
    async UpdateStudent(id, updateStudent) {
        const { firstName, lastName } = updateStudent;
        const student = await this.getStudent(id);
        student.firstName = firstName;
        student.lastName = lastName;
        await this.studentRepository.save(student);
        return student;
    }
    async deleteStudent(id) {
        const result = await this.studentRepository.delete({ id });
        if (result.affected === 0) {
            console.log(`No lesson found with id: ${id}`);
            return false;
        }
        console.log(`Lesson with id: ${id} deleted successfully`);
        return true;
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], StudentService);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Student = void 0;
const tslib_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(13);
let Student = class Student {
};
exports.Student = Student;
tslib_1.__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    tslib_1.__metadata("design:type", String)
], Student.prototype, "_id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    tslib_1.__metadata("design:type", String)
], Student.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Student.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Student.prototype, "lastName", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)() // Automatically sets the date when a lesson is created
    ,
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Student.prototype, "createdAt", void 0);
exports.Student = Student = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Student);


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StudentResolver = void 0;
const tslib_1 = __webpack_require__(3);
const graphql_1 = __webpack_require__(6);
const student_type_1 = __webpack_require__(10);
const create_student_input_1 = __webpack_require__(23);
const student_service_1 = __webpack_require__(20);
const student_update_1 = __webpack_require__(24);
let StudentResolver = class StudentResolver {
    constructor(studentService) {
        this.studentService = studentService;
    }
    async student(id) {
        return this.studentService.getStudent(id);
    }
    async students() {
        return this.studentService.getStudents();
    }
    async createStudent(createStudentInput) {
        return this.studentService.createStudent(createStudentInput);
    }
    async UpdateStudent(id, updateStudent) {
        console.log('UpdateStudent called with ID:', id, 'and data:', updateStudent);
        return this.studentService.UpdateStudent(id, updateStudent);
    }
    //   @Mutation(() => StudentType)
    //   async UpdateStudent(
    //     @Args('id') id: string,
    //     @Args('data') updateStudent: UpdateStudent,
    //   ) {
    //     return this.studentService.UpdateStudent(id, updateStudent);
    //   }
    async deleteStudent(id) {
        return this.studentService.deleteStudent(id);
    }
};
exports.StudentResolver = StudentResolver;
tslib_1.__decorate([
    (0, graphql_1.Query)((returns) => student_type_1.StudentType),
    tslib_1.__param(0, (0, graphql_1.Args)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentResolver.prototype, "student", null);
tslib_1.__decorate([
    (0, graphql_1.Query)((returns) => [student_type_1.StudentType]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], StudentResolver.prototype, "students", null);
tslib_1.__decorate([
    (0, graphql_1.Mutation)((returns) => student_type_1.StudentType),
    tslib_1.__param(0, (0, graphql_1.Args)('createStudentInput')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof create_student_input_1.CreateStudentInput !== "undefined" && create_student_input_1.CreateStudentInput) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentResolver.prototype, "createStudent", null);
tslib_1.__decorate([
    (0, graphql_1.Mutation)(() => student_type_1.StudentType),
    tslib_1.__param(0, (0, graphql_1.Args)('id')),
    tslib_1.__param(1, (0, graphql_1.Args)('data')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_c = typeof student_update_1.UpdateStudent !== "undefined" && student_update_1.UpdateStudent) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentResolver.prototype, "UpdateStudent", null);
tslib_1.__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    tslib_1.__param(0, (0, graphql_1.Args)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], StudentResolver.prototype, "deleteStudent", null);
exports.StudentResolver = StudentResolver = tslib_1.__decorate([
    (0, graphql_1.Resolver)((of) => student_type_1.StudentType),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof student_service_1.StudentService !== "undefined" && student_service_1.StudentService) === "function" ? _a : Object])
], StudentResolver);


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateStudentInput = void 0;
const tslib_1 = __webpack_require__(3);
const graphql_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(16);
let CreateStudentInput = class CreateStudentInput {
};
exports.CreateStudentInput = CreateStudentInput;
tslib_1.__decorate([
    (0, class_validator_1.MinLength)(1),
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], CreateStudentInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.MinLength)(1),
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], CreateStudentInput.prototype, "lastName", void 0);
exports.CreateStudentInput = CreateStudentInput = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], CreateStudentInput);


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateStudent = void 0;
const tslib_1 = __webpack_require__(3);
const graphql_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(16);
let UpdateStudent = class UpdateStudent {
};
exports.UpdateStudent = UpdateStudent;
tslib_1.__decorate([
    (0, class_validator_1.MinLength)(1),
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], UpdateStudent.prototype, "firstName", void 0);
tslib_1.__decorate([
    (0, class_validator_1.MinLength)(1),
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", String)
], UpdateStudent.prototype, "lastName", void 0);
exports.UpdateStudent = UpdateStudent = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], UpdateStudent);


/***/ }),
/* 25 */
/***/ ((module) => {

module.exports = require("@nestjs/apollo");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(2);
const common_1 = __webpack_require__(4);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(3000);
}
bootstrap();

})();

/******/ })()
;