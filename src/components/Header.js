import React from "react";
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';


// if display height then give 22 padding in case it doesnt give 64
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header( {name}) { // argument comes from the home where it call the header
    return (
      <View style={styles.container}>
        <View style={styles.content}>
            {/* grabs the value name from the argument name */}
            <Text style={styles.username}>{name}</Text>  
            
            {/* Add the opacity effect when clicked */}
            <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>  
            </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1F6CFF',
      paddingTop: statusBarHeight,
      flexDirection: 'row',
      paddingStart: 16,
      paddingEnd: 16,
      paddingBottom: 44
    },
    content:{
        flex:1, // pega tamanho inteiro da tela
        alignItems: 'center',
        flexDirection: 'row', // poe cada item um ao lado do outro
        justifyContent: 'space-between' //give space betwen each item
    },
    buttonUser: {
        width: 44,
        height:44,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        
        // code below to center the icon
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 44/2, // to turn a elipse that is round
    }

  })
