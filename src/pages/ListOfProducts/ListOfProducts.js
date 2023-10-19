import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Text, Box} from '../../styles/theme';
import {ProductsDummy} from '../../data/ProductsDummy';
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';


const ListOfProducts = () => {
    const [openItem, setOpenItem] = useState(null); // State to track open items


  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Box flexDirection="row" gap="s">
          <Text style={{alignSelf: 'center'}} variant="textLarge">
          N° Productos:
          </Text>
          <Text
            style={{alignSelf: 'center'}}
            variant="headerLarge">
            10000
          </Text>
        </Box>
      ),
      headerTitleAlign: 'left',
      headerStyle: {
        borderBottomColor: '#D4D6DD',
        borderBottomWidth: 1,
      },
    });
  }, [navigation]);
  const navigation = useNavigation();

  return (
    <Box backgroundColor="mainBackground" flex={1}>
      <Box paddingHorizontal='s' paddingTop='s'>
        <SearchBar placeholder="Procura" />
      </Box>


      <FlatList
        data={ProductsDummy}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
            const isItemOpen = openItem === item.id; // Check if this item is open

          return (
            <Card>
              <TouchableOpacity onPress={() => setOpenItem(isItemOpen ? null : item.id)}>
              <Box>
                <Box>
                  <Text color="highlight" fontWeight='bold'>{item.productname}</Text>

                <Box flex={1} flexDirection='row' justifyContent='space-between'>
                <Box>
                  <Text  color="textDefaultColor">Data de expiração</Text>
                  <Text fontWeight='bold' color="textDefaultColor">02/10/2024</Text>
                </Box>
                <Box>
                <Text  color="textDefaultColor">Estoque</Text>
                <Text fontWeight='bold' color="textDefaultColor">{item.quantity} {item.sale_mode}</Text>
                </Box>
                
                <Box>
                <Text textAlign='right' color="textDefaultColor">Preço</Text>
                <Text fontWeight='bold' color="textDefaultColor">{item.price} kz</Text>
                </Box>
              </Box>
                </Box>
            </Box>
              </TouchableOpacity>
              {isItemOpen && (
                 <Box flexDirection="row" gap="m" marginTop='m'>
                 <Button
                   title="APAGAR"
                   variant="buttonWarning"
                 />      
                 <Button title="EDITAR" variant="defaults" />
               </Box>
              )}
            </Card>
          );
        }}
      />
    </Box>
  );
};

export default ListOfProducts;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowBorder: {
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingBottom: 15,
    borderColor: '#D4D6DD',
  },
});
