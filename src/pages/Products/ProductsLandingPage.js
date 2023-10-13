import React from 'react';
import {StyleSheet, } from 'react-native';
import {Text, Box} from '../../styles/theme';
import GridCard from '../../components/GridCard';



const ProductsLandingPage = () => {
  
  return (
    <Box backgroundColor="mainBackground" flex={1} paddingHorizontal="s">
      <Box style={styles.gridContainer}>
        <GridCard link={'OverallBalance'} icon={'CodeSandbox'} title={'NOVO PRODUTO'} />
        <GridCard link={'OverallBalance'} value={500} title={'LISTAR PRODUTOS'} />
        <GridCard link={'LowStockProducts'} value={500} title={'PRODUTOS ESTOQUE BAIXO'} />
        <GridCard link={'OverallBalance'} value={500} title={'PRODUTOS SEM ESTOQUE'} />
        <GridCard link={'ExpiredProducts'} value={500} title={'PRODUTOS EXPIRADOS'} />

      </Box>
    </Box>
  );
};

export default ProductsLandingPage;

const styles = StyleSheet.create({
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: -(12 / 2),
    marginHorizontal: -(12 / 2),
  },
  
});