import React from 'react'


 function DisplayResults({results}) {
  let resultsArray = [...results]
  return (
    <div>
      <p>
      {resultsArray}
      </p>
    </div>
  )
}

export default DisplayResults;