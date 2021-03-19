import React, {Component} from 'react';
import {
  Image,
  Text,
  TextInput,
  View,
  StyleSheet
} from 'react-native';
import legion from './legion.jpg'

const App = () => {
  return <StylingReactNativeComponent />
}

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

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: 'grey'}} />
      <Text>David Chandra</Text>
      <Handsome />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  )
}

const Handsome = () => {
  return (
    <View>
      <Text>Ganteng sekali tapi minta dihajar guys</Text>
      <Text>Seperti ini muka dia</Text>
      </View>
  )
}

const Photo = () => {
  return <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjg3S3DKgc4_mYv0O4U6zHo_WGMXA9GC8Tyw&usqp=CAU'}} style={{width: 100, height: 100}}/>
}

class BoxGreen extends Component {
  render() {
    return <Text>Muka kau macem kayak babi</Text>
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image source={{uri: 'https://www.wattagnet.com/ext/resources/Stock-Photos/pig-face.jpg'}} style={{width: 100, height: 100}}/>
        <Text>Iya itu muka kau</Text>
      </View>
    )
  }
}

export default App;