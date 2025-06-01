import React, { useState } from "react";

const Authentication = () => {
  const [role, setRole] = useState("");

  return (
    <div>
      <h2>Login / Sign Up</h2>
      <button onClick={() => setRole("Student")}>Student</button>
      <button onClick={() => setRole("Teacher")}>Teacher</button>
      {role && <h3>Selected Role: {role}</h3>}
    </div>
  );
};

export default Authentication;