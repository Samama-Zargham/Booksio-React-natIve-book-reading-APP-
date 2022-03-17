import React, { Component } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { COLORS, LOGIN, MAIN, GRADIENT_COLORS } from '../styles/styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
export default class LogIn extends Component {
    render() {
        return (
            <View style={LOGIN.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <Image
                        style={{ alignSelf: 'center' }}
                        source={require('../images/booksio.png')}
                        resizeMode="center" />
                    <View style={{ padding: 15, }}>
                        <Text style={[LOGIN.txt, { fontSize: 25, }]}>Let's sign you in</Text>
                        <Text style={LOGIN.txt}>Welcome!</Text>
                        <View style={LOGIN.TXTIN}>
                            <Text style={LOGIN.txt}>Email</Text>
                            <View style={LOGIN.txtInPlace}>
                                <Icon style={{ paddingLeft: 10 }} name="mail" size={COLORS.iconSize} color={COLORS.GRAY_COLOR} />
                                <TextInput
                                    style={LOGIN.txtIn}
                                    placeholder="Enter your email" />
                            </View>
                            <Text style={[LOGIN.txt, { marginTop: 15 }]}>Password</Text>
                            <View style={LOGIN.txtInPlace}>
                                <Icon style={{ paddingLeft: 10 }} name="lock-closed" size={COLORS.iconSize} color={COLORS.GRAY_COLOR} />
                                <TextInput
                                    style={LOGIN.txtIn}
                                    secureTextEntry
                                    placeholder="Password" />

                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
                                <Text style={[LOGIN.txt, { fontSize: 12, color: COLORS.GRAY_COLOR }]}>Click here if you </Text>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => {
                                        this.props.navigation.navigate("ForgetPassword")
                                    }}>
                                    <Text style={[LOGIN.txt, { color: COLORS.SECONDARY_COLOR, fontSize: 13 }]}>Forget password?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => { this.props.navigation.navigate("Home") }}
                            style={{ alignItems: 'center', paddingTop: 15 }}>
                            <LinearGradient
                                colors={GRADIENT_COLORS}
                                style={LOGIN.touchBtn}
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 1 }}>
                                <Text style={[LOGIN.txt, { color: COLORS.WHITE_COLOR, fontSize: 15 }]}>Sign In</Text>
                            </LinearGradient>
                        </TouchableOpacity >
                        <Image style={LOGIN.or} source={require("../images/OR.png")} />
                        <TouchableOpacity activeOpacity={0.7} style={{ paddingTop: 17 }}>
                            <View style={LOGIN.Goo}>
                                <Image style={LOGIN.goo} source={require("../images/google.png")} />
                                <Text style={LOGIN.txt} >   Continue with Google </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: 'center', paddingTop: 30 }}>
                        <Text style={[LOGIN.txt, { fontSize: 13, color: COLORS.GRAY_COLOR }]}>If you don't have an acount? </Text>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => { this.props.navigation.navigate("SignUp") }}>
                            <Text style={[LOGIN.txt, { color: COLORS.SECONDARY_COLOR, fontSize: 15 }]}>Sing Up</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View >

        )
    }
}
