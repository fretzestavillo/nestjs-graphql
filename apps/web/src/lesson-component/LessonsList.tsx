import { useMutation, useQuery } from "@apollo/client";
import { DELETE_LESSON, GET_LESSON } from "../graphql-query/Query";
import React from "react";
import UpdateLessonModal from "./UpdateLessonModal";

interface Lesson {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
}

const LessonDetails = () => {
  const { loading, error, data } = useQuery<{ lessons: Lesson[] }>(GET_LESSON);

  // Delete Lesson
  const [deleteLesson] = useMutation(DELETE_LESSON, {
    refetchQueries: [{ query: GET_LESSON }],
  });

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedLesson, setSelectedLesson] = React.useState<Lesson | null>(
    null
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const lessons = data?.lessons;

  if (!lessons) {
    return <p>No lessons found.</p>;
  }

  // Delete Lesson
  const handleDelete = async (id: string) => {
    try {
      await deleteLesson({ variables: { id } });
    } catch (err) {
      console.error("Failed to delete lesson:", err);
    }
  };

  const handleOpenModal = (lesson: Lesson) => {
    console.log("Selected lesson:", lesson); // Log the selected student
    setSelectedLesson(lesson);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedLesson(null);
  };

  return (
    <>
      <div className="row">
        {lessons.map((lesson: Lesson) => (
          <div className="col s12 m6 l4" key={lesson.id}>
            {" "}
            {/* Add key for each lesson */}
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{lesson.name}</span>
                <p>Lesson ID: {lesson.id}</p>
                <p>Start Date: {lesson.startDate}</p>
                <p>End Date: {lesson.endDate}</p>
              </div>
              <div className="card-action">
                <button
                  onClick={() => handleDelete(lesson.id)}
                  className="btn waves-effect red"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleOpenModal(lesson)}
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
        selectedLesson && ( // Check if modal is open and selectedStudent is not null
          <UpdateLessonModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            lesson={selectedLesson} // Pass the selected student safely
          />
        )}
    </>
  );
};

export default LessonDetails;
