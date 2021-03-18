import React from 'react';
import {
  Image,
  Text,
  TextInput,
  View
} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: 'grey'}} />
      <Text>David Chandra</Text>
      <Handsome />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
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

export default App;