import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import ReturnScreen from "./screens/ReturnScreen";
import AnimateScreen from './animate/AnimateScreen';
import NotificationScreen from './notification/NotificationScreen';

const App: () => React$Node = () => {

  console.disableYellowBox = true;
  
  return (
    <View style={styles.screen}> 
      {/* <Text>I am new Test app</Text> */}
      <ReturnScreen/>
      {/* <AnimateScreen/> */}
      {/* <NotificationScreen/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen :{
    flex: 1,
    marginVertical: 35,
  }
});

export default App;
