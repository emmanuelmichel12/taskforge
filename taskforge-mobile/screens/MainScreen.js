import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
//import { LinearGradient } from 'expo-linear-gradient';

function MainScreen(props)
{
    return (
        <View style = {styles.container}>

            <View style = {styles.header} >
            <Image source={require('../assets/TaskForgeLogo.png')} style={styles.logo}/>
            </View>

            <FlatList />

            <View style = {styles.footer}>
              <TouchableOpacity style = {styles.Button}>
                <Text style = {{fontSize: 30, fontWeight: 'bold', fontColor: '#97928e'}}>+</Text>
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
  footer: {
     height: 80,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 20,
    backgroundColor: '#080709',
  },
  header: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#080709',
  },
  listContainer: {
    flex: 1,
    padding: 20,
  },
  Button: {
    width: 60,
    height: 60,
    borderRadius: 30,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F76700',
  },
  logo: {
    paddingTop: 40,
    width: 150,
    height: 150,
  },
})

export default MainScreen;