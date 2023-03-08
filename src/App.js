import './App.css';
import { useState } from 'react';
import Landing from './Components/Landing';
import AssessmentQuestions from './Components/AssessmentQuestions';
import { Data } from './Components/Data'

function App() {

  const [currentPage, setCurrentPage] = useState('Landing');
  const [data, setData] = useState([...Data]);

const  startAssessmengt =()=>{
  setCurrentPage('Questions')
}

  return (
    <div className="App">
      { currentPage==='Landing' ? 
        <Landing startAssessmengt={startAssessmengt}/>
        : <AssessmentQuestions data={data} />}
    </div>
  );
}

export default App;
