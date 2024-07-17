import React from 'react';
import { FlatList, View, Image, Pressable, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Text, Box } from '../../styles/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { addToCart, incrementQuantity, decrementQuantity } from '../../redux/CartReducer';
import { incrementQty, decrementQty } from '../../redux/ProductReducer';

const ProductsForSale = () => {
  const products = useSelector((state) => state.product.product);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(incrementQty(item));
  };

  const renderProductItem = ({ item }) => {
    const isInCart = cart.some((c) => c.id === item.id);
    const itemQuantity = item?.quantity || 0;
    const currentItemPrice = isInCart ? item.currentPrice : 0;

    return (
      <Box borderBottomColor="greyLightest" borderBottomWidth={1} style={styles.productListing}>
        <View>
          <Image style={styles.productImg} source={item.image} />
          <Text textAlign="center" color="textDefaultColor" fontSize={14}>
            {item.initialPrice} Kz {/* Always display initial price */}
          </Text>
        </View>
        <Box flex={1} paddingHorizontal="s">
          <Text marginBottom="xl" fontWeight="bold" color="black" numberOfLines={4}>
            {item.productname}
          </Text>
          <Box flexDirection="row" justifyContent="space-between">
            <Box>
              {isInCart ? (
                <Box flexDirection="row" justifyContent="space-between" gap="s">
                  <Pressable
                    onPress={() => {
                      dispatch(decrementQuantity(item));
                      dispatch(decrementQty(item));
                    }}
                    style={styles.minusPlus}
                  >
                    <AntDesign name="minus" size={20} color="#006FFD" />
                  </Pressable>
                  <Box style={{ paddingVertical: 0 }}>
                    <Text variant="headerMedium">{itemQuantity}</Text>
                  </Box>
                  <Pressable
                    onPress={() => {
                      dispatch(incrementQuantity(item));
                      dispatch(incrementQty(item));
                    }}
                    style={styles.minusPlus}
                  >
                    <AntDesign name="plus" size={20} color="#006FFD" />
                  </Pressable>
                </Box>
              ) : (
                <Pressable
                  onPress={() => addItemToCart(item)}
                  style={styles.addButton}
                >
                  <Text>Add</Text>
                </Pressable>
              )}
            </Box>
            <Box>
                {currentItemPrice === 0 ? ( // current price equal to zero dont display nothing
                  null
                  ) : ( // if not equal to 0 display this line
                    <Text color="black" fontWeight="bold" variant="textLarge">{currentItemPrice} kz </Text>
                )}            
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderProductItem}
    />
  );
};

export default ProductsForSale;

const styles = StyleSheet.create({
  productListing: {
    flexDirection: 'row',
    marginBottom: 15,
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  productImg: {
    width: 95,
    height: 95,
    padding: 20,
    borderRadius: 15,
    marginBottom: 10,
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: '#D4D6DD',
  },
  minusPlus: {
    backgroundColor: '#EAF2FF',
    padding: 5,
    borderRadius: 26,
  },
  addButton: {
    borderColor: "gray",
    borderRadius: 4,
    borderWidth: 0.8,
    marginVertical: 10,
    color: "#088F8F",
    textAlign: "center",
    padding: 5,
    fontSize: 17,
    fontWeight: "bold",
  },
});
