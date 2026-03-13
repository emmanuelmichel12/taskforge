import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image  } from 'react-native';


function LoginScreen({navigation})

{
    const [username, setUsername] = useState(" ");
    const [password, setPassword] = useState(" ");
    return (
        <View style = {styles.container}>
                    <View style = {styles.imageContainer}>
                    <Image source={require('../assets/TaskForgeLogo.png')} style={styles.logo}/>
                    </View>
        
                    <Text style = {styles.headerText}>Username:</Text>
                    <TextInput style = {styles.input} />
        
                    <Text style = {styles.headerText} >Password:</Text>
                    <TextInput style = {styles.input} secureTextEntry = {true} />

                    <View style = {styles.buttonContainer}>
                        <TouchableOpacity style = {styles.loginButton}>
                            <Text style = {styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    
                        <TouchableOpacity style = {styles.createButton}>
                                <Text style = {styles.buttonText} onPress = {() => navigation.navigate('Signup')} >No account? Create One!</Text>
                        </TouchableOpacity>
                    </View>
        
                </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#080709',
        alignItems: 'left-center',
        justifyContent: 'center',
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
    createButton: {
         width: '100%',
        height: 50,
        borderRadius: 8,
        backgroundColor: '#9BA2AE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 40,
        paddingHorizontal: 24,
        paddingBottom: 40,
        gap: 12
    },
    buttonText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 18,
  },
    headerText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: '#9BA2AE',
    borderRadius: 8,
    color: 'white',
    padding: 10,
    margin: 10,
    width: 400
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: '70%',
    height: 300,
    marginBottom: 60,
    marginTop: -30,
  }
})

export default LoginScreen;