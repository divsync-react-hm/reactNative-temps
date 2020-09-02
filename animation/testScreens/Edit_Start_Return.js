import React, { useRef, useState, useEffect } from "react";
import {
  Animated,
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  ScrollView,
  PanResponder,
  Platform,
  UIManager,
  LayoutAnimation,
} from "react-native";
import Header from "../header";
import ItemCard from "./item_card";
import { RQText } from "../uiComponents";
import { connect } from "react-redux";
import actions from "../../utils/actions";

const ReturnsScreen = (props) => {
  const [cardIndex, setCardIndex] = useState(0);
  let [direction, setDirection] = useState("");
  const [num, setNum] = useState(1)
  let [cardStyle, setCardStyle] = useState({ zindex: 1 });
  const [boxWidth, setBoxWidth] = useState('85%');
  const [cardWidth, setCardWidth] = useState('100%');
  const [cardCenter, setCardCenter] = useState(null);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  let pan = useRef(new Animated.ValueXY()).current;
  let zCardIndex = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    actions.fetchItems("return", page).then((r) => {
      r.data.total_entries
        ? setData(data.concat(r.data.entries))
        : setIsloading(false);
    });
  }, []);

  hideItem = (id) => {
    const newItems = data.filter((x) => x.id != id);
    setData(newItems);
  };

//   const panResponder = PanResponder.create({
//     onStartShouldSetPanResponder: () => true,
//     onPanResponderMove: Animated.event([
//       null,
//       {
//         dx: pan.x, // x,y are Animated.Value
//         dy: pan.y,
//       },
//     ]),
//     onPanResponderRelease: (event, gesture) => {
//       if (gesture.dy > "50") {
//         setDirection("down");
//         setBoxWidth({ height: 290, width: 380 });
//         Animated.timing(
//           pan, // Auto-multiplexed
//           {
//             toValue: { x: 0, y: 750 },
//             duration: 350,
//             useNativeDriver: false,
//           } // Back to zero
//         ).start(() => {
//           setCardIndex(cardIndex + 1);
//           setBoxWidth({ height: 277, width: 329 });
//           pan.setValue({ x: 0, y: 0 });
//           setCardStyle({
//             zIndex: 1,
//           });
//         });
//       }

//       if (gesture.dy < "-5") {
//         setDirection("up");
//         //let val = data.shift();

//         Animated.timing(
//           pan, // Auto-multiplexed
//           {
//             toValue: { x: 0, y: -100 },
//             duration: 350,
//             useNativeDriver: false,
//           } // Back to zero
//         ).start(() => {
//           Animated.timing(
//             pan, // Auto-multiplexed
//             {
//               toValue: { x: 0, y: 20 },
//               useNativeDriver: false,
//             } // Back to zero
//           ).start(() => {
//             pan.setValue({ x: 0, y: 0 });
//             cardIndex < data.length
//               ? setCardIndex(cardIndex + 1)
//               : setCardIndex(0);
//           });
//           setCardStyle({ zIndex: cardIndex + 1 });
//           //data.push(val);
//         });
//       }
//     },
//   });

if(Platform.OS === "ios"){
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderMove: Animated.event([
          null,
          {
            dx: pan.x, // x,y are Animated.Value
            dy: pan.y,
          },
        ]),
        onPanResponderRelease: (event, gesture) => {
          if (gesture.dy > "50") {
            setDirection("down");
            setBoxWidth("100%");
            setCardWidth('80%')
            setCardCenter({marginLeft: '10%'});
            Animated.timing(
              pan, // Auto-multiplexed
              {
                toValue: { x: 0, y: 750 },
                duration: 350,
                useNativeDriver: false,
              } // Back to zero
            ).start(() => {
              setCardIndex(cardIndex + 1);
              setBoxWidth("85%");
              setCardWidth('100%')
              setCardCenter(null);
              pan.setValue({ x: 0, y: -20 * (cardIndex + 1) });
              setCardStyle({
                zIndex: 1,
              });
            });
          }
    
          if (gesture.dy < "-5") {
            setDirection("up");
            setCardStyle({zIndex: 0})
            //let val = data.shift();
    
            Animated.timing(
              pan, // Auto-multiplexed
              {
                toValue: { x: 0, y: -300 },
                duration: 250,
                useNativeDriver: false,
              } // Back to zero
            ).start(() => {
              setCardStyle({zIndex: -1});
              setTopVal(20)
              Animated.timing(
                pan, // Auto-multiplexed
                {
                  toValue: { x: 0, y: -130 },
                  duration: 350,
                  useNativeDriver: false,
                } // Back to zero
              ).start(() => {
                pan.setValue({ x: 0, y: 0 });
                setTopVal(0)
                // cardIndex < data.length
                //   ? setCardIndex(cardIndex + 1)
                //   : setCardIndex(0) && setTopVal(0);
                  // setTopVal(30)
                  setCardStyle({ zIndex: 2 });
              
    
              });
    
              data.push(data.shift());
              //data.push(val);
              
            });
          }
        },
      });
}

if(Platform.OS === 'android'){
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
          null,
          {
            dx: pan.x, // x,y are Animated.Value
            dy: pan.y,
          },
        ]),
        onPanResponderRelease: (event, gesture) => {
          if (gesture.dy > "50") {
            setDirection("down");
            setBoxWidth("100%");
            setCardWidth('80%')
            setCardCenter({marginLeft: '10%'});
            Animated.timing(
              pan, // Auto-multiplexed
              {
                toValue: { x: 0, y: 750 },
                duration: 350,
                useNativeDriver: false,
              } // Back to zero
            ).start(() => {
              setCardIndex(cardIndex + 1);
              setBoxWidth("85%");
              setCardWidth('100%')
              setCardCenter(null);
              pan.setValue({ x: 0, y: 0 });
              setCardStyle({
                zIndex: 1,
              });
            });
          }
          if (gesture.dy < "-5") {
            setDirection("up");
            Animated.timing(
              pan, // Auto-multiplexed
              {
                toValue: { x: 0, y: -250 },
                duration: 350,
                useNativeDriver: false,
              } // Back to zero
            ).start(() => {
              setNum(-1)
              Animated.timing(
                pan, // Auto-multiplexed
                {
                  toValue: { x: 0, y: -40},
                  duration: 250,
                  useNativeDriver: false,
                } // Back to zero
              ).start(() => {
                setNum(2)
                pan.setValue({ x: 0, y: 20 });
              });
              data.push(data.shift());
              console.log(data);
            });
          }
        },
      });
}

  renderReturnHeader = () => {
    return (
      <View>
        <RQText
          style={{ color: "white", fontSize: 25 }}
          bold
          value="Start Return"
        />
      </View>
    );
  };

  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }

  return (
    <View style={{ height: "100%", backgroundColor: "white" }}>
      <Header
        newNav={this.renderReturnHeader.bind(this)}
        showNewNav={true}
        shrinkNav={true}
        backgroundColor="#8755DE"
      />
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: "45%",
            marginTop: 50,
            alignItems: "center",
          }}
        >
          {cardIndex > data.length ? (
            <View style={styles.noCardLeft}>
              <RQText style={{ color: "#412a74" }} value='No items left!'/>
            </View>
          ) : (
            data
              .map((item, index) => {
                if (direction === "down") {
                  if (index < cardIndex) {
                    return null;
                  }
                }

                if (data[index] === data[cardIndex]) {
                  return (
                    <Animated.View
                      {...panResponder.panHandlers}
                      style={[
                        pan.getLayout(),
                        {
                          position: "absolute",
                          width: cardWidth,
                          elevation: num,
                        //   zIndex: zCardIndex.interpolate({
                        //     inputRange: [0, 0.5, 1],
                        //     outputRange: [4, 3, 0],
                        //   }),
                        },
                        Platform.OS === 'ios' ?  cardStyle : null,
                        cardCenter,
                      ]}
                      key={item}
                    >
                      <ItemCard
                        item={item}
                        hideItem={this.hideItem}
                        style={{
                          card: {
                            height: 229,
                            width: "90%",
                            alignSelf: "center",
                          },
                          imageContainer: {
                            width: "45%",
                            alignItems: "flex-end",
                          },
                          image: { height: 155.51, width: 155.51 },
                        }}
                        page={"start_return"}
                      />
                    </Animated.View>
                  );
                }

                return (
                  <Animated.View
                    {...panResponder.panHandlers}
                    key={item}
                    style={[
                      {
                        position: "absolute",
                        width: "100%",
                        top: -20 * (index - cardIndex),
                        zIndex: index,
                      },
                    ]}
                  >
                    <ItemCard
                      item={item}
                      hideItem={this.hideItem}
                      style={{
                        card: {
                          height: 229,
                          width: "90%",
                          alignSelf: "center",
                        },
                        imageContainer: {
                          width: "45%",
                          alignItems: "flex-end",
                        },
                        image: { height: 155.51, width: 155.51 },
                      }}
                      page={"start_return"}
                    />
                  </Animated.View>
                );
              })
              .reverse()
          )}
        </View>
      </View>
      <View
        style={{
          height: "15%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RQText
          style={{ marginTop: 10, color: "#8755DE" }}
          value={"Click on product image to confirm"}
        />
        <RQText
          style={{ color: "#8755DE", marginBottom: 2 }}
          value={"to confirm."}
        />
        <Image
          style={{
            height: 7.67,
            width: 14.82,
            marginTop: 10,
            marginBottom: 10,
          }}
          source={require("../../assets/images/down_arrow_purple.png")}
        />
      </View>
      <View style={{ height: "40%", alignItems: "center", borderWidth: 0 }}>
        <View style={{ height: "25%", alignItems: "center" }}></View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("BagCheck")}
          style={styles.bagContainer}
        >
          <Image
            style={{ ...boxWidth, alignSelf: "center" }}
            resizeMode="contain"
            source={require("../../assets/images/start_return_bag.png")}
          />
          <View style={styles.container}>
            <RQText style={styles.userText} value={"Tap to continue"} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: "absolute",
    height: "70%",
    paddingLeft: "15%",
    justifyContent: "flex-end",
  },
  noCardLeft: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
  },
  bag: {
    //height: 276.5,
  },
  userText: {
    color: "white",
  },
  cardsView: {
    height: "50%",
  },
  bagContainer: {
    width: "100%",
    //zIndex: 2,
  },
});

const Returns = connect((state) => ({
  user: state.user,
}))(ReturnsScreen);

export default Returns;
