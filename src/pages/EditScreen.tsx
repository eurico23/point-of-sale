import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function EditScreen({ route }) {
    const { product } = route.params;
    const [name, setName] = useState(product.product_name);
    const [price, setPrice] = useState(product.product_price);
    const [expiryDate, setExpiryDate] = useState(product.product_expiry_date);
    const [quantity, setQuantity] = useState(product.product_quantity.toString());
  
    const navigation = useNavigation();

    const handleSave = () => {
      const updatedProduct = {
        ...product,
        product_name: name,
        product_price: price,
        product_expiry_date: expiryDate,
        product_quantity: parseInt(quantity),
      };
  
      // Handle saving the updated product here
  
      // After saving, navigate back to the previous screen
      navigation.goBack();
    };
  


  return (
    <View style={styles.container}>
      <Text>Name:</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F2F2',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#1F6CFF',
    borderRadius: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
