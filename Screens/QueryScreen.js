import * as React from "react";
import { TextInput, Button } from "react-native-paper";
import { useState } from "react";
import { StyleSheet, ScrollView, View, Text, SafeAreaView } from "react-native";



export default function Support() {
    const [text, setText] = useState("")

    const [results, setResults] = useState("")

  const handleClick = () => {
      getResultsFromApi(text)
  }

  const getResultsFromApi = (query) => {
    // setQuery(value)
    return fetch(`https://luis-turner.cognitiveservices.azure.com/luis/prediction/v3.0/apps/cb0417f2-3d76-4f2e-86ba-569de649d5ea/slots/production/predict?subscription-key=69c2f0ced4b942f6bf90d177a9eeefe8&verbose=true&show-all-intents=true&log=true&query=${query}`, {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((json) => {
      setResults(JSON.stringify(json.prediction))
    })
    .catch((error) => console.log(error))
  }
  

    return (
        <>  
            <View style={{alignContent: "center", flex:1}}>
                <TextInput
                label="Query"
                style={styles.input}
                value={text}
                onChangeText={text => setText(text)}
                placeholder="Please type your query here"
                />
                <Button mode="contained" onPress={handleClick}>
                Submit
                </Button>
                {results ? 
                // results.intents.map(item => (
                 
                        <ScrollView styles={{height: 200}}>
                            <Text>{results}</Text>
                        </ScrollView>
                 
                // ))
                : <Text></Text> 
                }
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    input: {
      margin: 10,
      borderRadius: 0,
      height: 100,
    },
    img: {
      width: 40,
      height: 40,
      borderRadius: 50,
      borderWidth: 3,
      borderColor: "#4169E1",
      margin: 10,
    },
    contentStart: { flexDirection: "row", alignItems: "flex-start" },
    contentEnd: { flexDirection: "row", alignItems: "flex-end" },
    horizontalLine: {
      width: 335,
      borderBottomColor: "#ccc",
      borderBottomWidth: 1,
      marginHorizontal: 15,
      paddingVertical: 5,
    },
    action: { flexDirection: "row", paddingTop: 5 },
  });