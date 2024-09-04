import React, { useRef } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_LESSON } from "../graphql-query/Query";

interface UpdateLessonModalProps {
  isOpen: boolean;
  onClose: () => void;
  lesson: {
    id: string;
    startDate: string;
    endDate: string;
    name: string;
  } | null;
}

const UpdateLessonModal: React.FC<UpdateLessonModalProps> = ({
  isOpen,
  onClose,
  lesson,
}) => {
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const [updateLesson] = useMutation(UPDATE_LESSON);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !startDateRef.current?.value ||
      !endDateRef.current?.value ||
      !nameRef.current?.value
    ) {
      return;
    }

    try {
      await updateLesson({
        variables: {
          id: lesson?.id,
          data: {
            startDate: startDateRef.current.value,
            endDate: endDateRef.current.value,
            name: nameRef.current.value,
          },
        },
      });
      onClose(); // Close the modal after updating
    } catch (err) {
      console.error("Failed to update lesson:", err);
    }
  };

  return (
    isOpen &&
    lesson && ( // Ensure student is not null before rendering the modal
      <div className="modal">
        <div className="modal-content">
          <h4>Update Lesson</h4>
          <form onSubmit={handleUpdate}>
            <div className="input-field">
              <input
                id="startDate"
                ref={startDateRef}
                defaultValue={lesson.startDate}
                placeholder="Start Date"
                required
              />
              <label htmlFor="startDate"></label>
            </div>
            <div className="input-field">
              <input
                id="endDate"
                ref={endDateRef}
                defaultValue={lesson.endDate}
                placeholder="End Date"
                required
              />
              <label htmlFor="endDate"></label>
            </div>
            <div className="input-field">
              <input
                id="name"
                ref={nameRef}
                defaultValue={lesson.name}
                placeholder="Lesson Name"
                required
              />
              <label htmlFor="name"></label>
            </div>

            <button type="submit" className="btn">
              Update
            </button>
            <button type="button" className="btn" onClick={onClose}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default UpdateLessonModal;
