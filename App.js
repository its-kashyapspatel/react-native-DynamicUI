import { StyleSheet, View, Text, Dimensions, useWindowDimensions } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  // Dimension API Drawback

  // const [dimensions, setDimensions] = useState({window: Dimensions.get("window")});
  
  // useEffect(() => {
  //   const subscription = Dimensions.addEventListener("change", ({window}) => {
  //     setDimensions({window});
  //   });
  //   return () => subscription?.remove();
  // });

  // const {window} = dimensions;
  // const windowWidth = window.width;
  // const windowHeight = window.height;

  // Use Window Dimensions
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  
  return (
    // Dimension API Drawback, Use Window Dimensions

    <View style={styles.container}>
      <View style={[styles.box, {width: windowWidth > 500 ? "70%" : "90%", height: windowHeight > 600 ? "60%" : "90%"}]}>
        <Text style={{fontSize: windowWidth > 500 ? 50 : 24}}>Hello, World!</Text>
      </View>
    </View>
  );
}

// Dimension API
// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;
// console.log({windowWidth, windowHeight});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    // Dimension API
    // width: windowWidth > 500 ? "70%" : "90%",
    // height: windowHeight > 600 ? "60%" : "90%",

    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center"
  },
  // Dimension API
  // text: {
  //   fontSize: windowWidth > 500 ? 50 : 24
  // }
});
