import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Realm from 'realm';

export default function AddProducts() {


// schema for database objects



  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    openRealmAndFetchData();

  }, []);

  // Open the Realm database and fetch the data
  const openRealmAndFetchData = async () => {
    try {
      const realm = await Realm.open({
        path: 'realm', // Provide the path to your Realm database file
      //  schema: [ProductSchema], 
      });

      const numProducts = 1000; // Number of products to generate
      const startId = 101; // Starting ID number

      // Generate the products data with increasing ID and name
      const productsData = Array.from({ length: numProducts }, (_, index) => ({
        _id: startId + index,
        product_name: `Product ${startId + index}`,
        product_price: 'string',
        product_expiry_date: 'string',
        product_quantity: 20,
      }));

      insertProductsIntoDatabase(realm, productsData);

      const allProducts = getProductsFromDatabase(realm);

      setProducts(allProducts);

      // Access the schema information
      const currentSchema = realm.schema;

      console.log('Current Schema:', currentSchema);
    } catch (error) {
      console.log('Error opening Realm:', error);
    }
  };

  // Insert the products into the database
  const insertProductsIntoDatabase = (realm: Realm, productsData: any[]) => {
    realm.write(() => {
      for (const product of productsData) {
        realm.create('Products', product);
      }
    });
  };

  // Retrieve the products from the database
  const getProductsFromDatabase = (realm: Realm): any[] => {
    const allProducts = realm.objects('Products');
    return Array.from(allProducts);
  };

  return (
    <View>
      {products.map((product) => (
        <Text key={product.id}>{product.product_name}</Text>
        // Render additional properties as needed
      ))}
      <Text>porra</Text>
    </View>
  );
}

