import React, { Component } from 'react'
import { Text, View, ScrollView, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import ALL_DATA from '../data/data';
import { COLORS, LOGIN, GRADIENT_COLORS, MAIN, MAINHOME } from '../styles/styles';
import RNAnimatedBorder from "react-native-animated-border";
import Icon from 'react-native-vector-icons/Ionicons';
import { CommonActions } from '@react-navigation/native';

export default class PopularBooks extends Component {
    renderPbooks = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={0.9} onPress={() => this.props.navigation.navigate("DetailBook")} style={{ padding: 7 }} >
                <View
                    style={MAINHOME.CategBookTouch} >
                    <RNAnimatedBorder
                        firstColor={COLORS.SECONDARY_COLOR}
                        secondColor={COLORS.PRIMARRY_COLOR}
                        borderWidth={3}
                        elevation={10}
                        margin={8}
                        borderRadius={10}
                    >
                        <Image style={MAINHOME.gategbook} source={item.bImg} resizeMode="cover" />
                    </RNAnimatedBorder>
                    <View style={{ alignItems: "center" }}>
                        <Text style={[MAINHOME.Header, { fontSize: 17 }]}>{item.bName}</Text>
                        <Text style={[MAINHOME.Header, { fontSize: 10, opacity: 0.5 }]}>{item.bWname}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    goTOMAIN = () => (this.props.navigation.dispatch(CommonActions.goBack()));

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: COLORS.BACKGROUND_COLOR }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center',  justifyContent: "center", paddingTop:30,padding:10}}>
                        <View>
                            <Icon name='bookmark' size={32} color={COLORS.TEXT_COLOR} />
                        </View>
                        <View style={{ paddingHorizontal: 13 }}>
                            <Text
                                style={{
                                    fontSize: 23,
                                    fontWeight: 'bold',
                                    color: COLORS.TEXT_COLOR,
                                }}
                            >Your Beloved</Text>
                            <Text style={{ color: COLORS.TEXT_COLOR, fontSize: 15 }}>Books</Text>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.7} onPress={this.goTOMAIN} style={{ position: "absolute", paddingTop: 40, paddingHorizontal: 10 }}>
                        <Icon name='chevron-back' size={25} color={COLORS.TEXT_COLOR} />
                    </TouchableOpacity>

                    <FlatList
                        contentContainerStyle={{}}
                        data={ALL_DATA.allBooks}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this.renderPbooks} />
                </ScrollView>
            </View>
        )
    }
}
