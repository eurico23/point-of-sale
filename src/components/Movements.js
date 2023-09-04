import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Movements({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.box, styles.box2]}>
          <View style={styles.icon}>
            
          </View>
        </View>
        <View style={[styles.box, styles.two]}>
          <Text style={styles.label}>{data.label}</Text>
          <Text style={styles.value}>{data.value} Kz </Text>
        </View>
        <View style={[styles.box, styles.box3]}>
          <Text style={styles.quantity}>Qty: {data.quantity}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F3F2F2',
    marginBottom: 24,
    borderRadius: 8,
    paddingHorizontal:10,
    paddingVertical:16,
  //  paddingLeft:10,
  //  paddingRight:10,
    marginStart: 14,
    marginEnd: 14,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  box: {
    flex: 1,
   // backgroundColor: '#333',
  },
  box2: {
   // flex: 1,
   // backgroundColor: 'green'
  },
  box3: {
  //  flex: 1,
   // backgroundColor: 'orange'
  },
  two: {
    flex: 4,
    paddingRight:10,
  },

  icon:{
    width: 44,
    height:44,
    backgroundColor: '#FF9900',
    
    // code below to center the icon
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 44/2, // to turn a elipse that is round
  },

  label:{
    fontWeight:'bold',
    marginBottom:5,
  },
  value:{
    color:'#BDB8B8',
    fontSize:12,
  },

  quantity:{
    fontWeight:'bold',
    color:'#1F6CFF',
  },
});
