import React from 'react';
import st from './designitems.module.css';
import imges1 from './imges/1.jpg';
import imges2 from './imges/2.jpg';
import imges3 from './imges/3.png';
import imges4 from './imges/4.jpg';
import imges5 from './imges/5.png';
import imges6 from './imges/6.png'




const DesignItems = (props) => {

// let designdata =[

//     {id: 1, src:{}}  , description: 'description of the project', name: 'Project1'},
//     {id: 2, src: './imges/2.jpg', description: 'description of the project', name: 'Project2'},
//     {id: 3, src: './imges/2.jpg', description: 'description of the project', name: 'Project3'},
//     {id: 5, src: './imges/2.jpg'
//     , description: 'description of the project', name: 'Project5'},
//     {id: 6, src: './imges/2.jpg'
//     , description: 'description of the project', name: 'Project6'},
//     {id: 7, src: './imges/2.jpg'
//     , description: 'description of the project', name: 'Project7'}



// ]

// let dataMapping = designdata.map( images => <div className={st.Img,'+', images.id}><div className={st.img}><img src={images.img} alt='*'/>{images.name}</div></div>)




  return (
              <div className={st.Galerea}>
                            
                          {/* {dataMapping} */}
                      

                          {/* <img src={designdata[0].img} alt='*'/>
                          <img src={designdata[0].img} alt='*'/>
                          <img src={designdata[0].img} alt='*'/>
                         <img src={designdata[0].img} alt='*'/>
                          <img src={designdata[0].img} alt='*'/>
                          <img src={designdata[0].img} alt='*'/> */}


                          <div className={st.design1}><img alt ='d' src ={imges1}></img></div>
                          <div className={st.design2}><img alt ='d' src ={imges2}></img></div>                          
                          <div className={st.design3}><img alt ='d' src ={imges3}></img></div>
                          <div className={st.design4}><img alt ='d' src ={imges4}></img>}</div>
                          <div className={st.design5}><img alt ='d' src ={imges5}></img></div>
                          <div className={st.design6}><img alt ='d' src ={imges6}></img></div>


            
              </div>
  
  );
}

export default DesignItems;