import React from 'react';
import { ToolBar } from './components/ToolBar';
import { AboutMe } from './components/AboutMe';
import { SkillsExperience } from './components/Skills';
import {SectionWorks} from './components/Works'
import { ConatactUs } from './components/ContactUs';

function App() {
  return (
    <div className="App">
       <header>
         <ToolBar />
       </header>
       <main>
        <AboutMe />
        <SkillsExperience />
        <SectionWorks />
        <ConatactUs />
       </main>
    </div>
  );
}

export default App;
