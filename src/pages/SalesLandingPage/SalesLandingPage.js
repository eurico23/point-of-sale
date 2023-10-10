import React from 'react';
import {StyleSheet, } from 'react-native';
import {Text, Box} from '../../styles/theme';
import GridCard from '../../components/GridCard';



const SalesLandingPage = () => {
  return (
    <Box backgroundColor="mainBackground" flex={1} paddingHorizontal="s">
      <Box style={styles.gridContainer}>
        <GridCard link={'SalesHistory'} icon={'CodeSandbox'} title={'VENDAS POR CLIENTES'} />
        <GridCard icon={'CodeSandbox'} title={'PRODUTOS VENDIDOS'} />
        <GridCard icon={'CodeSandbox'} title={'PRODUTOS MAIS VENDIDOS'} />
        <GridCard icon={'CodeSandbox'} title={'PRODUTOS MAIS LUCRATIVOS'} />

      </Box>
    </Box>
  );
};

export default SalesLandingPage;

const styles = StyleSheet.create({
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: -(12 / 2),
    marginHorizontal: -(12 / 2),
  },
  
});