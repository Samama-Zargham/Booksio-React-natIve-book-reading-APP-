import React, { Component } from 'react'
import { View, Image, TouchableOpacity, Text, ScrollView, Button } from 'react-native'
import { COLORS, LOGIN, GRADIENT_COLORS, MAIN } from '../styles/styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { CommonActions } from '@react-navigation/native';
import ALL_DATA from '../data/data';
export default class MainHome extends Component {
    constructor(props) {
        super(props);
    }
    goTOMAIN = () => (this.props.navigation.dispatch(CommonActions.goBack()));

    render() {
        return (
            <View
                style={MAIN.container}>
                <View>
                    <TouchableOpacity activeOpacity={0.7} onPress={this.goTOMAIN} style={{ position: "absolute", paddingHorizontal: 10, top: 20 }}>
                        <Icon name='chevron-back' size={25} color={COLORS.TEXT_COLOR} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingTop: 20, justifyContent: "center" }}>
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
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1, paddingTop:5 }} >
                    <Text style={{ paddingHorizontal: 20, fontSize:19, fontWeight:"700", color:COLORS.TEXT_COLOR }}>Introduction</Text>
                    <Text style={{ paddingHorizontal: 20, alignSelf: "center" }}>{ALL_DATA.chp1.data}</Text>
                    <Text style={{ paddingHorizontal: 20, fontSize:19, fontWeight:"700", color:COLORS.TEXT_COLOR }}>Vector Icon Theory</Text>
                    <Text style={{ paddingHorizontal: 20, alignSelf: "center" }}>{ALL_DATA.chp1.data}</Text>
                </ScrollView>
            </View>
        )
    }
}
