//import './shim'; // Import the shim file first
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';


import Realm from 'realm';

const ProductSchema = {
  name: 'Products',
  properties: {
    _id: 'objectId',
    product_name: 'string',
    product_price: 'string',
    product_expiry_date: 'string',
    product_quantity: 'int',
  },
  primaryKey: '_id',
};


function App(): JSX.Element {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [productQuantity, setProductQuantity] = useState('');

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handlePriceChange = (text: string) => {
    setPrice(text);
  };

  const handleExpiryDateChange = (text: string) => {
    setExpiryDate(text);
  };

  const handleProductQuantity = (text: string) => {
    setProductQuantity(text);
  };

  const handleSubmit = async () => {
    try {
      const realm = await Realm.open({
        path: 'realm', // Provide the path to your Realm database file
        schema: [ProductSchema],
      });
      console.log('Realm Path:', realm.path);
      realm.write(() => {
        if (name && price && expiryDate && productQuantity) {
          realm.create('Products', {
            _id: new Realm.BSON.ObjectID(), // Generate a random _id
            product_name: name,
            product_price: price,
            product_expiry_date: expiryDate,
            product_quantity: parseInt(productQuantity),
          });

          console.log('Product added to Realm database');
        } else {
          console.log('Error: Missing data');
        }
      });

      realm.close(); // Close the Realm database
    } catch (error) {
      console.log('Error opening Realm:', error);
    }
  };

  return (
    <View>
      <Text>Name:</Text>
      <TextInput value={name} onChangeText={handleNameChange} />

      <Text>Price:</Text>
      <TextInput value={price} onChangeText={handlePriceChange} />

      <Text>Expiry Date:</Text>
      <TextInput value={expiryDate} onChangeText={handleExpiryDateChange} />

      <Text>Product Quantity:</Text>
      <TextInput value={productQuantity} onChangeText={handleProductQuantity} />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

export default App;
