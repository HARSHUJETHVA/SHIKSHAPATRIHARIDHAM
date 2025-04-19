import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Images from '../../../utils/Images/Images';
import {useNavigation} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

const Loading = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
      navigation.navigate('guruparampara');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1}}
        source={Images.SHIKSHAPATRI}
        resizeMode="cover"
      />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});

// import {ImageBackground, StyleSheet, Text, View} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import Images from '../../../utils/Images/Images';
// import {useNavigation} from '@react-navigation/native';
// import SplashScreen from 'react-native-splash-screen';

// const Loading = () => {
//   const navigation = useNavigation();
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(false); // Hide the ImageBackground after 5 sec
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, []);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       SplashScreen.hide();
//       navigation.navigate('dashboard');
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <View style={{flex: 1}}>
//       {isVisible && ( // Conditionally render the view
//         <ImageBackground
//           style={{flex: 1}}
//           source={Images.SHIKSHAPATRI}
//           resizeMode="cover"
//         />
//       )}
//     </View>
//   );
// };

// export default Loading;

// const styles = StyleSheet.create({});
