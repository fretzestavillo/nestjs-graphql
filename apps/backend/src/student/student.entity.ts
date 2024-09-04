import {
  Entity,
  ObjectIdColumn,
  PrimaryColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Student {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @CreateDateColumn() // Automatically sets the date when a lesson is created
  createdAt: Date;
}
