import React from "react";
import StudentForm from "./StudentForm";

const StudentFormPage = ({ onSubmit, student }) => {
  return (
    <div style={{ margin: "0 20px" }}>
      <h2>Edit Student</h2>
      <StudentForm onSubmit={onSubmit} student={student} />
    </div>
  );
};

export default StudentFormPage;