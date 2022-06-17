import React, { useState } from 'react'

/*
   function to 
*/

function SearchBar() {
  
  const [ input, setInput ] = useState("")  

  function handleInput(event) {
    // This function tracks the string information typed into the input field.
    const value = event.target.value;
    setInput(value);
  }

  function handleClick() {
    
    
    setInput();
  }

  return (
    <section>
      <input value={state} onChange={handleInput} />
      <button className="" onClick={handleClick}>
        {buttonText}
      </button>
    </section>
  );
};
  
  


export default SearchBar;