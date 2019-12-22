import React from 'react';
import st from './header.module.css'
import Burger from './burger'

const Header = (props) => {
  return (
    <div className={st.Header}>
              <div className={st.Hitems} >

                   <a href='https://instagram.com/oliviabailey.interiors?igshid=1jfdgrp02xyq0'>Olivia Tkachenko</a>

                    <Burger/>
                    
              </div>
    </div>
  );
}

export default Header;