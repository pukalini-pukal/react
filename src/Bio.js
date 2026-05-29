import React from "react";

function Bio(){
    const FirstName = "Pukalini";
    const LastName = "Kajuran";


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
        <h1>My name is {FirstName}</h1>
        <div>{element}</div>
        
    </div>

  )
}
export default Bio;