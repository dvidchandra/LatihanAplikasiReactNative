import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import legion from './legion.jpg';

const StylingReactNativeComponent = () => {
    return (
      <View>
        <Text style={styles.text}>Styling Component</Text>
        <View style={{
          width: 100, 
          height: 100, 
          backgroundColor: 'blue', 
          borderWidth: 2, 
          borderColor: 'cyan',
          marginTop: 20,
          marginLeft: 20
          }}
        />
        <View style={{
          padding: 15, 
          backgroundColor: '#f2f2f2', 
          width: 212,
          borderRadius: 8,
        }}
          >
          <Image 
          source={legion} 
          style={{
            width: 150, 
            height: 150,
            borderRadius: 8,
          }} 
            />
            <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 10}}>Lenovo Legion 5</Text>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: 'orange', marginTop: 10}}>Rp. 16.999.000</Text>
            <Text style={{fontSize: 12, marginTop: 10}}>Medan</Text>
            <View style={{
              backgroundColor: 'green',
              fontSize: 16,
              paddingVertical: 10,
              marginTop: 10,
              borderRadius: 8
            }}
            >
              <Text style={{color: 'white', textAlign: 'center'}}>BELI</Text>
            </View>
        </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'green',
      marginLeft: 20,
      marginTop: 40,
    }
  })

  export default StylingReactNativeComponent;