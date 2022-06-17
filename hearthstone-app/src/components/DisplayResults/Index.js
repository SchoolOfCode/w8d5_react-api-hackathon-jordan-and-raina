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
          {item.img? <h4> {"Card Name: " + item.name}</h4> : <p></p> }
          {item.img? <h4> {"Card Set: " + item.cardSet}</h4> : <p></p> }
          {item.img? <h4> {"Type: " + item.type}</h4> : <p></p> }
          {item.img? <h4> {"Faction: " + item.faction}</h4> : <p></p> }
          {item.img? <h4> {"Health: " + item.health}</h4> : <p></p> }
          {item.img? <h4> {"Player Class: " + item.playerClass}</h4> : <p></p> }
          </div>
        )
      })
      }
      </ul>
    </div>
  )
}

export default DisplayResults;