import React, {useRef, useEffect} from 'react';
import {StyleSheet, Animated, Easing} from 'react-native';
import { View } from 'react-native';
import { COLORS } from '../constants';
import Lottie from 'lottie-react-native';

const GoThroughScreen = ({route, navigation}) => {
  const [books, setbooks] = React.useState(null);
  React.useEffect(() => {
    let {books} = route.params;
    setbooks(books);
  }, [books]);

useEffect(()=>{
  let {books} = route.params;
  setTimeout(()=>{
    navigation.navigate("BookDetail",{book:books})
  },4500)
},)

  const backgroundFade = useRef(new Animated.Value(0)).current;
   const logoFade = useRef(new Animated.Value(0)).current;
   const logoMovement = useRef(new Animated.Value(0)).current;
   useEffect(() => {
      Animated.timing(backgroundFade, {
         toValue: 1,
         duration: 2000,
         useNativeDriver: true,
      }).start();
      Animated.timing(logoFade, {
         toValue: 1,
         duration: 2000,
         useNativeDriver: true,
      }).start();
      setTimeout(() => {
         Animated.timing(logoMovement, {
               toValue: -250,
               duration: 2000,
               easing: Easing.inOut(Easing.exp),
               useNativeDriver: true,
         }).start();
      }, 2250);
   }, []);
   const styles = StyleSheet.create({
      container: {
         flex: 1,
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor: COLORS.black,
         opacity: backgroundFade,
      },
      logo: {
         color: 'white',
         fontSize: 48,
         marginLeft:40,
         fontWeight: 'bold',
         opacity: logoFade,
                  transform: [{translateY: logoMovement}],
      },
      SquareShapeView: {
 
         width: 120,
         height: 120,
         backgroundColor: '#00BCD4'
      
       },
      
       RectangleShapeView: {
      
       marginTop: 20,
       width: 120 * 2,
       height: 120,
       backgroundColor: '#FFC107'
      
       }
   });




   if(books){
  return (

     <Animated.View style={styles.container}>
      <Animated.Text style={styles.logo}>All Love ❤️‍🔥 </Animated.Text>
      <Lottie source={require('../assets/splash/splash5.json')} autoPlay loop />
      {/* <Lottie source={require('../assets/splash/splash4.json')} autoPlay loop /> */}
   
       </Animated.View>
      )
    }
}

export default GoThroughScreen