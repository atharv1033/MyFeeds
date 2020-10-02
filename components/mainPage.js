import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button
} from 'react-native';

export default function Main({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center" }} >
            <View style={{ marginHorizontal: 10 }} >
                <View style={{ marginBottom: 30 }} >
                    <Button
                        onPress={() => { navigation.navigate('Login') }}
                        title="Log In"
                        color="#841584"
                    />
                </View>
                <View>
                    <Button
                        onPress={() => { navigation.navigate('Signup') }}
                        title="Sign Up"
                        color="#841584"
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}