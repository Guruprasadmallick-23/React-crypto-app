import React from 'react';
import './App.css';
import Navbar from './Navbar';

import { GlobalStyle } from './globelstyle';
import LeftBar from './LeftBar/LeftBar';
import Home from './Home/Home'
import RightBar from './rightBar/RightBar';


 
function App() {
    return(
    <>
     <div>
        <GlobalStyle/>
        <Navbar/>
     
     <div className="app">
          <div className="left-side"><LeftBar /></div>
          <div className="center"><Home/></div>
          <div className="right-side"><RightBar/></div>

     </div>
     </div>
</>
    );  
};

export default App;
