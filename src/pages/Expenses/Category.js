import React from 'react';
import {Box, Text} from '../../styles/theme';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Card from '../../components/Card';
import { SalesHistoryData } from '../../data/SalesHistoryData';

const Category = () => {
  return (
    <Box backgroundColor="mainBackground" flex={1}>
      <FlatList
        data={SalesHistoryData}
        keyExtractor={item => item.id}
        renderItem={({item}) => {

          return (
          <Card>
            <Box>
                <Box flex={1} flexDirection='row' gap='xs' alignItems='center'>
                  <Entypo  name="grid" size={25} color="#006FFD" />
                  <Text color="highlight" fontWeight='bold'>ALUGUEL</Text>
                </Box>

            </Box>
          </Card>
          );
        }}
        // Set ListHeaderComponent to add space for the fixed top area
        ListHeaderComponent={
          <View>
         
         <TouchableOpacity onPress={() => navigation.navigate('NewSale')}> 
           <View style={styles.content}>
             <Box borderRadius='xl' bg='cardPrimaryBackground' padding='m'>
               <AntDesign name="pluscircle" size={30} color="#006FFD" />
             </Box>
             <Text variant='headerMedium'>Nova Categoria</Text>
           </View>
           </TouchableOpacity>
         </View>
        }
        // Set ListFooterComponent if you have a footer below the FlatList
        // ListFooterComponent={<View style={styles.footer} />}
      />

      
    </Box>
  );
};

export default Category;


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
});