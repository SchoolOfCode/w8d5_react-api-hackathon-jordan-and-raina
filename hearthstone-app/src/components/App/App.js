import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "../SearchByCard";
import DisplayResults from "../DisplayResults/Index";

const testResults = [
  // {
  //   cardId: "TB_BaconShop_HERO_53",
  //   dbfId: "60370",
  //   name: "Ysera",
  //   cardSet: "Battlegrounds",
  //   type: "Hero",
  //   faction: "Neutral",
  //   health: 40,
  //   playerClass: "Neutral",
  //   img: "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/04015b4f36a332ad359d494e7cf095fc05e90f6f34487be0130b330631b38251.png",
  //   imgGold:
  //     "https://d15f34w2p8l1cc.cloudfront.net/hearthstone/ac4694f6807fa55c2698b0d7b00a325cc54528ba6525f8b18084e6222f233404.png",
  // },
];

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "984be2a920mshe6ae60ceea01d08p12a336jsnc11fcc90a8d6",
    "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
  },
};

function App() {
  const [results, setResults] = useState(testResults);

  async function searchByUserInput(searchedText) {
    const response = await fetch(
      `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${searchedText}`,
      options
    );
    const data = await response.json();
    const searchResults = data;
    if (data.error = "404"){
      results = data.message;
    };
    else{
    }
    setResults(searchResults);
    console.log(results);
  }
  }

  return (
    <div className="App">
    <h1>
      Hearthstone Cards
    </h1>
      <div id="ResultsList">
        <SearchBar
          searchByUserInput={searchByUserInput}
          buttonText={"search"}
        />
      </div>
      <DisplayResults results={results}/>
    </div>
  );
}

// <SearchBar >  </SearchBar> // use this to assign a variable with search thing
// search results use as prop?
// function for each

export default App;
