import React from 'react'


 function DisplayResults({results}) {
  console.log(results)
    return (
    <div>
      <ul>
      {results.map((item) => {
        return (
          <div>
          {item.img? <img src ={item.img} alt={item.name}/> : <></> }
          {item.img? <h4> {item.name}</h4> : <p></p> }
          </div>
        )
      })
      }
      </ul>
    </div>
  )
}

export default DisplayResults;