
import './App.css';
 

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Header from 'components/mainLeft/header';
import Experience from 'components/mainLeft/Experience';
import Education from 'components/mainLeft/Education';
import Skill from 'components/mainLeft/Skill';


function App() {
  return (
    <div className="App">
        <Header />
        <Experience />
        <Education />
        <Skill />
    </div>
  );
}

export default App;
