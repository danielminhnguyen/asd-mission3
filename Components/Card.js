import * as React from "react";
import { Linking } from "react-native";
import { StyleSheet } from "react-native";
import { Card, Text, Paragraph } from "react-native-paper";

const CustomCard = (props) => {
  return (
    <React.Fragment>
      <Card style={styles.container}>
        <Card.Content style={{ flexDirection: "column" }}>
          <Text
            style={{ fontWeight: "bold" }}
            onPress={() => Linking.openURL(props.url)}
          >
            {props.name}
          </Text>
          <Paragraph style={{ marginTop: 15 }}>
            <Text>{props.snippet}</Text>
          </Paragraph>
        </Card.Content>
      </Card>
    </React.Fragment>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    margin: 10,
  },
  horizontalLine: {
    width: 335,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginHorizontal: 15,
    paddingVertical: 5,
  },
});
