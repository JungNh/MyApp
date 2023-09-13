import React, {useEffect, type PropsWithChildren} from 'react';
import {TouchableOpacity} from 'react-native';
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
import {useSelector, useDispatch} from 'react-redux';
import {update} from '../redux/userSlice';
import {useNavigation} from '@react-navigation/native';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const HomeScreen = (props: any) => {
  const user = useSelector((state: any) => state.user);
  const {navigation} = props;
  // const navigation = useNavigation()
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('mount compopnent');
  //   return () => console.log('unmount compopnent');
  // }, [navigation]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('unmount compopnent71');
    });
    //Gọi lại unsubscribe khi goBack lại màn hinh HomeScreen
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return (
    <View>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <Text>{user.name}</Text>
          <Text>{user.age}</Text>
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'yellow',
            }}
            onPress={() => {
              dispatch(
                update({
                  name: 'JungNH',
                  age: user.age + 1,
                  address: 'HaNoi',
                  image:
                    'https://manta.edu.vn/wp-content/uploads/2022/12/hinh-anh-nu-sinh-dep-nhat-2-1.jpg',
                }),
              );
              // navigation.navigate('User');
            }}></TouchableOpacity>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section title="Step One">
              Edit <Text style={styles.highlight}>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="See Your Changes">
              <ReloadInstructions />
            </Section>
            <Section title="Debug">
              <DebugInstructions />
            </Section>
            <Section title="Learn More">
              Read the docs to discover what to do next:
            </Section>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
