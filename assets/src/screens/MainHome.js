import React, { Component } from 'react'
import { Text, View, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { COLORS, LOGIN, GRADIENT_COLORS, MAIN, MAINHOME } from '../styles/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import PopularBooks from '../components/PopularBooks';
import CategoryBooks from '../components/CategoryBooks';
export default class MainHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onSearch: false
        }
    }
    render() {
        return (
            <SafeAreaView style={MAINHOME.container}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ padding: 10, }}>
                        <Text style={[MAINHOME.Header]}>What do you want</Text>
                        <Text style={[MAINHOME.Header, { color: COLORS.SECONDARY_COLOR, fontSize: 20 }]}>to read?</Text>
                        <View style={MAINHOME.searchContainer}>
                            <Icon name="search-sharp" size={COLORS.iconSize} color={COLORS.BLACK_COLOR} />
                            <TextInput
                                style={{ flexGrow: 1 }}
                                placeholder='Search book'
                                placeholderTextColor={COLORS.BLACK_COLOR}
                                onFocus={() => this.setState({ onSearch: true })}
                            // onChangeText={(text) => this.setState({ bookName: text })}
                            />
                            {this.state.onSearch && <TouchableOpacity activeOpacity={0.7}>
                                <Icon name='backspace' size={25} color={COLORS.WHITE_COLOR} />
                            </TouchableOpacity>}
                        </View>
                        <PopularBooks navigation={this.props.navigation}
                                        nextScreen={this.props.route.params?.nextScreen} />
                        <CategoryBooks navigation={this.props.navigation}
                                        nextScreen={this.props.route.params?.nextScreen}/>
                    </View>
                </ScrollView>

            </SafeAreaView>
        )
    }
}
