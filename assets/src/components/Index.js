import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "../screens/splash";
import LogIn from "../screens/LogIn";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignUp from "../screens/SignUp";
import ForgetPassword from "../screens/ForgetPassword"
import ResetPassword from "../screens/ResetPassword"
import VerifyMail from "../screens/VerifyMail"
import DetailBook from "../screens/DetailBook"
import BookChapters from "../screens/BookChapters"
import Home from "../screens/Home"
import ReadingBook from "../screens/ReadingBook"
import PlayAudio from "../screens/PlayAudio"
const Stack = createNativeStackNavigator();
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: 1
    }

  }
  async componentDidMount() {
    try {
      const value = await AsyncStorage.getItem('showApp')
      if (JSON.parse(value) !== null) {
        // value previously stored
        this.setState({ showRealApp: JSON.parse(value) })
      }
    } catch (e) {
      // alert(e)
    }
  }
  onSelect() {
    this.setState({ showRealApp: 2 });
  };
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {this.state.showRealApp == 1 && <Stack.Screen name="Splash" component={Splash} />}
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="VerifyMail" component={VerifyMail} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="DetailBook" component={DetailBook} />
          <Stack.Screen name="BookChapters" component={BookChapters} />
          <Stack.Screen name="ReadingBook" component={ReadingBook} />
          <Stack.Screen name="PlayAudio" component={PlayAudio} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
