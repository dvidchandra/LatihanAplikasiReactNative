import React, {Component} from 'react';
import {
    View, 
    Text, 
    TextInput,
    Image
} from 'react-native'

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

  export default SampleComponent;