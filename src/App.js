import React from 'react';
import Footer from './modules/footer'
import Main from "./modules/main"
import Header from "./modules/header";
import st from "./app.module.css";



function App() {
  return (
    <div className={st.App}>
    
                <Header />
                

                
                  <Main />



                <Footer/>
                    
    </div>
 
  
   );
}

export default App;
