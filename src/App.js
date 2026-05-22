import React from "react";
import themeimg from "./images.jpg";

function App() {
  const message = "Hello,Jaffna";
  const paragraph = 'Computer Science';

  const PI = 3.14159;
  const description = 'The value of PI is approximately ${PI}.';

  const theme =<img src={themeimg} alt="Theme for website"/>

  const welcome = (props)=>{
    return <div>{props.children}</div>
  }

  return(
    <welcome>
      <ul>
        <li><a href="#"/></li>
      </ul>
    
      </welcome>
  )

}

export default App;
