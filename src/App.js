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

  const element = React.createElement(
    "button",
    {
      className:"btn",
      onClick:() => alert("Clicked!"),

    },
    "Click Me"
  );

  return(
    <div>
      <welcome>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">News</a></li>
          <p>Welcome</p>
          {theme}
        </ul>
      <div>{element}</div>
        </welcome>
      </div>
  )

}

export default App;
