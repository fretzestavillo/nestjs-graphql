import React, { useRef } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_STUDENT } from "../graphql-query/Query";

interface UpdateStudentModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: {
    id: string;
    firstName: string;
    lastName: string;
  } | null; // Make sure student can also be null
}

const UpdateStudentModal: React.FC<UpdateStudentModalProps> = ({
  isOpen,
  onClose,
  student,
}) => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  const [updateStudent] = useMutation(UPDATE_STUDENT);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstNameRef.current?.value || !lastNameRef.current?.value) {
      return; // Handle case where input fields are empty if needed
    }

    try {
      await updateStudent({
        variables: {
          id: student?.id, // Ensure safe access to student.id
          data: {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
          },
        },
      });
      onClose(); // Close the modal after updating
    } catch (err) {
      console.error("Failed to update student:", err);
    }
  };

  return (
    isOpen &&
    student && ( // Ensure student is not null before rendering the modal
      <div className="modal">
        <div className="modal-content">
          <h4>Update Student</h4>
          <form onSubmit={handleUpdate}>
            <div className="input-field">
              <input
                id="firstName"
                ref={firstNameRef}
                defaultValue={student.firstName}
                placeholder="First Name"
                required
              />
              <label htmlFor="firstName"></label>
            </div>
            <div className="input-field">
              <input
                id="lastName"
                ref={lastNameRef}
                defaultValue={student.lastName}
                placeholder="Last Name"
                required
              />
              <label htmlFor="lastName"></label>
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

export default UpdateStudentModal;
