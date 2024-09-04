import LessonForm from "./lesson-component/CreateLesson";
import LessonDetails from "./lesson-component/LessonsList";
import StudentForm from "./student-component/CreateStudent";
import StudentDetails from "./student-component/StudentList";

export function App() {
  return (
    <>
      <div>
        <LessonForm />
        <LessonDetails />

        <StudentForm />
        <StudentDetails />
      </div>
    </>
  );
}
