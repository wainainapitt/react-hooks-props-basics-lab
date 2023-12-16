import React from "react";
import Links from "./Links"; // Import Links component

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* Conditional rendering of bio */}
      {bio && <p>{bio}</p>}
      {/* Pass github and linkedin props down to Links component */}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
