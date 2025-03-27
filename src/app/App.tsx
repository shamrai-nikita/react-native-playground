import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from "../components/buttons";
import MainScreen from "../components/mainScreen/MainScreen";
import React from "react";
import Card from "../components/posts/Card";
import {ListingDetails} from "../components/listing";
import ViewImage from "../components/viewImage";
import Messages from "../components/messages";

export default function App() {
  return (
      <Messages/>
      //<ViewImage/>
      //  <ListingDetails/>
      //  <MainScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
