//import { Menu } from 'antd';
import React from 'react';
//simport { Link } from 'react-router-dom';
import icon from '../images/logo.png';
//import {HomeOutlined} from '@ant-design/icons';
import {LeftbarData} from './LeftbarData';

function leftBar() {
  return (
    <div className="nav-container">
        <div className="logo-container">
           <img src={icon} alt="" className='logo' />
           <h1>Name</h1>
        </div>
        <div className="section">
            <div className="sidebar">
                 <ul className='sideList'>
                 {LeftbarData.map((val,key)=>{
                    return(
                         <li key={key} className='row'>
                            {""}
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                        </li>
                        );
                    })}
                </ul>
             </div>
             <div className="Sidebar2">
               <div className="button">
                 <div className="one">
                   <img src={icon} alt="" />
                   <h1>$0.90</h1>
                 </div>
                 <div className="two">
                   <h1>Buy$XYZ</h1>
                 </div>
               </div>
             </div>
         </div>
    </div>
  );
};

export default leftBar;