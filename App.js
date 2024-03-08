import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Navigator from "./src/Config/Navigation";

export default function App() {
  const [isCamera, setIsCamera] = useState(false);
  const [list, setList] = useState([]);
  useEffect(() => {
    console.log(list);
  }, [list]);
  console.log(isCamera);
  return (
   <Navigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:600
    // backgroundColor: "#3d3d3d",
    // width:,
    // justifyContent: "space-between",
    // alignItems: "center",
  },
  cameraBtn: {
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
    padding: 5,
    marginBottom:30,
    fontSize: 20,
  },
});
