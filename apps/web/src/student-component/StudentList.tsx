import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_STUDENTS, DELETE_STUDENT } from "../graphql-query/Query";
import UpdateStudentModal from "./UpdateStudentModal"; // Import the modal

interface Student {
  id: string;
  firstName: string;
  lastName: string;
}

const StudentDetails = () => {
  // Get Students
  const { loading, error, data } = useQuery<{ students: Student[] }>(
    GET_STUDENTS
  );

  // Delete Student
  const [deleteStudent] = useMutation(DELETE_STUDENT, {
    refetchQueries: [{ query: GET_STUDENTS }], // Refetch the students query after deleting a student
  });

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedStudent, setSelectedStudent] = React.useState<Student | null>(
    null
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const students = data?.students;

  if (!students) {
    return <p>No students found.</p>;
  }

  // Delete Student
  const handleDelete = async (id: string) => {
    try {
      await deleteStudent({ variables: { id } });
    } catch (err) {
      console.error("Failed to delete student:", err);
    }
  };

  const handleOpenModal = (student: Student) => {
    console.log("Selected student:", student); // Log the selected student
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  return (
    <>
      <div className="row">
        {students.map((student: Student) => (
          <div className="col s12 m6 l4" key={student.id}>
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Student Info</span>
                <p>Student ID: {student.id}</p>
                <p>First Name: {student.firstName}</p>
                <p>Last Name: {student.lastName}</p>
              </div>
              <div className="card-action">
                <button
                  onClick={() => handleDelete(student.id)}
                  className="btn waves-effect red"
                >
                  Delete
                </button>

                <button
                  onClick={() => handleOpenModal(student)}
                  className="btn waves-effect blue"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen &&
        selectedStudent && ( // Check if modal is open and selectedStudent is not null
          <UpdateStudentModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            student={selectedStudent} // Pass the selected student safely
          />
        )}
    </>
  );
};

export default StudentDetails;
