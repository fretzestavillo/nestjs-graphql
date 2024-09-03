import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';
import { UpdateStudent } from './student.update';
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    getStudent(id: string): Promise<Student>;
    getStudents(): Promise<Student[]>;
    createStudent(createStudentInput: CreateStudentInput): Promise<Student>;
    UpdateStudent(id: string, updateStudent: UpdateStudent): Promise<Student>;
    deleteStudent(id: string): Promise<boolean>;
}
