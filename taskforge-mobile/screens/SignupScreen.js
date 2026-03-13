import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image  } from 'react-native';

function SignupScreen({navigation})
{
    const [firstName, setFirstName] = useState(" ");
    const [lastName, setLastName] = useState(" ");
    const [username, setUsername] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [confirmPassword, setConfirmPassword] = useState(" ");
    const [error, setError] = useState(" ");

    const handleSignup = async () => {
        if(password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        setError(" ");
        try {
            const response = fetch('http://192.168.12.153:8080/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    username,
                    password
                })
            });
            const data = await response.text();
            if(response.ok) {
                console.log(data)
                navigation.navigate('Main');
            } else {
                setError(data.message || "Signup failed.");
            }
        } catch (error) {
            setError("An error occurred during signup.");
        }
    };

    return (
        <View style = {styles.container}>
            <View style = {styles.imageContainer}>
            <Image source={require('../assets/TaskForgeLogo.png')} style={styles.logo}/>
            </View>

            <Text style = {styles.headerText}>First Name:</Text>
            <TextInput style = {styles.input}
             placeholder =' Enter your first name here'
             value = {firstName}
             onChangeText = {setFirstName} />

            <Text style = {styles.headerText}>Last Name:</Text>
            <TextInput style = {styles.input}
             placeholder =' Enter your last name here'
             value = {lastName}
             onChangeText = {setLastName} />

            <Text style = {styles.headerText}>Username:</Text>
            <TextInput style = {styles.input} placeholder =' Create your username here'
            value = {username}
            onChangeText = {setUsername} />

            <Text style = {styles.headerText} >Password:</Text>
            <TextInput style = {styles.input}
             secureTextEntry = {true}
              placeholder =' Create your password here'
              value = {password}
              onChangeText = {setPassword} />

            <Text style = {styles.headerText} >Confirm Password:</Text>
            <TextInput style = {styles.input}
             secureTextEntry = {true}
              placeholder =' Confirm your password here'
              value = {confirmPassword}
              onChangeText = {(text) => {setConfirmPassword(text); setError(" ");}} />

                {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <View style = {styles.buttonContainer}>
                <TouchableOpacity style = {styles.createButton}>
                    <Text style = {styles.buttonText} onPress={handleSignup}>Create Account</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style = {styles.loginButton}>
                        <Text style = {styles.buttonText} onPress = {() => navigation.navigate('Login')}>Have an account? Login!</Text>
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
    createButton: {
        width: '100%',
        height: 50,
        borderRadius: 8,
        backgroundColor: '#F76700',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
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
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
})

export default SignupScreen;