import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal, TextInput, Button, Alert } from 'react-native';
import 'react-native-get-random-values';
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


export default function AllProducts({ data }) {
  const [productName, setProductName] = useState(data.product_name);
  const [productPrice, setProductPrice] = useState(data.product_price);
  const [productExpiryDate, setProductExpiryDate] = useState(data.product_expiry_date);
  const [productQuantity, setProductQuantity] = useState(data.product_quantity);
 


  const showConfirmDialog = () => {
    return Alert.alert(
      "Are your sure?",
      "Are you sure you want to remove this beautiful box?",
      [
        {text: "Yes", onPress: () => {handleDelete();},},
        { text: "No", },
      ]
    );
  };

  const handleDelete = async () => {
    try {
      const realm = await Realm.open({
        path: 'realm', // Provide the path to your Realm database file
        schema: [ProductSchema],
      });
  
      const product = realm.objectForPrimaryKey('Products', data._id);
      if (product) {
        realm.write(() => {
          realm.delete(product); // Delete the product within the write transaction
          console.log('Product deleted from Realm database');
        });
  

      } else {
        console.log('Error: Product not found');
      }
    } catch (error) {
      console.log('Error opening Realm:', error);
    }
  };
  
  


  return (
    <View key={data._id}  style={styles.container}>
        <View style={styles.row}>
          <View style={[styles.box, styles.box2]}>
            <View style={styles.icon} />
          </View>
          <View style={[styles.box, styles.two]}>
            <Text style={styles.label}>{productName}</Text>
            <Text style={styles.value}>{data._id.toString()} Kz</Text>
          </View>
          <View style={[styles.box, styles.box3]}>
            <Text style={styles.quantity}>{productQuantity}</Text>
            <Text style={styles.quantity}> {productPrice} Kz</Text>
          </View>
        </View>

        <View style={styles.fixToText}>
          
          <Button
            title="Delete"
            onPress={() => showConfirmDialog()}
          />

          <Button
            title="Edit" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F2F2',
    marginBottom: 24,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 16,
    marginStart: 14,
    marginEnd: 14,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  box: {
    flex: 1,
  },
  box2: {},
  box3: {},
  two: {
    flex: 4,
    paddingRight: 10,
  },
  icon: {
    width: 44,
    height: 44,
    backgroundColor: '#FF9900',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 44 / 2,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    color: '#BDB8B8',
    fontSize: 12,
  },
  quantity: {
    fontWeight: 'bold',
    color: '#1F6CFF',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#BDB8B8',
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginBottom: 5,
  },
});

