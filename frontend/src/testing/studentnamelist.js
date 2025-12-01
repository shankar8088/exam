 import React from "react";

function Student() {
  // Array of student names
  const studentNames = ["Sannidhi", "Manasa", "Veeksha", "Thursha", "Lakshmi"];

  return (
    <div>
      <h2>Student List</h2>
      <ul>{studentNames.map((name, index) => ( 
        <li key={index}>{name}</li> ))}
      </ul>
    </div>
  );
}

export default Student;
