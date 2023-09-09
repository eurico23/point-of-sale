import React from "react";
import { StyleSheet, View } from 'react-native';
import {Text, Box} from '../styles/theme';


export default function Balance({saldo, gastos}) {
  return (
    <View style={styles.container}>
       <View style={styles.title}>
            <Text color="textDefaultColor" >Janeiro 2023</Text>
       </View>


       <View style={styles.content}>
                <Text style={styles.subtitle}>Balanço Atual</Text>
                <Text style={styles.baseText}>
                    100.000,00
                    <Text style={styles.currency}> Kz</Text>
                </Text>
        
       <View style={styles.contentbalanco}>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <Text style={styles.green}>{saldo}
                    <Text style={styles.itemcurrency}> Kz</Text>
                </Text>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Vendas</Text>
                <View>
                    <Text style={styles.red}>{gastos}
                        <Text style={styles.itemcurrency}> Kz</Text>
                    </Text>
                </View>
            </View>
        </View>


      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
    container:{
        marginBottom:15,
    },
  content: {
    alignItems: 'center',
    backgroundColor:'#1F6CFF',
    paddingTop:16,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 8,
  },

  title:{
    alignItems: 'center',
    marginBottom: 20,
    fontSize:16,
    },

    subtitle:{
        fontSize:14,
        color:'#AECAFF',
    },
    baseText:{
        color:'#fff',
        fontSize:18,
        fontWeight:"bold",
    },
    currency:{
        color:'#AECAFF',
        fontSize:14,
    },

  contentbalanco:{
    columnGap:10,
    flexDirection: 'row',
    padding:16,
  },

  item:{
    backgroundColor:'#fff',
    borderRadius: 8,
    padding:10,
    minWidth:160,
    alignItems: 'center',
  },
  itemcurrency:{
    color:'#BDB8B8',
    fontSize:12,
    fontWeight:"normal",
  },
  green: {
    color:'#17D85C',
    fontWeight:"bold",
  },
  red: {
    color:'red',
    fontWeight:"bold",
  }


});
