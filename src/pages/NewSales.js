import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Image, Pressable, Button} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text, Box} from '../styles/theme';
import Categories from '../components/Categories';
import {ProductsDummy} from '../components/ProductsDummy';
import {FlatList} from 'react-native-gesture-handler';

const NewSales = () => {
  const [searchProduct, setSearchProduct] = useState('');

  function buttonSuccess() {
    console.log('buttonSuccess');
  }

  function buttonWarning() {
    console.log('Cancel buttonWarning');
  }

  function clickdefault() {
    console.log('default');
  }

  return (
    <Box backgroundColor="mainBackground" flex={1} paddingHorizontal="s">
      <View style={styles.searchBar}>
        <FontAwesome5 name="search" size={20} color="#2F3036" />
        <TextInput
          placeholder="Search"
          value={searchProduct}
          onChangeText={setSearchProduct}></TextInput>
      </View>

      <View>
        <Categories />

        <FlatList
          data={ProductsDummy}
          renderItem={({item}) => {
            return (
              <Box
                borderBottomColor="greyLightest"
                borderBottomWidth={1}
                style={styles.productListing}>
                <View>
                  <Image style={styles.productImg} source={item.image} />
                  <Text
                    textAlign="center"
                    color="textDefaultColor"
                    fontSize={14}>
                    {' '}
                    {item.price} Kz
                  </Text>
                </View>
                <Box flex={1} paddingHorizontal="s">
                  <Text
                    marginBottom='xl'
                    fontWeight="bold"
                    color="black"
                    numberOfLines={4}>
                    {item.productname}
                  </Text>

                  <Box flexDirection="row" justifyContent="space-between">
                    <Box
                      flexDirection="row"
                      justifyContent="space-between"
                      gap="s">
                      <Pressable>
                        <Box style={styles.minusPlusContainer}>
                          <Pressable
                            // onPress={() => deleteItem(item)}
                            style={styles.minusPlus}>
                            <AntDesign name="minus" size={20} color="#006FFD" />
                          </Pressable>
                        </Box>
                      </Pressable>

                      <Pressable
                        style={{
                          //  backgroundColor: 'white',
                          // paddingHorizontal: 18,
                          paddingVertical: 0,
                        }}>
                        <Text variant="headerMedium">10</Text>
                      </Pressable>

                      <Pressable>
                        <Box>
                          <Pressable
                            // onPress={() => deleteItem(item)}
                            style={styles.minusPlus}>
                            <AntDesign name="plus" size={20} color="#006FFD" />
                          </Pressable>
                        </Box>
                      </Pressable>
                    </Box>
                    <Box>
                      <Text color="black" fontWeight="bold" variant="textLarge">
                        100.00 Kz
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          }}
        />
        
      </View>
      
    </Box>
  );
};

export default NewSales;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#F8F9FE',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#D4D6DD',
    marginBottom: 20,
  },
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
    padding:20,
    borderRadius: 15,
    marginBottom: 10,
    resizeMode: 'contain',
    borderWidth:1,
    borderColor:'#D4D6DD',
  },

  minusPlus: {
    backgroundColor: '#EAF2FF',
    padding: 5,
    borderRadius: 26,
  },
});
