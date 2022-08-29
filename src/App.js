import logo from './logo.svg';
import React from 'react';
import './App.css';
import './index.css';
import {Landing} from './component/landingpage'
import useNavigate from 'react-router-dom'

function App() {

  let navigate = useNavigate();
  return (
    
    <div className="App">

    
      <div className='font-bold-text-3xl text-green-700'>Project Penjana Ainun</div>
      <p>Welcome to Ainun Project</p>
      <p>Welcome to Ainun Project2</p>

      <button className='border-2' onClick={()=> navigate('/myprofile')}>Go to myprofile</button>


        
    </div>
    
  );
}

export default App;
