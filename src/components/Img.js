import React from 'react'


    const Img = () => {
  
        const message = () => {
         console.log("Hello World!") 
        }
        
        return (
        <button onClick={message}> Press me to print a message! </button>
          );
        }
export default Img;
