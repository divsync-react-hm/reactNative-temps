import React from "react";
import { View, Text, StyleSheet  } from "react-native";

const NuemorphScreen = ()=>{
    return (
        <View style={styles.screen}>
            {/* <View style={styles.hexagon}>
                <View style={styles.hexagonInner} />
                <View style={styles.hexagonBefore} />
                <View style={styles.hexagonAfter} />
            </View> */}

            <View style={styles.boxCan}>
              <View style={styles.innerBox}></View>
            </View>
            
        </View>
      )
    }

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    // hexagon: {
    //   width: 200,
    //   height: 100,
    // },
    // hexagonInner: {
    //   width: 200,
    //   height: 100,
    //   backgroundColor: 'black',
    //   borderTopStartRadius: 10,
    //   borderTopEndRadius: 10,
    //   borderBottomStartRadius: 10,
    //   borderBottomEndRadius: 10,
    // },
    // hexagonAfter: {
    //   position: 'absolute',
    // //   borderTopEndRadius: 15,
    //   bottom: -41,
    //   left: 0,
    //   width: 0,
    //   height: 0,
    //   borderStyle: 'solid',
    //   borderLeftWidth: 100,
    //   borderLeftColor: 'transparent',
    //   borderRightWidth: 100,
    //   borderRightColor: 'transparent',
    //   borderTopWidth: 45,
    //   borderTopColor: 'black',
    //   elevation: 53,
    // },
    // hexagonBefore: {
    //   position: 'absolute',
    //   top: -41,
    //   left: 0,
    //   width: 0,
    //   height: 0,
    //   borderStyle: 'solid',
    //   borderLeftWidth: 100,
    //   borderLeftColor: 'transparent',
    //   borderRightWidth: 100,
    //   borderRightColor: 'transparent',
    //   borderBottomWidth: 45,
    //   elevation: 53,
    //   borderBottomColor: 'black',
    // },
    boxCan: {
        width: 150,
        height: 150,
        backgroundColor: 'black',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerBox: {

      width: 130,
        height: 130,
        backgroundColor: 'black',
        borderRadius: 30,
        shadowOffset: { width: 3, height: -10},
        shadowColor: 'white',
        shadowRadius: 5,
        shadowOpacity: 0.15,
    }
  });

  export default NuemorphScreen;