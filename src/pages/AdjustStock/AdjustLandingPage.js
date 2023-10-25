import React from 'react';
import {StyleSheet, } from 'react-native';
import {Text, Box} from '../../styles/theme';
import GridCard from '../../components/GridCard';




const AdjustLandingPage = () => {
  return (
    <Box backgroundColor="mainBackground" flex={1} paddingHorizontal="s">
      <Box style={styles.gridContainer}>
        <GridCard iconType="AntDesign" icon='CodeSandbox' link={'NewProduct'}  title='LISTAGEM AJUSTES' />
        <GridCard iconType="FontAwesome6" icon='cubes' link='AdjustStock'  title='AJUSTAR ESTOQUE' />
      </Box>
    </Box>
  );
};

export default AdjustLandingPage;

const styles = StyleSheet.create({
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: -(12 / 2),
    marginHorizontal: -(12 / 2),
  },
  
});