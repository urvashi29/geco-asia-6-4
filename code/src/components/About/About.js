import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      About Our Team.
      <Link to="/home">Home</Link>
      {/* conditional rendering */}
      {/* {formValid ? <Dashboard /> : <Login />} */}
    </div>
  );
};

export default About;
