import { View, Text, Button, TouchableOpacity, StyleSheet, Image } from 'react-native';



export default function Dashboard({navigation}) {

 
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ5VDtLBa4AO-BxzLnhcO2fRlmOd4x5BNMnQ&usqp=CAU' }}
          style={{ width: 500, height: 500, marginBottom: 20 }}
        />
        <TouchableOpacity
          style={{
            width: '70%',
            backgroundColor: '#02A52F',
            padding: 10,
            borderRadius: 5,
            
          }}
          onPress={() => { 
            navigation.navigate('PickUp')
            console.log('Pickup button pressed');
          }}>
          <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Pickup</Text>
        </TouchableOpacity>
      </View>

    )

}