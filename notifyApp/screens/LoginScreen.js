// import React, { useState } from "react";
// import { View, Text, StyleSheet, Button, TextInput  } from "react-native";
// import auth from "@react-native-firebase/auth";


// const LoginScreen = () =>{

//     const [email, setEmail] = useState();
//     const [pass, setPass] = useState();

//     const login = (email, pass) =>{
//         auth()
//         .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
//         .then(() => {
//             console.log('User account created & signed in!');
//         })
//         .catch(error => {
//             if (error.code === 'auth/email-already-in-use') {
//             console.log('That email address is already in use!');
//             }

//             if (error.code === 'auth/invalid-email') {
//             console.log('That email address is invalid!');
//             }

//             console.error(error);
//         });
//     }

//     return(
//         <View style={styles.screen}>
//             <TextInput 
//                 style={styles.input}
//                 placeholder='Enter your email'
//                 value={email}
//                 onChangeText={(txt)=>{setEmail(txt)}}
//             />

//             <TextInput 
//                 style={styles.input}
//                 placeholder='Enter your password'
//                 value={pass}
//                 onChangeText={(txt)=>{setPass(txtß)}}
//             />

//             <Button title='Login' onPress={login} />

//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     screen:{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: 'lightgrey',
//         borderRadius: 3,
//         paddingLeft: 5,
//     }
// })