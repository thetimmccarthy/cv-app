import './App.css';
import General from './components/General'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience';
function App() {
  return (
    <div className="App" >
          <General className="App" />
          <br/>
          <Education />
          <br/>
          <WorkExperience />
    </div>
  );
}

export default App;
