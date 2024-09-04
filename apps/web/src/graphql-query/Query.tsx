import { gql } from "@apollo/client";

// --------- QUERY----------//
export const GET_LESSON = gql`
  query GetLessons {
    lessons {
      id
      name
      startDate
      endDate
    }
  }
`;

export const GET_STUDENTS = gql`
  query {
    students {
      id
      firstName
      lastName
    }
  }
`;

// --------- MUTATIONS----------//
export const CREATE_LESSON = gql`
  mutation CreateLesson($createLessonInput: CreateLessonInput!) {
    createLesson(createLessonInput: $createLessonInput) {
      id
      name
      startDate
      endDate
    }
  }
`;

export const DELETE_LESSON = gql`
  mutation DeleteLesson($id: String!) {
    deleteLesson(id: $id)
  }
`;

export const UPDATE_LESSON = gql`
  mutation UpdateLesson($id: String!, $data: UpdateLesson!) {
    updateLesson(id: $id, data: $data) {
      id
      name
      startDate
      endDate
    }
  }
`;

export const CREATE_STUDENT = gql`
  mutation CreateStudent($createStudentInput: CreateStudentInput!) {
    createStudent(createStudentInput: $createStudentInput) {
      id
      firstName
      lastName
    }
  }
`;

export const DELETE_STUDENT = gql`
  mutation DeleteStudent($id: String!) {
    deleteStudent(id: $id)
  }
`;

export const UPDATE_STUDENT = gql`
  mutation UpdateStudent($id: String!, $data: UpdateStudent!) {
    UpdateStudent(id: $id, data: $data) {
      id
      firstName
      lastName
    }
  }
`;
