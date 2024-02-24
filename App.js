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
import Camera from "./src/components/Camera";

export default function App() {
  const [isCamera, setIsCamera] = useState(false);
  const [list, setList] = useState([]);
  useEffect(() => {
    console.log(list);
  }, [list]);
  console.log(isCamera);
  return (
    <ScrollView >
      <View style={styles.container}>
      {isCamera ? (
        <Camera
          isCamera={isCamera}
          setIsCamera={setIsCamera}
          list={list}
          setList={setList}
        />
      ) : (
        <>
          <TouchableOpacity
            onPress={() => setIsCamera(true)}
            style={styles.cameraBtn}
          >
            <Text style={styles.cameraBtn}>Open Camera</Text>
          </TouchableOpacity>
          <View style={{display:"flex", justifyContent:'center', alignItems:"center"}}>
            {list.map((item) => (
              <View style={{ width: 300,borderWidth:2 , borderColor:"black", display:'flex', alignItems:"center", marginTop:10 }}>
                <Image source={{ uri: item.image }} width={200} height={200} />
                <Text style={{fontSize:30}}>{item.text}</Text>
              </View>
            ))}
          </View>
        </>
      )}
      </View>
      <StatusBar style="auto" />
    </ScrollView>
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
