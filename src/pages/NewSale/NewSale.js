import { useNavigation } from "@react-navigation/native";
import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Image, Pressable} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text, Box} from '../../styles/theme';
import Categories from '../../components/Categories';
import {ProductsDummy} from '../../data/ProductsDummy';
import {FlatList} from 'react-native-gesture-handler';
import Button from '../../components/Button';




const NewSale = () => {



  
  const navigation = useNavigation();
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
        color="#1E1E1E"
        style={{height:40, width:'100%'}}
          placeholder="Search"
          value={searchProduct}
          onChangeText={setSearchProduct}></TextInput>
      </View>

      <View style={{ marginBottom:240, }}>
        <Categories />

        <FlatList
        
          data={ProductsDummy}
          keyExtractor={(item) => item.id}
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
      <Box style={styles.buttonArea}>
        <Box flex={1} flexDirection='row' justifyContent='flex-end' gap='m' paddingVertical='s'>
          <Text variant='textLarge' color='textDefaultColor'>Total:</Text>
          <Text variant='textLarge' color="highlight">10.00.000 Kz</Text>
        </Box>
          <Box flexDirection="row" gap="m">
            <Button
              title="EXCLUIR"
              variant="buttonWarning"
              onPress={buttonWarning}
            />
            <Button title="SALVAR" variant="defaults" onPress={() => navigation.navigate('PendingSales')} />
          </Box>

          <Box>
            <Button
              title="PAGAR"
              variant="buttonSuccess"
              onPress={buttonSuccess}
            />
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

  buttonArea:{
    position: 'absolute',  
    left: 0, 
    right: 0, 
    bottom: 0, 
    paddingHorizontal:10,
    backgroundColor:'#F8F9FE',
  }
});
