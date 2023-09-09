/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store'
import Application from './src/Application';
import "react-native-devsettings";
// OR if you are using AsyncStorage
import "react-native-devsettings/withAsyncStorage";

const App = () => {
  return (
    <Provider store={store}>
      <Application/>
    </Provider>
  );
};

export default App;
