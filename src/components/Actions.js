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
            <Text style={styles.labelButton} >AddNewProduct v1</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('BuyAndSale')}> 
        <View style={[styles.areaButton, style={backgroundColor: '#FF6854'}]}>
            </View>
            <Text style={styles.labelButton}>BuyAndSale</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Reports')}> 
          <View style={[styles.areaButton, style={backgroundColor: '#A4437D'}]}>
            </View>
            <Text style={styles.labelButton}>Reports</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('EditSale')}> 
        <View style={[styles.areaButton, style={backgroundColor: '#FF6854'}]}>
            </View>
            <Text style={styles.labelButton}>Edit Sales</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('NewSale')}> 
        <View style={[styles.areaButton, style={backgroundColor: '#FF6854'}]}>
            </View>
            <Text style={styles.labelButton}>New Sales</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('PendingSales')} >
          <View style={[styles.areaButton, style={backgroundColor: '#FF9900'}]}>   
          </View>
          <Text style={styles.labelButton}>Sales</Text>
            
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('NewProduct')}> 
            <View style={[styles.areaButton, style={backgroundColor: '#8674F5'}]}>
            </View>
            <Text style={styles.labelButton} >New product</Text>
        </TouchableOpacity>
        

        
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Reports')}> 
          <View style={[styles.areaButton, style={backgroundColor: '#A4437D'}]}>
            </View>
            <Text style={styles.labelButton}>Edit Sales Item</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('ListOfProducts')}> 
          <View style={[styles.areaButton, style={backgroundColor: '#A4437D'}]}>
            </View>
            <Text style={styles.labelButton}>Product List</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('InfoStock')}> 
          <View style={[styles.areaButton, style={backgroundColor: '#A4437D'}]}>
            </View>
            <Text style={styles.labelButton}>Estoque info</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('ExpensesList')}> 
          <View style={[styles.areaButton, style={backgroundColor: '#A4437D'}]}>
            </View>
            <Text style={styles.labelButton}>Listar despesas</Text>
        </TouchableOpacity>




        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Category')}> 
          <View style={[styles.areaButton, style={backgroundColor: '#A4437D'}]}>
            </View>
            <Text style={styles.labelButton}>Categoria</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('ExpenseByCategory')}> 
          <View style={[styles.areaButton, style={backgroundColor: '#A4437D'}]}>
            </View>
            <Text style={styles.labelButton}>Despesas por categoria</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('DevedoresList')}> 
          <View style={[styles.areaButton, style={backgroundColor: '#A4437D'}]}>
            </View>
            <Text style={styles.labelButton}>Devedores</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('LowStockProducts')}> 
          <View style={[styles.areaButton, style={backgroundColor: '#A4437D'}]}>
            </View>
            <Text style={styles.labelButton}>Estoque baixo</Text>
        </TouchableOpacity>
   
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('ExpiredProducts')}> 
          <View style={[styles.areaButton, style={backgroundColor: '#A4437D'}]}>
            </View>
            <Text style={styles.labelButton}>Produtos Expirados</Text>
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
  labelButton:{
    color:'#71727A',
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
    color:'#71727A',
    
  }
});
