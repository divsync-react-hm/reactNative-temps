import React, { useRef, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Animated,
  LogBox
} from 'react-native';
import NuemorphScreen from './screens/NuemorphScreen';

const App: () => React$Node = () => {
  LogBox.ignoreAllLogs();

  const [ alignsecond, setAlignsecond] = useState(false);

  const anim = useRef(new Animated.Value(0)).current;

  const startSplashAnim = () =>{
    Animated.timing(anim, {
      toValue: 360,
      duration: 1500,
      useNativeDriver: false
    }).start(()=>{
      anim.setValue(0)
    })
  }

  const animInterpolate = anim.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg']
  })

  useEffect(()=>{
    startSplashAnim();
    setTimeout(() => {
      setAlignsecond(true)
    }, 3000);
  }, [])


  return (
  <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        
        {!alignsecond ? <Animated.Image
            source={{uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/21e275f6b87375f7317c4a1e459433bc'}}
            style={{ width: 100, height: 100, 
              transform: [{rotate: animInterpolate}]
            }}
            
          /> : <NuemorphScreen/>
          // <View style={{ margin: 10 }}>
          //   <Text
          //     style={{ color: '#114998', fontSize: 17, fontWeight: 'bold' }}>
          //     Masak Lebih Mudah Dan Menyenangkan
          //   </Text>
          // </View>
        }
      </View>
    
  );
};

const styles = StyleSheet.create({
  
});

export default App;
