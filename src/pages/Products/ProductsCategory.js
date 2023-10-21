import React from 'react';
import {Box, Text} from '../../styles/theme';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Card from '../../components/Card';
import { SalesHistoryData } from '../../data/SalesHistoryData';
import Balance from '../../components/Balance';
import Calendar from '../../components/Calendar';


const ProductsCategory = () => {
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
                <Box flex={1} flexDirection='row' justifyContent='space-around' alignItems='center'>
                  <Box flex={1} flexDirection='row' gap='xs' alignItems='center'>
                    <Entypo  name="grid" size={25} color="#006FFD" />
                    <Text color="highlight" fontWeight='bold'>ALUGUEL</Text>
                  </Box>
                  <Box>
                    <Text color="warning" fontWeight='bold'>10.000 kz</Text>
                  </Box>
                  

                </Box>

            </Box>
          </Card>
          );
        }}
        // Set ListHeaderComponent to add space for the fixed top area
        ListHeaderComponent={
          <View>
            <Calendar  />
          <Balance
            title="Total"
            totalPrice="20,000.00 Kz"
            leftSubtitle=""
            leftValue="02/09/2023"
            righttSubtitle="Data Final"
            rightValue="02/10/2023"
          />
          </View>
        }
        // Set ListFooterComponent if you have a footer below the FlatList
        // ListFooterComponent={<View style={styles.footer} />}
      />

      
    </Box>
  );
};

export default ProductsCategory;


const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    padding: 16,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#C5C6CC',
    marginBottom:15,

  },
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