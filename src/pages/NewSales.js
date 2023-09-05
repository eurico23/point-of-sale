import React, {useState} from "react";
import { View, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Text, Box} from '../styles/theme';
import Categories from '../components/Categories';
import { ProductsDummy } from "../components/ProductsDummy";
import { FlatList } from "react-native-gesture-handler";



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
      <Categories />

    <FlatList 
    vertical
      data={ProductsDummy}
      renderItem={({item})=>{
        return (
          <View style={styles.scrollCategory}>
              <View>
                <Image source={item.image}  />
                <Text color="blue" fontWeight="bold" fontSize={14}> {item.price}</Text>
              </View>
              <Text color="blue" fontWeight="bold" fontSize={14}> {item.productname}</Text>
              <Text color="blue" fontWeight="bold" fontSize={14} >Total price</Text>
            </View>
        );
      }
    }
    />

     
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