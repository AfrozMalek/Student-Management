import React, { useState } from "react";
import StudentList from "./components/StudentList";
import StudentFormPage from "./components/StudentFormPage";

function App() {
  const [students, setStudents] = useState([
    {
      name: "Afroz Malek",
      email: "afroz.malek@example.com",
      phone: "987654321",
      marks: "90",
      pass: true,
    },
    {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "1234567890",
      marks: "40",
      pass: true,
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "9876543210",
      marks: "30",
      pass: false,
    },
    {
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      phone: "5551234567",
      marks: "28",
      pass: false,
    },
    {
      name: "Alice Williams",
      email: "alice.williams@example.com",
      phone: "7775559999",
      marks: "50",
      pass: true,
    },
    {
      name: "Michael Brown",
      email: "michael.brown@example.com",
      phone: "4443332222",
      marks: "80",
      pass: true,
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleFormSubmit = (student) => {
    const existingStudentIndex = students.findIndex(
      (s) => s.email === student.email
    );
    if (existingStudentIndex !== -1) {
      const updatedStudents = [...students];
      updatedStudents[existingStudentIndex] = student;
      setStudents(updatedStudents);
    } else {
      setStudents([...students, student]);
    }
    setIsEditing(false);
    setSelectedStudent(null);
  };

  const handleEdit = (student) => {
    setIsEditing(true);
    setSelectedStudent(student);
  };

  const handleDelete = (email) => {
    const updatedStudents = students.filter(
      (student) => student.email !== email
    );
    setStudents(updatedStudents);
  };

  return (
    <div style={{ margin: "0 20px" }}>
      <h1>
        <center>Student Management App</center>
      </h1>
      <StudentList
        students={students}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {isEditing ? (
        <div>
          <h2>Edit Student</h2>
          <StudentFormPage
            onSubmit={handleFormSubmit}
            student={selectedStudent}
          />
        </div>
      ) : (
        <div>
          <h2>Create Student</h2>
          <StudentFormPage onSubmit={handleFormSubmit} />
        </div>
      )}
    </div>
  );
}

export default App;