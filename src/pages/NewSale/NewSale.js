
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Text, Box } from '../../styles/theme';
import Categories from '../../components/Categories';
import { ProductsDummy } from '../../data/ProductsDummy';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/ProductReducer';
import ProductsForSale from './ProductsForSale';

const NewSale = () => {

  /*cart start */
  const cart = useSelector((state) => state.cart.cart);

const total = cart.map((item) => item.quantity * item.price).reduce((curr,prev) =>curr + prev,0); // get total items in the car
 
const formatter = new Intl.NumberFormat('de-DE', { // format to decimais with coma and dot
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const formattedTotal = formatter.format(total);

  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (product.length > 0) return;

    const fetchProducts = () => {
      ProductsDummy.map((service) => dispatch(getProducts(service)));
    };
    fetchProducts();
  }, []);
  
  
 /* end cart */

  const navigation = useNavigation();
  const [searchProduct, setSearchProduct] = useState('');

  function buttonSuccess() {
    console.log('buttonSuccess');
  }

  function buttonWarning() {
    console.log('Cancel buttonWarning');
  }

  return (
    <Box backgroundColor="mainBackground" flex={1} paddingHorizontal="s">
      <View style={styles.searchBar}>
        <FontAwesome5 name="search" size={20} color="#2F3036" />
        <TextInput
          color="#1E1E1E"
          style={{ height: 40, width: '100%' }}
          placeholder="Search"
          value={searchProduct}
          onChangeText={setSearchProduct}
        />
      </View>
      <View style={{ marginBottom: 240 }}>

        <Categories />
        <ProductsForSale />

        
      </View>
      <Box style={styles.buttonArea}>
          
          {formattedTotal === '0,00' ? (
            null
          ) : (
          <Box flex={1} flexDirection="row" justifyContent="flex-end" gap="m" paddingVertical="s">
            <Text variant="textLarge" color="textDefaultColor">Total:</Text>
            <Text variant="textLarge" color="highlight">{formattedTotal} Kz</Text>
          </Box>
          )}
        <Box flexDirection="row" gap="m">
          <Button title="EXCLUIR" variant="buttonWarning" onPress={buttonWarning} />
          <Button title="SALVAR" variant="defaults" onPress={() => navigation.navigate('PendingSales')} />
        </Box>
        <Box>
          <Button title="PAGAR" variant="buttonSuccess" onPress={buttonSuccess} />
        </Box>
      </Box>
    </Box>
  );
};

export default NewSale;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#F8F9FE',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#D4D6DD',
    marginBottom: 10,
  },

  buttonArea:{
    position: 'absolute',  
    left: 0, 
    right: 0, 
    bottom: 0, 
    paddingHorizontal:10,
    backgroundColor:'#F8F9FE',
  }
});
