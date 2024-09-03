import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson.input';
import { AssignStudentsToLessonInput } from './assign-students-to-lesson.input';
import { UpdateLesson } from './lesson.update';
export declare class LessonResolver {
    private lessonService;
    constructor(lessonService: LessonService);
    lesson(id: string): Promise<import("./lesson.entity").Lesson>;
    lessons(): Promise<import("./lesson.entity").Lesson[]>;
    createLesson(createLessonInput: CreateLessonInput): Promise<import("./lesson.entity").Lesson>;
    assignStudentsToLesson(assignStudentsToLessonInput: AssignStudentsToLessonInput): Promise<import("./lesson.entity").Lesson>;
    updateLesson(id: string, updateLesson: UpdateLesson): Promise<import("./lesson.entity").Lesson>;
    deleteLesson(id: string): Promise<boolean>;
}
