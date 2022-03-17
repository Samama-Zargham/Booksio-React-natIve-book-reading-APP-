import React, { Component, useRef, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Myfavourite from './Myfavourite';
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import MyProfile from './MyProfile';
import MainHome from './MainHome';
import AboutUs from './AboutUs';
import Icon, { Icons } from '../components/Icons';
import { COLORS } from '../styles/styles';
import * as Animatable from 'react-native-animatable';

const animate1 = { 0: { scale: .7, translateY: 0 }, 1: { scale: 1.2, translateY: -20 } }
const animate2 = { 0: { scale: 1.2, translateY: -20 }, 1: { scale: 1, translateY: 0 } }
const TabBarButton = (props) => {
    const { item, onPress, accessibilityState } = props
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);
    const textRef = useRef(null);
    useEffect(() => {
        if (focused) {
            viewRef.current.animate(animate1);
            textRef.current.transitionTo({scale:1});
        }
        else {
            viewRef.current.animate(animate2);
            textRef.current.transitionTo({scale:0});
        }
    }, [focused])
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Animatable.View
                    ref={viewRef}
                    duration={800}
                    style={[focused && styles.tabBtn]} >
                    <Icon type={item.type} name={item.iname} color={focused ? COLORS.TEXT_COLOR : COLORS.GRAY_COLOR} />
                
                </Animatable.View>
                <Animatable.Text style={{fontSize:12, color:COLORS.TEXT_COLOR, textAlign:"center", marginTop:-15}}
                 ref={textRef}>{item.label}
                </Animatable.Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const Tab = createBottomTabNavigator();
const TabArr = [
    { route: 'MainHome', label: 'Home', type: Icons.Ionicons, icon: 'home', iname: "home", component: MainHome },
    { route: 'MyProfile', label: 'Profile', type: Icons.FontAwesome, icon: 'search', iname: "user", component: MyProfile },
    { route: 'Myfavourite', label: 'Beloved', type: Icons.Ionicons, icon: 'plus-square', iname: "bookmark", component: Myfavourite },
    { route: 'AboutUs', label: 'About us', type: Icons.Entypo, icon: 'heart', iname: "creative-commons-attribution", component: AboutUs },
];
export default class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarStyle: { borderRadius: 20, height: 50, position: "absolute", backgroundColor: "#F1FAFF", bottom:10, left:10, right:10 },
            }}>
                {TabArr.map((i, index) => {
                    return (
                        <Tab.Screen key={index} name={i.route} component={i.component}
                            options={{
                                tabBarLabel: i.label,
                                tabBarButton: (props) => <TabBarButton {...props} item={i} />
                            }} />

                    )
                })}
            </Tab.Navigator>
        )
    }
}
const styles = StyleSheet.create({
    tabBtn: {
        width: 35,
        height: 35,
        borderRadius: 25,
        borderWidth: 2,
        backgroundColor: COLORS.PRIMARRY_COLOR,
        borderColor: "#F1FAFF",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5
    }
})