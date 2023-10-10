import React from 'react';
import {StyleSheet, } from 'react-native';
import {Text, Box} from '../../styles/theme';
import GridCard from '../../components/GridCard';



const DevedoresLandingPage = () => {
  
  return (
    <Box backgroundColor="mainBackground" flex={1} paddingHorizontal="s">
      <Box style={styles.gridContainer}>
        <GridCard link={'OverallBalance'}  icon={'CodeSandbox'} title={'NOVO DEVEDORES'} />
        <GridCard link={'OverallBalance'}  icon={'CodeSandbox'} title={'LISTAR DEVEDORES'} />
      </Box>
    </Box>
  );
};

export default DevedoresLandingPage;

const styles = StyleSheet.create({
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: -(12 / 2),
    marginHorizontal: -(12 / 2),
  },
  
});