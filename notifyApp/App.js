import React, { useEffect, useState } from 'react';
import { 
  StyleSheet, 
  View,
  Button, 
  LogBox,
  Alert,
  TextInput
} from 'react-native';

// import { Constants } from 'react-native-unimodules';
// import * as Notifications from 'expo-notifications';
// import * as Permissions from "expo-permissions";

import messaging from '@react-native-firebase/messaging';
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";
// import * as admin from 'firebase-admin';

import OneSignal from 'react-native-onesignal';


const App: () => React$Node = () => {
  LogBox.ignoreAllLogs();

  const [ email, setEmail] = useState('');
  const [ pass, setPass] = useState('');
  const [ user, setUser] = useState([]);
  const [ notificationToken, setNotificationToken] = useState();
  // const [ myToken, setMyToken ] = useState();

    useEffect(()=>{
      
    //Remove this method to stop OneSignal Debugging 
    OneSignal.setLogLevel(6, 0);
    
    // Replace 'YOUR_ONESIGNAL_APP_ID' with your OneSignal App ID.
    OneSignal.init("5aac6099-a22a-4acd-97a8-949749da7c39", {kOSSettingsKeyAutoPrompt : false, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption:2});
    OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.
    
    // The promptForPushNotifications function code will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step below)
    // OneSignal.promptForPushNotificationsWithUserResponse(myiOSPromptCallback);
  
     OneSignal.addEventListener('received', onReceived);
     OneSignal.addEventListener('opened', onOpened);
     OneSignal.addEventListener('ids', onIds);
  
    
    return () =>{
      OneSignal.removeEventListener('received', onReceived);
      OneSignal.removeEventListener('opened', onOpened);
      OneSignal.removeEventListener('ids', onIds);
    }
      
  }, [])
  
    const onReceived =(notification) =>{
      console.log("Notification received: ", notification);
    }
  
    const onOpened =(openResult) => {
      console.log('Message: ', openResult.notification.payload.body);
      console.log('Data: ', openResult.notification.payload.additionalData);
      console.log('isActive: ', openResult.notification.isAppInFocus);
      console.log('openResult: ', openResult);
    }
  
    const onIds =(device) =>{
      console.log('Device info: ', device);
    }

  //   function myiOSPromptCallback(permission){
  //     // do something with permission value
  // }


  const login =  (email, pass) =>{
    // console.log(email, pass);
    auth()
    .createUserWithEmailAndPassword(email, pass)
    .then((data) => {
      setUser(data.user.uid);
        console.log(data);
        // console.log('User account created & signed in!');

     firestore()
      .collection('Uers')
      .doc(data.user.uid)
      .update({
        tokens: firestore.FieldValue.arrayUnion(token),
      });

    })
    .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          auth()
    .signInWithEmailAndPassword( email, pass)
    .then((data) => {
        setUser(data.user.uid)
        console.log('login');

  //       firestore()
  // .collection('Users')
  // .doc('ABC')
  // .set({
  //   name: 'Ada Lovelace',
  //   age: 30,
  // })
  // .then(() => {
  //   console.log('User added!');
  // });

      firestore()
        .collection('Users')
        .doc(user)
        .set({
          token: 'e1zNPqJxT1GHL4pA6E6qXQ:APA91bEobReF1twM3k2BlD0hKDerqkxIhSqxpXa39FFt9aGoNY1QCtMpMMf81Dv5funxdQSzpZI9mzDc9XyOlAwuwc_KpDMSwgJCoev9t8UA0l2YjJREP5opbvYiNhK620I85s0Y',
        }).then(()=>{
          console.log('token added');
        })

      // firestore()
      // .collection('Users')
      // .add({user})
      // .then(()=>{
      //   console.log('something added');
      // })

      // firestore()
      //   .collection('Users')
      //   .doc(JSON.stringify(user))
      // .then(()=>{
      //     console.log('token added');
      //   })

    });
        // console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        }

        console.log(error);
    });
  }


  ///// expo notification  local notification
  
//   Notifications.setNotificationHandler({
//     handleNotification: async () =>{
//       return {
//         shouldShowAlert: true
//       }
//     }
//   });

//  useEffect(()=>{
//    Permissions.getAsync(Permissions.NOTIFICATIONS).then(statusObj=>{
//      if(statusObj.status !== 'granted'){
//        return Permissions.askAsync(Permissions.NOTIFICATIONS);
//      }

//      return statusObj;
//    }).then(statusObj=>{
//      if(statusObj.status !== 'granted'){
//        return;
//      }
//    })
//  }, []);

//  const myfn = async() =>{
//   try{
//   const pushtoken = await Notifications.getExpoPushTokenAsync({experienceId: 'experienceId'});
//   console.log(pushtoken);
//   } catch(err){
//     // throw err;
//     console.log(err);
//   }
// }

//  useEffect(()=>{
//   myfn();

//    const backgroundSbscription = Notifications.addNotificationResponseReceivedListener(response=>{
//      console.log(response);
//    });

//    const foregroundSubscription = Notifications.addNotificationReceivedListener(notification=>{
//      console.log(notification);
//    })

//    return ()=>{
//      backgroundSbscription.remove();
//      foregroundSubscription.remove();
//    }
//  },[]);

//  const triggerNotification =()=>{
//   Notifications.scheduleNotificationAsync({
//    content: {
//      title: "Notification from app!",
//      body: 'Change sides!',
//      data: {
//        moredata: 'things that left behind will come here!'
//      }
//    },
//    trigger: {
//      seconds: 5,
//    },
//  });
// }

////////////////////////

//// starting FCM /////////

//// ios notification permissoin /////

// async function requestUserPermission() {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     // console.log('Authorization status:', authStatus);
//   }
// }

///////


const getFcmToken = async () => {
  const fcmToken = await messaging().getToken();
  if (fcmToken) {
    // console.log(fcmToken);
    setNotificationToken(fcmToken);
  } else {
    console.log('Failed', 'No token received');
  }

}

useEffect(() => {
  // requestUserPermission();
  // getFcmToken();

  const fn = async() =>{
    const mid = await firestore()
      .collection('Users')
      .doc(user).get();

      console.log(mid.data().token);
      setNotificationToken(mid.data().token)

  }

  fn();
  
 
    const unsubscribe =  messaging().onMessage(async remoteMessage => {
    Alert.alert( 
      remoteMessage.notification.title ,
      remoteMessage.notification.body
    );
    // 'A new FCM message arrived!',
    // setMyToken(remoteMessage);
    // console.log(remoteMessage);
   
  });
  // console.log(myToken.notification.body);

  return unsubscribe;
}, []);

// const sendNotification = async() =>{
//   await admin.messaging().sendToDevice(
//     notificationToken, // ['token_1', 'token_2', ...]
//     {
//       data: {
//         owner: JSON.stringify(notificationToken),
//         user: JSON.stringify(user),
//       },
//     },
//     {
//       // Required for background/quit data-only messages on iOS
//       contentAvailable: true,
//       // Required for background/quit data-only messages on Android
//       priority: 'high',
//     },
//   );
// }

  return (
    <View style={styles.screen}>
      <TextInput 
                style={styles.input}
                placeholder='Enter your email'
                value={email}
                onChangeText={(txt)=>{setEmail(txt)}}
            />

            <TextInput 
                style={styles.input}
                placeholder='Enter your password'
                value={pass}
                onChangeText={(txt)=>{setPass(txt)}}
            />

      <Button title='Login' onPress={()=>{login(email, pass)}} />

      <Button title='press to send notification' onPress={()=>{
        // sendNotification()
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 3,
    paddingLeft: 5,
}
});

export default App;
