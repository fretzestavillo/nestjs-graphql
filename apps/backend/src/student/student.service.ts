import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { Repository, UpdateStatement } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';
import { In } from 'typeorm';
import { UpdateStudent } from './student.update';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async getStudent(id: string): Promise<Student> {
    return this.studentRepository.findOneBy({ id });
  }

  async getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { firstName, lastName } = createStudentInput;

    const student = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName,
    });

    return this.studentRepository.save(student);
  }

  async UpdateStudent(
    id: string,
    updateStudent: UpdateStudent,
  ): Promise<Student> {
    const { firstName, lastName } = updateStudent;
    const student = await this.getStudent(id);
    student.firstName = firstName;
    student.lastName = lastName;
    await this.studentRepository.save(student);
    return student;
  }

  async deleteStudent(id: string) {
    const result = await this.studentRepository.delete({ id });
    if (result.affected === 0) {
      console.log(`No lesson found with id: ${id}`);
      return false;
    }

    console.log(`Lesson with id: ${id} deleted successfully`);
    return true;
  }
}
