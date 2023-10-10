import React from 'react';
import {StyleSheet, } from 'react-native';
import {Text, Box} from '../../styles/theme';
import GridCard from '../../components/GridCard';



const BalanceLandingPage = () => {
  
  return (
    <Box backgroundColor="mainBackground" flex={1} paddingHorizontal="s">
      <Box style={styles.gridContainer}>
        <GridCard link={'BalanceSalesExpenses'} icon={'CodeSandbox'} title={'BALANÇO GERAL'} />
        <GridCard link={'InfoStock'} icon={'CodeSandbox'} title={'INFO STOCK'} />
        <GridCard link={'BuyAndSale'} icon={'CodeSandbox'} title={'COMPRAS E VENDAS'} />
        
      </Box>
    </Box>
  );
};

export default BalanceLandingPage;

const styles = StyleSheet.create({
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: -(12 / 2),
    marginHorizontal: -(12 / 2),
  },
  
});