import React from "react";
import "./style/global.scss";
import "./style/page.scss";
import Header from "./components/common/Header";
import AboutMe from "./components/AboutMe";

const Skills = React.lazy(() => import("./components/Skills"));
const Projects = React.lazy(() => import("./components/Projects"));
const Contact = React.lazy(() => import("./components/Contact"));
const Career = React.lazy(() => import("./components/Career"));

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Projects />
        <Skills />
        <Contact />
        <Career />
      </React.Suspense>
    </div>
  );
}

export default App;
