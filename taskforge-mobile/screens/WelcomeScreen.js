import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function WelcomeScreen({navigation}) {
    return (
        <View style = {styles.container}>
        <ImageBackground 
        style = {styles.background}
        resizeMode ='contain'
        source = {require('../assets/TaskForgeBackground.png')}>

        <View style = {styles.buttonContainer}>
            <TouchableOpacity style = {styles.loginButton}>
                <Text style = {styles.buttonText} onPress = {() => navigation.navigate('Login')}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.signupButton}>
                <Text style = {styles.buttonText} onPress = {() => navigation.navigate('Signup')}>Sign Up</Text>
            </TouchableOpacity>
        </View>

        </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    background: {
        flex: 1,
        justifyContent: "flex-end"
    },
    loginButton: {
        width: '100%',
        height: 50,
        borderRadius: 8,
        backgroundColor: '#F76700',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupButton: {
         width: '100%',
        height: 50,
        borderRadius: 8,
        backgroundColor: '#9BA2AE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        paddingHorizontal: 24,
        paddingBottom: 40,
        gap: 12
    },
    buttonText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 18,
  },
})

export default WelcomeScreen;