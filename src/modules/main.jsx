
import st from './main.module.css'
import DesignItems from './designitems';
import React from 'react'
import DesignItem from './designitem';
import state from './state.js'
import { BrowserRouter, Route, Link } from "react-router-dom";



class Main extends React.Component {

constructor(props){
  super(props);
this.state = {
  clicked: state.clicked
}

}




  


render(){

  return (

    <div className={st.Main}>
           <BrowserRouter>
                           <Route path="/galerea" render = {()=><DesignItems/>}/>
                         <Route path="/description" render = {()=><DesignItem/>}/>
            </BrowserRouter> 
               
    </div>
  );
}
}



export default Main;