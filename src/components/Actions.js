import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, Button  } from "react-native";



export default function Actions() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Products')} >
          <View style={[styles.areaButton, style={backgroundColor: '#FF9900'}]}>   
          </View>
          <Text style={styles.labelButton}>Produtos</Text>
            
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('AddNewProduct')}> 
            <View style={[styles.areaButton, style={backgroundColor: '#8674F5'}]}>
            </View>
            <Text style={styles.labelButton} >AddNewProduct</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Expenditure')}> 
        <View style={[styles.areaButton, style={backgroundColor: '#FF6854'}]}>
            </View>
            <Text style={styles.labelButton}>Expenditure</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Reports')}> 
          <View style={[styles.areaButton, style={backgroundColor: '#A4437D'}]}>
            </View>
            <Text style={styles.labelButton}>Reports</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('NewSales')}> 
        <View style={[styles.areaButton, style={backgroundColor: '#FF6854'}]}>
            </View>
            <Text style={styles.labelButton}>New Sales</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('CurrentSales')} >
          <View style={[styles.areaButton, style={backgroundColor: '#FF9900'}]}>   
          </View>
          <Text style={styles.labelButton}>Sales</Text>
            
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('AddNewProduct')}> 
            <View style={[styles.areaButton, style={backgroundColor: '#8674F5'}]}>
            </View>
            <Text style={styles.labelButton} >Add New product</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Expenditure')}> 
        <View style={[styles.areaButton, style={backgroundColor: '#FF6854'}]}>
            </View>
            <Text style={styles.labelButton}>Edit Sales</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Reports')}> 
          <View style={[styles.areaButton, style={backgroundColor: '#A4437D'}]}>
            </View>
            <Text style={styles.labelButton}>Edit Sales Item</Text>
        </TouchableOpacity>
      </View>
    </View>

    

    
    
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingStart: 18,
    paddingEnd:18,
    marginTop: -24,
    marginBottom: 15,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 8,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
   

  },

  row: {
    display:"flex",
    flexWrap:"wrap",
    flexDirection: 'row',
    justifyContent: 'space-between',
   
    
  },
 
  areaButton: {
    borderRadius: 8,
    paddingTop:8,
    paddingBottom: 8,
    paddingStart: 12,
    paddingEnd: 12,

  },
  
  actionButton: {
    alignItems: 'center',
    marginBottom:30,
    
  }
});
