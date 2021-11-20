import React from "react";
import Main from "./Main/Main";
import About from "./About/About";
import OurStory from "./OurStory/OurStory";
import Services from "./ServicesFolder/Services";
import Contacts from "./Contacts/Contacts";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Main />
      <About />
      <OurStory />
      <Services />
      <Contacts />
    </div>
  );
};

export default App;
