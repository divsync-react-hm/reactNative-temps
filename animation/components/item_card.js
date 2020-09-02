import React from 'react'
import {View, StyleSheet, Image, ImageBackground, Text} from 'react-native'
// import {RQText} from "../uiComponents";
// import {connect} from 'react-redux'

class ItemCard extends React.Component {
  render() {
    return (
      <View style={{...styles.container, ...this.props.style}}>
        <View style={styles.card}>
          <View style={{height: '100%', width: '100%', backgroundColor: '#8755DE', borderRadius: 19}}>

            {/*<ImageBackground style={{height: '100%', width: '100%', borderColor: 'teal', borderWidth: 6}} resizeMode='contain'*/}
            {/*                 source={require('../../assets/images/card_background.png')}>*/}
            {/*  <View style={styles.test}>*/}
            <View style={styles.topContainer}>
              {/* <RQText style={styles.itemNameHeader} value={'Bose SoundLink Revolve Portable Bluetooth Speaker'}/> */}
              <Image style={styles.trash} source={require('../assets/trash.png')}/>
            </View>
            <View style={styles.bottomContainer}>
              <View style={styles.imageContainer}>
                <View style={styles.image}>

                  <Image style={{height: '60%', width: '60%'}} source={require('../assets/start_return_bag.png')}
                         resizeMode={'contain'}/>
                </View>
              </View>
              <View style={styles.bottomTextContainer}>
                <View style={styles.bottomLeftContainer}>
                  {/* <RQText style={styles.itemName} value={'Bose SoundLink Revolve Portable Bluetooth Speaker'} bold/>
                  <RQText style={styles.storeName} value={'Best Buy'}/>
                  <RQText style={styles.itemPrice} value={'$50'} bold/> */}
                  <View style={styles.damagedContainer}>
                    <View
                      style={{height: 14, width: 14, borderRadius: 180, backgroundColor: '#CECECE', paddingRight: 4}}/>
                    {/* <RQText style={styles.button} value={'Received Damaged'}/> */}
                  </View>
                  <View style={styles.daysLeftContainer}>
                <Text>{this.props.text}</Text>

                    {/* <RQText style={styles.daysLeft} value={'2 days Left to Return'} bold/> */}
                  </View>
                </View>
              </View>
              {/*</View>*/}
            </View>
            {/*</ImageBackground>*/}
          </View>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 190
  },
  card: {
    height: 190,
    width: '90%',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: '3%',
    paddingLeft: '3%',
    paddingTop: '1.5%',
    width: '100%',
  },
  text: {
    color: 'white'
  },
  trash: {
    // paddingTop: 10,
    width: 16.14,
    height: 22.92
  },
  image: {
    height: 155.51,
    width: 155.51,
    borderRadius: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10
  },
  imageContainer: {
    width: '45%',
    alignItems: 'flex-end',
  },
  bottomTextContainer: {
    width: '45%',
    alignItems: 'flex-start',
  },
  bottomLeftContainer: {
    width: '90%',
    marginTop: 10
  },
  itemNameHeader: {
    color: 'white',
    fontSize: 11
  },
  itemName: {
    color: 'white',
    fontSize: 14
  },
  storeName: {
    color: 'white',
    fontSize: 13
  },
  itemPrice: {
    color: 'white',
    fontSize: 15,
    paddingBottom: 20
  },
  daysLeft: {
    color: 'white',
    fontSize: 12,
    // width: '100%',
    // alignSelf: 'center',
    // borderColor: 'red',
    // borderWidth: 1
  },
  damagedContainer: {
    flexDirection: 'row',
    width: '95%',
    height: 32,
    justifyContent: 'flex-end'
  },
  button: {
    color: 'white',
    fontSize: 12,
    paddingLeft: 4
  },
  daysLeftContainer: {
    color: 'white',
    fontSize: 12,
    width: '95%',
    alignItems: 'flex-end',
  }
})

// export default connect(({user}) => {
//   return {user}
// })(ItemCard)

export default ItemCard;