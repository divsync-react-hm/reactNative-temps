import React, { useEffect } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import PushNotification  from "react-native-push-notification";
import PushNotificationIOS from "@react-native-community/push-notification-ios";



const NotificationScreen = () => {

    useEffect(()=>{
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function (token) {
              console.log("TOKEN:", token);
            },
          
            // (required) Called when a remote is received or opened, or local notification is opened
            onNotification: function (notification) {
              console.log("NOTIFICATION:", notification);
          
              // (required) Called when a remote is received or opened, or local notification is opened
              notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
          
            // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
            onAction: function (notification) {
              console.log("ACTION:", notification.action);
              console.log("NOTIFICATION:", notification);
          
              // process the action
            },
          
            // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
            onRegistrationError: function(err) {
              console.error(err.message, err);
            },
          
            // IOS ONLY (optional): default: all - Permissions to register.
            permissions: {
              alert: true,
              badge: true,
              sound: true,
            },
          
            popInitialNotification: true,
            requestPermissions: true,
          });
    }, []);

    

    const testNotification =()=>{
        PushNotification.localNotification({
        
            /* iOS and Android properties */
            title: "My Notification Title", // (optional)
            message: "My Notification Message", // (required)
            
        });
    }


    return(
        <View style={styles.screen}>
            <Text>I am the notification Screen</Text>
            <Button title='Press me!' onPress={testNotification}/>
        </View>
    )
};

const styles = StyleSheet.create({
    screen :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default NotificationScreen;