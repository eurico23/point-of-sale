import React from 'react';
import {StyleSheet, } from 'react-native';
import {Text, Box} from '../../styles/theme';
import GridCard from '../../components/GridCard';



const ExpensesLandingPage = () => {
  
  return (
    <Box backgroundColor="mainBackground" flex={1} paddingHorizontal="s">
      <Box style={styles.gridContainer}>
        <GridCard link={'OverallBalance'} icon={'CodeSandbox'} title={'NOVA DESPESA'} />
        <GridCard link={'OverallBalance'}  icon={'CodeSandbox'} title={'LISTAR DESPESA'} />
        <GridCard link={'OverallBalance'}  icon={'CodeSandbox'} title={'CATEGORIA DE DESPESAS'} />
        <GridCard link={'OverallBalance'}  icon={'CodeSandbox'} title={'DESPESAS POR CATEGORIA '} />
      </Box>
    </Box>
  );
};

export default ExpensesLandingPage;

const styles = StyleSheet.create({
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: -(12 / 2),
    marginHorizontal: -(12 / 2),
  },
  
});