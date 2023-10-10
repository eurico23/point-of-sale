import React from 'react';
import {StyleSheet, } from 'react-native';
import {Text, Box} from '../styles/theme';
import GridCard from '../components/GridCard';



const Reports = () => {
  return (
    <Box backgroundColor="mainBackground" flex={1} paddingHorizontal="s">
      <Box style={styles.gridContainer}>
        <GridCard iconType="AntDesign" icon='CodeSandbox' link={'NewProduct'}  title='NOVO PRODUTO' />
        <GridCard iconType="FontAwesome6" icon='cubes' link='ProductsLandingPage'  title='GESTÃO DE PRODUTOS' />
        <GridCard iconType="MaterialIcons" icon='balance' link='BalanceLandingPage'  title='BALANÇO GERAL' />
        <GridCard iconType="FontAwesome6" icon='cash-register' link='CashierClosing'  title='FECHO DE CAIXA' />
        <GridCard iconType="MaterialCommunityIcons"  icon='cash' link='SalesLandingPage' title='VENDAS' />
        <GridCard iconType="MaterialCommunityIcons" icon='cash-refund' link='ExpensesLandingPage'  title='DESPESAS' />
        <GridCard iconType="FontAwesome6" icon='arrows-down-to-people' link='NewProduct'  title='DEVEDORES' />
       
      </Box>
    </Box>
  );
};

export default Reports;

const styles = StyleSheet.create({
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: -(12 / 2),
    marginHorizontal: -(12 / 2),
  },
  
});