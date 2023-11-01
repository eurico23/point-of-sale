import React from 'react';
import {Box, Text} from '../../styles/theme';
import { FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Feather from 'react-native-vector-icons/Feather';
import Balance from '../../components/Balance';
import Card from '../../components/Card';
import { SalesHistoryData } from '../../data/SalesHistoryData';
import Calendar from '../../components/Calendar';

const AdjustByItem = () => {
  const navigation = useNavigation();
  return (
    <Box backgroundColor="mainBackground" flex={1} position='relative'>
      <TouchableOpacity style={styles.print} onPress={() => navigation.navigate('ExpensesLandingPage')}>
      <Box >
      <Feather name="plus" color="#fff" size={30} />
      </Box>
      </TouchableOpacity>
      
      <FlatList
        data={SalesHistoryData}
        keyExtractor={item => item.id}
        renderItem={({item}) => {

          return (
          <Card>
            <Box>
                <Box>
                  <Text color="highlight" fontWeight='bold'>Coke</Text>

                <Box flex={1} flexDirection='row' justifyContent='space-between'>
                <Box>
                  <Text color="textDefaultColor" variant='textSmall'>Data: 02/10/2022 Hora: 15:21:07</Text>
                  <Text  color="textDefaultColor" variant='textSmall'>Categoria: 
                    <Text  color="textDefaultColor" fontWeight='bold' variant='textSmall'> Danificado</Text>
                  </Text>
                </Box>
                 
                <Box>
                <Text fontWeight='bold'>10</Text>
                </Box>
              </Box>
                </Box>

            </Box>
          </Card>
          );
        }}
        // Set ListHeaderComponent to add space for the fixed top area
        ListHeaderComponent={
          <Box>
            <Calendar  />
          </Box>
        }
        // Set ListFooterComponent if you have a footer below the FlatList
        // ListFooterComponent={<View style={styles.footer} />}
      />

      
    </Box>
  );
};

export default AdjustByItem;


const styles = StyleSheet.create({
  print: {
    position: 'absolute', 
    bottom: 50, 
    left: '80%', 
    width: 50, 
    height: 50, 
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#006FFD',
    borderRadius:25,
    zIndex:20,
  }
});

