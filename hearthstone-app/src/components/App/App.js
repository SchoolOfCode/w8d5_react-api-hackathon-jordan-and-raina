import React, { useEffect, useState } from "react";
import './App.css';

const testResults = [ {
  "cardId":"TB_BaconShop_HERO_53",
  "dbfId":"60370",
  "name":"Ysera",
  "cardSet":"Battlegrounds",
  "type":"Hero",
  "faction":"Neutral",
  "health":40,
  "playerClass":"Neutral",
  "img":"https://d15f34w2p8l1cc.cloudfront.net/hearthstone/04015b4f36a332ad359d494e7cf095fc05e90f6f34487be0130b330631b38251.png",
  "imgGold":"https://d15f34w2p8l1cc.cloudfront.net/hearthstone/ac4694f6807fa55c2698b0d7b00a325cc54528ba6525f8b18084e6222f233404.png",
}];

function App() {
  const [ results, setResults ] = useState(testResults);  



  return (
    <div className="App">
      
    

    </div>
  );
}

// <SearchBar >  </SearchBar> // use this to assign a variable with search thing 
// search results use as prop?
// function for each 


export default App;
