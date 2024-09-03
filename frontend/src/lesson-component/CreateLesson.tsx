import { useMutation } from "@apollo/client";
import { CREATE_LESSON, GET_LESSON } from "../graphql-query/Query";
import { useRef } from "react";

function LessonForm() {
  const input1Ref = useRef<HTMLInputElement>(null);
  const input2Ref = useRef<HTMLInputElement>(null);
  const input3Ref = useRef<HTMLInputElement>(null);

  const [addTodo, { data, loading, error }] = useMutation(CREATE_LESSON, {
    refetchQueries: [{ query: GET_LESSON }], // Refetch the students query after adding a student
    awaitRefetchQueries: true, // Ensure mutation waits for refetching
  });

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <>
      <div className="row">
        <form
          className="col s12"
          onSubmit={(e) => {
            e.preventDefault();

            addTodo({
              variables: {
                createLessonInput: {
                  startDate: input1Ref.current?.value,
                  endDate: input2Ref.current?.value,
                  name: input3Ref.current?.value,
                },
              },
            });

            if (input1Ref.current) input1Ref.current.value = "";
            if (input2Ref.current) input2Ref.current.value = "";
            if (input3Ref.current) input3Ref.current.value = "";
          }}
        >
          <div className="row">
            <div className="input-field col s6">
              <input
                style={{ color: "white" }}
                ref={input1Ref}
                placeholder="Start Date"
              ></input>
            </div>
            <div className="input-field col s6">
              <input
                style={{ color: "white" }}
                ref={input2Ref}
                placeholder="End Date"
              ></input>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                style={{ color: "white" }}
                ref={input3Ref}
                placeholder="Lesson Name"
              ></input>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Create Lesson
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    </>
  );
}

export default LessonForm;
