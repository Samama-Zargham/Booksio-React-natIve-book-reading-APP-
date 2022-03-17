import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { CommonActions } from '@react-navigation/native';
import { COLORS, GRADIENT_COLORS } from '../styles/styles'
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
export default class RecipeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileD: [
                { id: 'USER NAME', name: 'Samama Zargham' },
                { id: 'EMAIL ADRESS', name: 'ICR.swen@gmail.com' },
                { id: 'Password', name: '03116040604' },
            ]
        }

    }
    goTOMAIN = () => (this.props.navigation.dispatch(CommonActions.goBack()));



    render() {
        return (
            <View style={{ flex: 1, backgroundColor: COLORS.WHITE_COLOR }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={this.goTOMAIN} style={{ position: "absolute", paddingTop: 40, paddingHorizontal: 10 }}>
                        <Ionicons name='chevron-back' size={25} color={COLORS.TEXT_COLOR} />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingTop: 30, justifyContent: "center" }}>
                        <View>
                            <FontAwesome name='user' size={32} color={COLORS.TEXT_COLOR} />
                        </View>
                        <View style={{ paddingHorizontal: 13 }}>
                            <Text
                                style={{
                                    fontSize: 23,
                                    fontWeight: 'bold',
                                    color: COLORS.TEXT_COLOR,
                                }}
                            >About us</Text>
                            <Text style={{ color: COLORS.TEXT_COLOR, fontSize: 11 }}>What we provide and why choose us</Text>
                        </View>
                    </View>
                    <View style={{  }}>
                        <Text style={{ color: COLORS.TEXT_COLOR, fontSize: 15, fontWeight: "500",paddingHorizontal: 40 }}>We ensure our books quality assurance and ensure you that we don't waste your time</Text>
                        <Text style={{ color: COLORS.TEXT_COLOR, fontSize: 20, fontWeight: "400", paddingTop: 10,paddingHorizontal: 20 }}>Why choose us?</Text>
                        <Text style={{ color: COLORS.TEXT_COLOR, fontSize: 15, paddingTop:10,paddingHorizontal: 40 }}>The primary purpose of an about us page is to inform the reader about the company and its operations. This is a straightforward goal that nearly all businesses have to fulfill in some fashion or another. However, there are other reasons why about us pages are common fixtures on business websites.</Text>
                        <Text style={{ color: COLORS.TEXT_COLOR, fontSize: 20, fontWeight: "400", paddingTop: 10,paddingHorizontal: 20 }}>Who we are?</Text>
                        <Text style={{ color: COLORS.TEXT_COLOR, fontSize: 15, paddingTop:10 ,paddingHorizontal: 40}}>We Are Apps develops applications for iPhone, Android, Windows mobile and other leading platforms on behalf of brands and creative agencies. We Are Apps also release their own game and social networking apps. The company has developed a series of server-side application service modules - Push Notification, chat, Location Based Data, CMS-enabled</Text>
                    </View>
                </ScrollView>
            </View >

        )
    }
}
