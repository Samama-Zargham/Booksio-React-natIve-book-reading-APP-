import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import ALL_DATA from '../data/data';
import { SPLASH, COLORS, GRADIENT_COLORS } from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  _renderItem = ({ item }) => {
    return (
      <View style={SPLASH.slide}>
        <StatusBar backgroundColor={COLORS.GRAY_COLOR} />
        <Image
          style={{ alignSelf: 'center' }}
          source={item.imageTiltle}
          resizeMode="center" />
        <Image style={SPLASH.image} source={item.image} resizeMode="center" />
        <Text style={SPLASH.text}>{item.text}</Text>
        {item.key === "four" && (
          <TouchableOpacity 
          activeOpacity={0.7}
          onPress={() => {
            this.props.navigation.replace("LogIn");
            // try {
            //   AsyncStorage.setItem("showApp", JSON.stringify(2))
            // } catch (e) {
            //   alert(e)
            // }
          }}  
          >
            <LinearGradient
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              colors={GRADIENT_COLORS} style={SPLASH.buttonSquare} >
              <Text style={SPLASH.btnText}>Get Started</Text>
              <Icon name="md-arrow-forward" color="rgba(255, 255, 255, .9)" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        )}
      </View>
    );
  }

  render() {
    return (
      <AppIntroSlider
        style={{ flex: 1, backgroundColor: COLORS.BACKGROUND_COLOR, }}
        renderItem={this._renderItem}
        data={ALL_DATA.slides}
        dotStyle={{ borderColor: COLORS.PRIMARRY_COLOR, borderWidth: 1, }}
        activeDotStyle={{ backgroundColor: COLORS.PRIMARRY_COLOR, }}
      />
    )
  }
}
