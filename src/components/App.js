import React from "react";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const user = {
    username: "Winny Chelangat",
    city: "Kericho",
    bio: "Extroverted",
    github: "https://github.com/winny52",
    linkedin: "https://linkedin.com/in/your-linkedin"
  };

  return (
    <div>
      <Home username={user.username} city={user.city} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
    </div>
  );
}

export default App;
