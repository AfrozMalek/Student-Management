import React, { useState, useEffect } from "react";

const StudentForm = ({ onSubmit, student }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    marks: "",
    pass: false,
  });

 
  useEffect(() => {
    if (student) {
      setFormData(student);
    } else {
      setFormData({
        name: "",
        email: "",
        phone: "",
        marks: "",
        pass: false,
      });
    }
  }, [student]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "10px" }}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              padding: "5px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "10px" }}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              padding: "5px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "10px" }}>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{
              padding: "5px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "10px" }}>Marks:</label>
          <input
            type="number"
            name="marks"
            value={formData.marks}
            onChange={handleChange}
            style={{
              padding: "5px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "10px" }}>Pass:</label>
          <input
            type="checkbox"
            name="pass"
            checked={formData.pass}
            onChange={handleChange}
            style={{ marginRight: "5px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#007bff", 
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {student ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
