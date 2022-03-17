import React, { Component } from 'react'
import { Text, View, ScrollView, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import ALL_DATA from '../data/data';
import { COLORS, LOGIN, GRADIENT_COLORS, MAIN, MAINHOME } from '../styles/styles';
import RNAnimatedBorder from "react-native-animated-border";
import LinearGradient from 'react-native-linear-gradient';

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
    renderCategories = ({ item }) => {

    }
    render() {
        return (
            <View>
                <Text style={[MAINHOME.Header, { fontSize: 20 }]}>Categories</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}>
                    {
                        ALL_DATA.categories.map((i, index) => {
                            return (
                                <TouchableOpacity activeOpacity={0.9} key={index} style={{ padding: 7 }} >
                                    <LinearGradient
                                        start={{ x: 0, y: 1 }}
                                        end={{ x: 1, y: 1 }}
                                        colors={GRADIENT_COLORS}
                                        style={MAINHOME.CategoriesTouch} >
                                        <Text style={[MAINHOME.Header, { fontSize: 15 }]}>{i.name}</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            )
                        }
                        )
                    }
                </ScrollView>
                <FlatList
                    //  ListHeaderComponent={<PopularBooks/>}
                    data={ALL_DATA.allBooks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderPbooks} />
            </View>
        )
    }
}
