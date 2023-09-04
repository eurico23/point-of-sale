import React, {useState} from "react";
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Text, Box} from '../styles/theme';
import { ScrollView } from "react-native-gesture-handler";


const category = [
  {
    productname: 'Coke Cola',
    table: 'ALL',
    price: 150.00,
  },
  {
    productname: 'Coke Cola',
    table: 'MOST SOLD',
    price: 200.00,
  },
  {
    productname: 'Coke Cola',
    table: 'FOOD',
    price: 50.00,
  },
  {
    productname: 'Coke Cola',
    table: 'HYGIENE',
    price: 60.00,
  },
  {
    productname: 'Coke Cola',
    table: 'DRINK',
    price: 250.00,
  },
  {
    productname: 'Coke Cola',
    table: 'XXXX',
    price: 300.00,
  },
];


const NewSales =() => {
const [searchProduct, setSearchProduct] = useState('');

  return (
    <Box backgroundColor="mainBackground" flex={1} paddingHorizontal="s">
      <View style={styles.searchBar}>
        <FontAwesome5 name="search" size={20} color="#2F3036" />
          <TextInput placeholder="Search"
          value={searchProduct}
          onChangeText={setSearchProduct}
          ></TextInput>
      </View>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {category.map((item,index) =>(
            <View style={styles.scrollCategory}>
              <Text color="blue" fontWeight="bold" fontSize={14} key={index}> {item.table}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View>
        {category.map((item,index) =>(
            <View style={styles.scrollCategory}>
              <View>
                <Text color="blue" fontWeight="bold" fontSize={14} key={index}>IMAGE</Text>
                <Text color="blue" fontWeight="bold" fontSize={14} key={index}> {item.price}</Text>
              </View>
              <Text color="blue" fontWeight="bold" fontSize={14} key={index}> {item.productname}</Text>
              <Text color="blue" fontWeight="bold" fontSize={14} key={index}>Total price</Text>
            </View>
          ))}
      </View>
      
      
      
    </Box>
  )
};


export default NewSales;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:15,
    backgroundColor:'#F8F9FE',
    borderRadius:25,
    borderWidth:1,
    borderColor:'#D4D6DD',
    marginBottom:20,
  },
  scrollCategory:{
    backgroundColor:'#EAF2FF',
    marginRight:10,
    marginBottom:15,
    borderRadius:15,
    paddingVertical:8,
    paddingRight:13,
    paddingLeft:10,

  },
})
