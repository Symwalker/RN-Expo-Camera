import { Camera, CameraType } from "expo-camera";
import { useRef, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CustomButton from "./CustomButton";

export default function App({setIsCamera, list, setList}) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [image, setImage] = useState(null);
  const [text, setText] = useState()
  const cameraRef = useRef();
  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  async function takePicture() {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        // console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  }
  const onChangeText = (text) => {
    // console.log(text);
    setText(text)
  }
  const saveImage = (image) => {
    setIsCamera(false)
    const objtoSave = {
      image,
      text
    }
    const copyList = [...list]
    copyList.push(objtoSave)
    setList(copyList)

    // console.log(objtoSave);
  }
  return (
    <View style={styles.container}>
      {image ? (
        <>
          <Image source={{ uri: image }} style={styles.picture} />
          <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Enter Text"
        // value={text}
      />
      <View style={{display:'flex', backgroundColor:"black", flexDirection:"row", justifyContent:"space-between", paddingHorizontal:40,padding:30 }}>

          <CustomButton onPress={()=>setImage(null)} title={"Retake"} />
          <CustomButton onPress={()=>saveImage(image)} title={"Save"} />
      </View>
        </>
      ) : (
        <Camera style={styles.camera} type={type} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Text style={styles.text}>Take Picture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  picture: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "row",
    // backgroundColor: '#fff',
    justifyContent: "space-between",
    marginBottom: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  input:{
    paddingVertical:16,
    paddingHorizontal:8,
    fontSize:25

  }
});
