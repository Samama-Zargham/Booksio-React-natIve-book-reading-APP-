import React, { Component } from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { COLORS, LOGIN, GRADIENT_COLORS, MAIN } from '../styles/styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { CommonActions } from '@react-navigation/native';
export default class MainHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            des: [
                { name: "Rating", des: 4.4 },
                { name: "Number of pages", des: 203 },
                { name: "Language", des: "ENG" },
            ],
            BookDiscription: [
                "The book description is the pitch to the reader about why they should buy your book. When done right, it directly drives book sales. There are so many examples of how book descriptions lead to huge changes in sales. So we dove into the book description, figured out the flaws, and completely revamped it.When done right, it directly drives book sales. There are so many examples of how book descriptions lead to huge changes in sales. So we dove into the book description, figured out the flaws, and completely revamped it. This is all discription"
            ]

        }
    }
    goTOMAIN = () => (this.props.navigation.dispatch(CommonActions.goBack()));

    render() {
        return (
            <View style={MAIN.container}>
                <View>
                    <Image
                        style={MAIN.imgBack}
                        source={require("../images/book1.jpg")}
                    />
                    <TouchableOpacity activeOpacity={0.7} onPress={this.goTOMAIN} style={{ position: "absolute", paddingHorizontal: 10, top: 20 }}>
                        <Icon name='chevron-back' size={25} color={COLORS.TEXT_COLOR} />
                    </TouchableOpacity>
                    <View
                        style={{ padding: 7, top: 15, position: "absolute", right: 15, backgroundColor: COLORS.WHITE_COLOR, opacity: 0.7, borderRadius: 100 }}>
                        <TouchableOpacity activeOpacity={0.7} >
                            {/* <Icon name='ios-bookmark-outline' size={20} color="black" /> */}
                            <Icon name='ios-bookmark-sharp' size={20} color="red" />
                        </TouchableOpacity>
                    </View >
                    <View style={{backgroundColor:COLORS.WHITE_COLOR, width:190, height:155, position:"absolute", opacity:0.5, borderRadius:20,top:100, left:150}}></View>
                    <Image
                        style={MAIN.imgFront}
                        source={require("../images/book1.jpg")}
                        resizeMode="center"
                    />
                    <Text style={[MAIN.bname, { left: 180 }]}>Author Name</Text>
                    <Text style={[MAIN.bname, { top: 140, opacity: 0.4, left: 180, }]}>ANGELINA ALUDO</Text>
                    <Text style={[MAIN.bname, { top: 160, left: 180 }]}>Play in Audio</Text>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => this.props.navigation.navigate("PlayAudio")}
                        style={{ top: 180, position: "absolute", left: 180, elevation:100  }}
                    >
                        <Icon name='play-circle-sharp' size={60} color={COLORS.TEXT_COLOR} />
                    </TouchableOpacity >
                    
                </View>
                <View style={MAIN.desView}>
                    <Text style={[MAIN.dtxt, { color: COLORS.TEXT_COLOR, fontSize: 17, paddingTop: 40, paddingHorizontal: 20 }]}>Description</Text>
                    <Text style={{ paddingHorizontal: 20, alignSelf: "center" }}>{this.state.BookDiscription}</Text>
                </View>
                <LinearGradient
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    colors={GRADIENT_COLORS}
                    style={MAIN.details}>
                    {this.state.des.map((i, index) => (
                        <View key={index} style={{ alignItems: "center" }}>
                            <Text style={[MAIN.dtxt, { color: COLORS.TEXT_COLOR, fontSize: 15 }]}>{i.name}</Text>
                            <Text style={MAIN.dtxt}>{i.des}</Text>
                        </View>
                    ))}
                </LinearGradient>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => this.props.navigation.navigate("BookChapters")}
                    style={{ width: "90%", bottom: 20, position: "absolute", alignSelf: "center" }}>
                    <LinearGradient
                        colors={GRADIENT_COLORS}
                        style={MAIN.readbtn}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}>
                        <Text style={MAIN.dtxt} >Start Reading</Text>
                    </LinearGradient>
                </TouchableOpacity >

            </View>
        )
    }
}
