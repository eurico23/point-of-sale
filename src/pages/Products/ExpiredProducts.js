import React from 'react';
import {Box, Text} from '../../styles/theme';
import { FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Balance from '../../components/Balance';
import Card from '../../components/Card';
import { SalesHistoryData } from '../../data/SalesHistoryData';
import SearchBar from '../../components/SearchBar';

const ExpiredProducts = () => {
  const navigation = useNavigation();
  return (
    <Box backgroundColor="mainBackground" flex={1} position='relative'>
      
      <FlatList
        data={SalesHistoryData}
        keyExtractor={item => item.id}
        renderItem={({item}) => {

          return (
          <Card>
            <Box flex={1} flexDirection='row' justifyContent='space-between'>
                
                <Box flex={1} flexDirection='row' gap='s' alignItems='center'>
                    <Ionicons  name="trash-bin" size={25} color="#006FFD" />
               
                  <Box>  
                    <Text color="highlight" fontWeight='bold'>Pagamento de casa</Text>
                    <Text color="textDefaultColor" variant='textSmall'>Preço: 10.00 kz</Text>
                    <Text color="textDefaultColor" variant='textSmall'>Qty: 10</Text>
                  </Box>
                </Box>
                <Box justifyContent='center'>
                  <Text variant='textSmall' color="black">Data de expiração</Text>
                  <Text textAlign='center' fontWeight='bold' color="black">10/10/2023</Text>
                </Box>
              </Box>

          </Card>
          );
        }}
        // Set ListHeaderComponent to add space for the fixed top area
        ListHeaderComponent={
          <Box paddingHorizontal='m'>
            <SearchBar  />
          </Box>
        }
        // Set ListFooterComponent if you have a footer below the FlatList
        // ListFooterComponent={<View style={styles.footer} />}
      />

      
    </Box>
  );
};

export default ExpiredProducts;



