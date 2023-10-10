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
              <Box flexDirection="row" gap="m" justifyContent='space-between'>
                <Box style={{ width: 0,
        flexGrow: 1,
        flex: 3,}}>
                  <Text   fontWeight="bold" color="black">
                    {item.productname}
                  </Text>
                  <Text>3 Entradas </Text>
                  
                  
                </Box>

                <Box flex={1} flexDirection='column' justifyContent='space-between'>
                <Text variant="textLarge" color="highlight" textAlign="right">
                    {item.price} Kz
                  </Text>
                  <Box>
                    <Text textAlign='right'> {item.quantity} em estoque</Text>
                    <Text textAlign='right'>
                      Data Expiração: 02/10/2024
                    </Text>
                  </Box>
                </Box>
                </Box>
              </TouchableOpacity>
              {isItemOpen && (
                <Box
                  borderColor="greyLightest"
                  borderTopWidth={1}
                  paddingTop="s"
                  marginTop="m">
                  {item.newentry.map((entry, index) => (
                    <Box key={index} style={[styles.row, styles.rowBorder]}>
                      <Box flex={1} flexDirection='row' justifyContent='space-between'>
                        <Box>
                          <Text>Entrada</Text>
                          <Text fontWeight="bold" >
                          {entry.datecreated}
                          </Text>
                        </Box>

                        <Box >
                          <Text  textAlign="right" color="highlight" fontWeight="bold">{entry.price} Kz</Text>
                          <Text textAlign="right">
                          {entry.quantity} em estoque
                          </Text>
                        </Box>
                      </Box>
                    </Box>
                  
                  ))}
            
            <Box flexDirection="row" gap="m">
            <Button
              title="APAGAR"
              variant="buttonWarning"
            />      
            <Button title="EDITAR" variant="defaults" />
          </Box>
           
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
