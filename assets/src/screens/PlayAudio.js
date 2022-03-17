import React, { Component } from 'react'
import { View, Image, TouchableOpacity, Text, ScrollView, Button } from 'react-native'
import { COLORS, LOGIN, GRADIENT_COLORS, MAIN } from '../styles/styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { CommonActions } from '@react-navigation/native';
import ALL_DATA from '../data/data';
import {
    BarIndicator,
} from 'react-native-indicators';
import AndroidTextToSpeech from 'react-native-tts';

export default class MainHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            play: true,
            play1: false,
        }
    }
    voice = (data) => { AndroidTextToSpeech.speak(data, 'ADD') }
    voicePause = () => {
        AndroidTextToSpeech.stop();
    }
    voicePlay = (data) => { AndroidTextToSpeech.speak(data, 'ADD') }


    goTOMAIN = () => (this.props.navigation.dispatch(CommonActions.goBack()));

    render() {
        return (
            <LinearGradient
                colors={GRADIENT_COLORS}
                style={MAIN.container}>
                <View>
                    <TouchableOpacity activeOpacity={0.7} onPress={this.goTOMAIN} style={{ position: "absolute", paddingHorizontal: 10, top: 20 }}>
                        <Icon name='chevron-back' size={25} color={COLORS.TEXT_COLOR} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingTop: 15, justifyContent: "center" }}>
                        <Entypo name='book' size={32} color={COLORS.TEXT_COLOR} />
                        <View style={{ paddingHorizontal: 5 }}>
                            <Text
                                style={{
                                    fontSize: 23,
                                    fontWeight: 'bold',
                                    color: COLORS.TEXT_COLOR,
                                }}
                            >Chapters 1</Text>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: COLORS.PRIMARRY_COLOR, borderRadius: 5, padding: 10, elevation: 5, marginHorizontal: 15, alignItems: "center", justifyContent: "center" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 19, fontWeight: "700", color: COLORS.TEXT_COLOR }}>Play Audio</Text>
                        <MaterialIcons name='audiotrack' size={25} color={COLORS.TEXT_COLOR} />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        {!this.state.play &&
                            <BarIndicator style={{ paddingTop: 20 }}
                                color={COLORS.TEXT_COLOR} size={40} count={5} />
                        }
                        {!this.state.play1 &&
                            this.voice(ALL_DATA.chp1.data)
                        }
                        {this.state.play &&
                            this.voicePause()
                        }
                        {!this.state.play &&
                            this.voicePlay(ALL_DATA.chp1.data)
                        }
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={{ paddingTop: 20 }}
                            onPress={() => this.setState({ play: !this.state.play, play1: true })}>
                            {this.state.play ?
                                <Icon name='ios-play-circle' size={50} color={COLORS.SECONDARY_COLOR} />
                                : <Icon name='ios-pause-circle-sharp' size={50} color={COLORS.SECONDARY_COLOR} />}
                        </TouchableOpacity>
                        {!this.state.play &&
                            <BarIndicator style={{ paddingTop: 20 }}
                                color={COLORS.TEXT_COLOR} size={40} count={5} />
                        }
                    </View>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ padding: 15 }}
                >
                    <View style={{}}>
                        <Text style={{ fontSize: 19, fontWeight: "700", color: COLORS.TEXT_COLOR }}>Introduction</Text>
                        <Text style={{ alignSelf: "center" }}>{ALL_DATA.chp1.data}</Text>
                        <Text style={{ fontSize: 19, fontWeight: "700", color: COLORS.TEXT_COLOR }}>Vector Icon Theory</Text>
                        <Text style={{ alignSelf: "center" }}>{ALL_DATA.chp1.data}</Text>
                    </View>
                </ScrollView>
            </LinearGradient>
        )
    }
}
