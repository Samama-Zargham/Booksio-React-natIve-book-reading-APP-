import React, { Component } from 'react'
import { Text, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import ALL_DATA from '../data/data';
import { COLORS, LOGIN, GRADIENT_COLORS, MAIN, MAINHOME } from '../styles/styles';
import RNAnimatedBorder from "react-native-animated-border";

export default class PopularBooks extends Component {
    renderPbooks = (i, index) => {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => this.props.navigation.navigate("DetailBook")} key={index} style={{ padding: 7 }} >
                {/* <View
                    style={MAINHOME.PopBookTouch} > */}
                <RNAnimatedBorder
                    firstColor={COLORS.SECONDARY_COLOR}
                    secondColor={COLORS.PRIMARRY_COLOR}
                    borderWidth={3}
                    elevation={5}
                    // margin={8}
                    borderRadius={10}
                >
                    <Image style={MAINHOME.pbook} source={i.bImg} resizeMode="cover" />
                </RNAnimatedBorder>
                {/* <Text style={[MAINHOME.Header, { fontSize: 17 }]}>{i.bName}</Text>
                    <Text style={[MAINHOME.Header, { fontSize: 10, opacity: 0.5 }]}>{i.bWname}</Text> */}

                {/* </View> */}
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View>
                <Text style={[MAINHOME.Header, { fontSize: 20 }]}>Popular books</Text>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    contentContainerStyle={{}}>
                    {
                        ALL_DATA.allBooks.map((i, index) => this.renderPbooks(i, index))
                    }
                </ScrollView>
            </View>
        )
    }
}
