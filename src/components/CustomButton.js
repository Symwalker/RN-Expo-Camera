import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const CustomButton = ({title, onPress, color}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  
    button: {
     padding:5,
     fontSize:20,
     textAlign:'center',
     backgroundColor:"black",
     fontWeight: "bold",
     color: "white",

    },
   
  });
