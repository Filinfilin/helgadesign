import React from 'react';
import imges1 from './imges/1.jpg';
// import imges2 from './imges/2.jpg';
// import imges3 from './imges/3.png';
// import imges4 from './imges/4.jpg';
// import imges5 from './imges/5.png';
// import imges6 from './imges/6.png'
import st from './designitem.module.css';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'




const DesignItem =(props)=>{



    return (
           
  

            <div className={st.item}>
                <img className={st.pic} alt="1"src = {imges1}></img>
                <div>краткий текст о дизайне о том как он
                    делался о том какие у него собенности 
                    лорен ипсум итак далее и много всего того
                    чего вы хотели бы прочитать но стеснялись 
                    спросить привыет как дела я тут дживу и тыы
                    тоже приве привет как дела привет
                </div>
                        
                   
            
            
            </div>


    )





}

export default DesignItem