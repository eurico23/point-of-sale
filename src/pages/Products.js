import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text, Button } from 'react-native';
import Realm from 'realm';
import AllProducts from '../components/productlist/AllProducts';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-get-random-values';






export default function Products({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    openRealmAndFetchData();

  }, []);

  // Open the Realm database and fetch the data
  const openRealmAndFetchData = async () => {
    try {
      const realm = await Realm.open({
        path: 'realm', // Provide the path to your Realm database file
        // schema: [TaskSchema], 
      });
      


      const allProducts = getProductsFromDatabase(realm);

      setProducts(allProducts);


    } catch (error) {
      console.log('Error opening Realm:', error);
    }
  };

  

  // Retrieve the products from the database
  const getProductsFromDatabase = (realm) => {
    const allProducts = realm.objects('Products');
    return Array.from(allProducts);
    
  };

  return (
    <View style={styles.container}>
        <Button
      title="AddNewproduct"
      onPress={() =>
        navigation.navigate('AddNewProduct')
      }
    />
      <FlatList
        data={products}
        keyExtractor={(item) => String(item._id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <AllProducts data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },


});
