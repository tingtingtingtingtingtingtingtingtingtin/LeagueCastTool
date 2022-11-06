import React, { useState, useEffect } from "react";
import "./Header.css";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [name, setName] = useState(null);
  const [searchPressed, setSearchPressed] = useState(false);

  function getName(event){
    setName(event.target.value);
    console.warn({name}[1]);
  }
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left">
          <h1>
            <span>Big Text</span>
            <span>uwu text</span>
            <span>uwu text</span>
          </h1>
          <input type='text' onChange={getName}/>
          <div className="header-cta">
            <button onClick={()=>setSearchPressed(true)}>SEARCH</button>
          </div>
        </div>
        <div className='header-right'>
          <h1>
            {searchPressed? {name} : null}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Header;
