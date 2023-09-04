import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import AllProducts from './Products'; // Import your AllProducts component
import EditProductScreen from './EditProductScreen'; // Import your EditProductScreen component



export default function ProductsList() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductPress = (product) => {
    setSelectedProduct(product);
  };

  return (
    <View>
      {selectedProduct ? (
        <EditProductScreen
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      ) : (
        products.map((product) => (
          <AllProducts
            key={product._id}
            data={product}
            onPress={handleProductPress}
          />
        ))
      )}
    </View>
  );
}
