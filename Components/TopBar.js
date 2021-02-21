import * as React from "react";
import { Image, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const TopBar = () => (
  <Appbar.Header>
    {/* <Image style={{width:100, height:50}} source={{uri: "https://www.payplus.co.nz/wp-content/uploads/2019/07/turners-logo.png"}}/> */}
    <Appbar.Content title="Turner" subtitle="0800 887 637"/>
  </Appbar.Header>
);

export default TopBar;

const styles = StyleSheet.create({
  img: {
    width: 400,
    height: 400,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#4169E1",
    margin: 10,
  }
});