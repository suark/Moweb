// import React, { useState } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// const App = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Hello from {'\n'}React Native Web!</Text>
//       <TouchableOpacity onPress={() => setCount(count + 1)} style={styles.button}>
//         <Text>Click me!</Text>
//       </TouchableOpacity>

//       <Text>You clicked {count} times!</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#C3E8BD',
//     paddingTop: 40,
//     paddingHorizontal: 10,
//   },
//   button: {
//     backgroundColor: '#ADBDFF',
//     padding: 5,
//     marginVertical: 20,
//     alignSelf: 'flex-start',
//   },
//   title: {
//     fontSize: 40,
//   },
// });

// export default App;

import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, useColorScheme } from 'react-native';

const Colors = {
  primary: '#1292B4',
  white: '#FFF',
  lighter: '#F3F3F3',
  light: '#DAE1E7',
  dark: '#444',
  darker: '#222',
  black: '#000',
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    height: '100%',
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior='automatic' style={backgroundStyle} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
