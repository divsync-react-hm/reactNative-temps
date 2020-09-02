// import React, { useEffect, useState } from 'react';
// import { 
//   StyleSheet, 
//   View,
//   Text,
//   Button, 
//   LogBox,
//   Alert
// } from 'react-native';

// // import { Constants } from 'react-native-unimodules';
// // import * as Notifications from 'expo-notifications';
// // import * as Permissions from "expo-permissions";

// import messaging from '@react-native-firebase/messaging';
// import firestore from '@react-native-firebase/firestore';
// import * as admin from 'firebase-admin';


// const FcmNotiScreen = () => {
//   LogBox.ignoreAllLogs();

//   ///// expo notification  local notification
  
// //   Notifications.setNotificationHandler({
// //     handleNotification: async () =>{
// //       return {
// //         shouldShowAlert: true
// //       }
// //     }
// //   });

// //  useEffect(()=>{
// //    Permissions.getAsync(Permissions.NOTIFICATIONS).then(statusObj=>{
// //      if(statusObj.status !== 'granted'){
// //        return Permissions.askAsync(Permissions.NOTIFICATIONS);
// //      }

// //      return statusObj;
// //    }).then(statusObj=>{
// //      if(statusObj.status !== 'granted'){
// //        return;
// //      }
// //    })
// //  }, []);

// //  const myfn = async() =>{
// //   try{
// //   const pushtoken = await Notifications.getExpoPushTokenAsync({experienceId: 'experienceId'});
// //   console.log(pushtoken);
// //   } catch(err){
// //     // throw err;
// //     console.log(err);
// //   }
// // }

// //  useEffect(()=>{
// //   myfn();

// //    const backgroundSbscription = Notifications.addNotificationResponseReceivedListener(response=>{
// //      console.log(response);
// //    });

// //    const foregroundSubscription = Notifications.addNotificationReceivedListener(notification=>{
// //      console.log(notification);
// //    })

// //    return ()=>{
// //      backgroundSbscription.remove();
// //      foregroundSubscription.remove();
// //    }
// //  },[]);

// //  const triggerNotification =()=>{
// //   Notifications.scheduleNotificationAsync({
// //    content: {
// //      title: "Notification from app!",
// //      body: 'Change sides!',
// //      data: {
// //        moredata: 'things that left behind will come here!'
// //      }
// //    },
// //    trigger: {
// //      seconds: 5,
// //    },
// //  });
// // }

// ////////////////////////

// //// starting FCM /////////

// //// ios notification permissoin /////

// async function requestUserPermission() {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     console.log('Authorization status:', authStatus);
//   }
// }

// ///////

// async function saveTokenToDatabase(token) {
//   // Assume user is already signed in
//   const userId = auth().currentUser.uid;

//   // Add the token to the users datastore
//   await firestore()
//     .collection('Uers')
//     .doc(userId)
//     .update({
//       tokens: firestore.FieldValue.arrayUnion(token),
//     });
// }

// const getFcmToken = async () => {
  
// }

// const [ myToken, setMyToken ] = useState();

// useEffect(() => {
//   requestUserPermission();
//   // getFcmToken();

//   const fcmToken = await messaging().getToken();
//   if (fcmToken) {
//     // console.log(fcmToken);
//   } else {
//     console.log('Failed', 'No token received');
//   }

//   saveTokenToDatabase(fcmToken);

   
 
//     const unsubscribe =  messaging().onMessage(async remoteMessage => {
//     Alert.alert( 
//       remoteMessage.notification.title ,
//       remoteMessage.notification.body
//     );
//     // 'A new FCM message arrived!',
//     // setMyToken(remoteMessage);
//     // console.log(remoteMessage);
   
//   });
//   // console.log(myToken.notification.body);

//   return unsubscribe;
// });

//   return (
//     <View style={styles.screen}>
//       <Text>
//         I am text you seeing
//       </Text>

//       <Button title='press to send notification' onPress={()=>{}} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });

// export default FcmNotiScreen;
