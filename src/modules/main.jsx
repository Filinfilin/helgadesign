import React from 'react';
import st from './main.module.css'
import DesignItems from './designitems'

const Main =(props)=>{
  return (
    <div className={st.Main}>

               <DesignItems/>
               
    </div>
  );
}

export default Main;