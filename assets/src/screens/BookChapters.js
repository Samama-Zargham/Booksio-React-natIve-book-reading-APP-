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
        this.state = {
            CHP: [
                { name: "Introduction", },
                { name: "Vector Icons React native", },
                { name: "English Language", },
                { name: "Dictionary dictation", },
                { name: "Study the whole world", },
                { name: "Fake things in world", },
                { name: "The whole universe", },
                { name: "Black Cat", },
                { name: "Professional Developers", },
            ],


        }
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
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingTop: 15, justifyContent: "center" }}>
                        <View>
                            <Entypo name='open-book' size={32} color={COLORS.TEXT_COLOR} />
                        </View>
                        <View style={{ paddingHorizontal: 10 }}>
                            <Text
                                style={{
                                    fontSize: 23,
                                    fontWeight: 'bold',
                                    color: COLORS.TEXT_COLOR,
                                }}
                            >All Chapters</Text>
                            <Text style={{ color: COLORS.TEXT_COLOR, fontSize: 11 }}>You can read and hear audio</Text>
                        </View>
                    </View>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1, paddingTop:5 }} >
                    <View style={{ paddingHorizontal: 15 }}>
                        {this.state.CHP.map((i, index) => {
                            return (
                                <View key={index} style={{ padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: COLORS.WHITE_COLOR, borderRadius: 10, marginBottom: 10, opacity: 0.9, elevation: 5 }}>

                                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                                        <View style={{ borderRadius: 5, borderColor: "gray", borderWidth: 1, width: 25, height: 25, alignItems: "center", justifyContent: "center", backgroundColor: "white", opacity: 0.9, elevation: 5 }}>
                                            <Text style={{ color: COLORS.TEXT_COLOR, fontWeight: "700", fontSize: 15 }}>{index + 1}</Text>
                                        </View>
                                        <View style={{ paddingHorizontal: 10 }}>
                                            <Text style={{ color: COLORS.TEXT_COLOR, fontWeight: "700" }}>Chapter {index + 1}</Text>
                                            <Text style={{ color: COLORS.TEXT_COLOR }}>{i.name}</Text>
                                        </View>
                                    </View>
                                    <View style={{}}>
                                        <TouchableOpacity
                                        onPress={()=> this.props.navigation.navigate("ReadingBook")}
                                            activeOpacity={0.7}
                                            style={{ backgroundColor:COLORS.SECONDARY_COLOR, alignItems: "center", borderTopLeftRadius: 10, borderBottomRightRadius: 15, width: 100, padding: 5, elevation: 1 }}>
                                            <Text style={{ fontWeight: "700", color: "white" }}>READ</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                        onPress={()=> this.props.navigation.navigate("PlayAudio")}
                                            activeOpacity={0.7}
                                            style={{ backgroundColor:COLORS.PRIMARRY_COLOR, alignItems: "center", borderTopLeftRadius: 10, borderBottomRightRadius: 15, width: 100, marginTop: 10, padding: 5, elevation: 1 }}>
                                            <Text style={{ fontWeight: "700", color: "white" }}>PLAY AUDIO</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        )
    }
}
