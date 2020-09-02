import React, { useRef } from "react";
import { View, Animated, StyleSheet, PanResponder} from "react-native";

const AnimateScreen = () => {

    const animate = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderMove: Animated.event([
            null,
            {
                dx: animate.x,
                dy: animate.y
            }
        ]),
        onPanResponderRelease: () =>{
            Animated.spring(animate, {
                toValue: {x: 0, y: 200},
                useNativeDriver: false,
            }).start(()=>{
                animate.setValue({x: 0 , y: 0})
            })
        }
    })

    return(
        <View style={styles.screen}>
            <Animated.View 
            style={[styles.box, animate.getLayout()]}
            {...panResponder.panHandlers}
            >

            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box :{
        width: 70,
        height: 70,
        backgroundColor: 'darkblue'
    }
});

export default AnimateScreen;