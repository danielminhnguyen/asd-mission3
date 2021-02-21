import * as React from "react";
import CustomCard from "../Components/Card";
// import SearchBar from "../Components/SearchBar";
import { SearchBar } from 'react-native-elements';

import { ScrollView, Text } from "react-native";
import { useState } from "react";

const SearchRoute = () => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState("")

  const handleChange = (value) => {
    setQuery(value)
    if (value != "") {
      getResultsFromApi(value)
    } else {
      setResults("")
    }
  }

  const getResultsFromApi = (query) => {
    // setQuery(value)
    return fetch(`https://api.bing.microsoft.com/v7.0/custom/search?q=${encodeURI(query)}&customconfig=a6bfc8a8-f842-4f80-808b-704504bc46cd&mkt=en-US`, {
      method: 'GET',
      headers: {
        "Ocp-Apim-Subscription-Key":"d02ad271b9374c03896d64a2a6e72fa1",
      }
    })
    .then((response) => response.json())
    .then((json) => {
      setResults(json.webPages.value)
    })
    .catch((error) => console.log(error))
  }
  
  // console.log("result " + JSON.stringify(getResultsFromApi()))
  return (
    <React.Fragment>
      <SearchBar 
        placeholder="I am looking for"
        value={query}
        onChangeText={handleChange}
      />
      <ScrollView>
        {
        results?
        results.map((ele) => (
          <CustomCard
            key={ele.id}
            url={ele.url}
            name={ele.name}
            snippet={ele.snippet}
          />
        )) : (<Text></Text>)
        }
      </ScrollView>
    </React.Fragment>
  );
};

export default SearchRoute;
