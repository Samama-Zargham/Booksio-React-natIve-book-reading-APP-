import React, { Component } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { COLORS, LOGIN, GRADIENT_COLORS } from '../styles/styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { CommonActions } from '@react-navigation/native';

export default class LogIn extends Component {
    goTOMAIN = () => (this.props.navigation.dispatch(CommonActions.goBack()));

    render() {
        return (
            <View style={LOGIN.container}>
                <Image
                    style={{ alignSelf: 'center' }}
                    source={require('../images/booksio.png')}
                    resizeMode="center" />
                <TouchableOpacity activeOpacity={0.7} onPress={this.goTOMAIN} style={{ position: "absolute", paddingTop: 40, paddingHorizontal: 10 }}>
                    <Icon name='chevron-back' size={25} color={COLORS.TEXT_COLOR} />
                </TouchableOpacity>
                <View style={{ padding: 15, }}>
                    <Text style={[LOGIN.txt, { fontSize: 25, }]}>Verify your email</Text>
                    <Text style={LOGIN.txt}>Enter code that you received</Text>
                    <View style={LOGIN.TXTIN}>
                        <Text style={LOGIN.txt}>Code</Text>
                        <View style={LOGIN.txtInPlace}>
                            <Icon style={{ paddingLeft: 10 }} name="lock-open" size={COLORS.iconSize} color={COLORS.GRAY_COLOR} />
                            <TextInput
                                style={LOGIN.txtIn}
                                placeholder="Enter code" />
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.7} style={{ alignItems: 'center', paddingTop: 15 }}
                        onPress={() => {
                            this.props.route.params?.isSignUp
                                ? this.props.navigation.navigate("LogIn")
                                :
                                this.props.navigation.navigate("ResetPassword")
                        }}>
                        <LinearGradient
                            colors={GRADIENT_COLORS}
                            style={LOGIN.touchBtn}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 1 }}>
                            <Text style={[LOGIN.txt, { color: COLORS.WHITE_COLOR, fontSize: 15 }]}>Verify Mail</Text>
                        </LinearGradient>
                    </TouchableOpacity >
                </View>
            </View >
        )
    }
}
