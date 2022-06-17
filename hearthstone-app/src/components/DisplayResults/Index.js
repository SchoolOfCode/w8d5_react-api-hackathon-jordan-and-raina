import React from 'react'

function DisplayResults({results}) {
    console.log(results)
      return (
      <div>
        <ul>
          {results.map((item) => {     
              if (item.img){
                  return (
                  <div>
                      <img src ={item.img} alt={item.name}/> 
                      <h4> {"Card Name: " + item.name}</h4> 
                      <h4> {"Card Set: " + item.cardSet}</h4>
                      <h4> {"Type: " + item.type}</h4> 
                      <h4> {"Faction: " + item.faction}</h4>
                      <h4> {"Health: " + item.health}</h4>
                      <h4> {"Player Class: " + item.playerClass}</h4>
                  </div>)
                  }    
              })
          }
        </ul>
      </div>
    )
  }

export default DisplayResults;