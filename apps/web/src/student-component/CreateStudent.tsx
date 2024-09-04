import { useMutation } from "@apollo/client";
import { useRef } from "react";
import { CREATE_STUDENT, GET_STUDENTS } from "../graphql-query/Query";

function StudentForm() {
  const input1Ref = useRef<HTMLInputElement>(null);
  const input2Ref = useRef<HTMLInputElement>(null);

  const [addStudent, { data, loading, error }] = useMutation(CREATE_STUDENT, {
    refetchQueries: [{ query: GET_STUDENTS }], // Refetch the students query after adding a student
    awaitRefetchQueries: true, // Ensure mutation waits for refetching
  });

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          addStudent({
            variables: {
              createStudentInput: {
                firstName: input1Ref.current?.value,
                lastName: input2Ref.current?.value,
              },
            },
          });

          // Resetting the values
          if (input1Ref.current) input1Ref.current.value = "";
          if (input2Ref.current) input2Ref.current.value = "";
        }}
      >
        <div className="row">
          <div className="input-field col s6">
            <input
              style={{ color: "white" }}
              ref={input1Ref}
              placeholder="First Name"
            />
          </div>
          <div className="input-field col s6">
            <input
              style={{ color: "white" }}
              ref={input2Ref}
              placeholder="Last Name"
            />
          </div>
        </div>

        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Add Student
          <i className="material-icons right">send</i>
        </button>
      </form>
    </>
  );
}

export default StudentForm;
