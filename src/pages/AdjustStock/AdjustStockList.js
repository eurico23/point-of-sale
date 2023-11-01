import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {Box, Text} from '../../styles/theme';
import {FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Card from '../../components/Card';
import { StockAdjustmentData } from '../../data/StockAdjustmentData';
import Calendar from '../../components/Calendar';



const AdjustStockList = () => {
  const navigation = useNavigation();
  return (
    <Box backgroundColor="mainBackground" flex={1}>
    <FlatList
      data={StockAdjustmentData}
      keyExtractor={item => item.id}
      renderItem={({item}) => {

      return (
        <Card>
        <Box paddingBottom='s' flexDirection='row' justifyContent='space-between'>
          <Text variant='textLarge'>{item.typeOfAdjustment}</Text>
          <Text>{item.totalAdjust}</Text>
        </Box>
           
        <Box>
            {item.productsAdjusted.map((item, index) => (
              <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('AdjustByItem')}>
              <Box key={index} paddingVertical='s' borderTopColor="greyLightest" borderTopWidth={1} flex={1} flexDirection="row" justifyContent="space-between">
                  <Text paddingLeft="l" color="textDefaultColor">{item.productname}</Text>
                  <Text textAlign="right" color="textDefaultColor">{item.quantityAdjust}</Text>
              </Box>
              </TouchableOpacity>
            ))}
        </Box>   
    </Card>
      );
    }}
    ListHeaderComponent={
      <Box>
        <Calendar  />
      </Box>
    }
  />
  </Box>
  
  );
};

export default AdjustStockList;


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