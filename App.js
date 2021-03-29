import React from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import Flexbox from './Flexbox';
import SampleComponent from './SampleComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';
import PositionReactNative from './PositionReactNative';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent />
        <Flexbox /> */}
        <PositionReactNative />
      </ScrollView>
    </View>
  )
}

export default App;