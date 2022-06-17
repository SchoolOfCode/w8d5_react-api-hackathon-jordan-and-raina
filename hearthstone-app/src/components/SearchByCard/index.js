import React, { useState } from 'react'


function SearchBar({searchByUserInput, buttonText}) {
  
  const [ input, setInput ] = useState("")  

  function handleInput(event) {
    // This function tracks the string information typed into the input field.
    const value = event.target.value;
    setInput(value);
  }

   function handleClick() {
    searchByUserInput(input);
    setInput("");
    
  }



  return (
    <section>
      <input value={input} onChange={handleInput} />
      <button className="" onClick={handleClick}>
        {buttonText}
      </button>
    </section>
  );
};
  
  


export default SearchBar;