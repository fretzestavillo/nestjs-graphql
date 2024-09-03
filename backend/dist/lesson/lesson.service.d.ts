import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import { CreateLessonInput } from './lesson.input';
import { UpdateLesson } from './lesson.update';
export declare class LessonService {
    private lessonRepository;
    constructor(lessonRepository: Repository<Lesson>);
    getLesson(id: string): Promise<Lesson>;
    getLessons(): Promise<Lesson[]>;
    createLesson(createLessonInput: CreateLessonInput): Promise<Lesson>;
    assignStudentsToLesson(lessonId: string, studentIds: string[]): Promise<Lesson>;
    updateLesson(id: string, updateLesson: UpdateLesson): Promise<Lesson>;
    deleteLesson(id: string): Promise<boolean>;
}
