import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';
import { UpdateStudent } from './student.update';
export declare class StudentResolver {
    private studentService;
    constructor(studentService: StudentService);
    student(id: string): Promise<import("./student.entity").Student>;
    students(): Promise<import("./student.entity").Student[]>;
    createStudent(createStudentInput: CreateStudentInput): Promise<import("./student.entity").Student>;
    UpdateStudent(id: string, updateStudent: UpdateStudent): Promise<import("./student.entity").Student>;
    deleteStudent(id: string): Promise<boolean>;
}
