import React from 'react';
import {StyleSheet, } from 'react-native';
import {Text, Box} from '../../styles/theme';
import GridCard from '../../components/GridCard';



const NewProduct = () => {
  
  return (
    <Box backgroundColor="mainBackground" flex={1} paddingHorizontal="s">
      <Text>Formulario aqui</Text>
    </Box>
  );
};

export default NewProduct;

const styles = StyleSheet.create({
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: -(12 / 2),
    marginHorizontal: -(12 / 2),
  },
  
});