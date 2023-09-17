import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Text, Box} from '../styles/theme';


// Card gap
const { width } = Dimensions.get('window');
const gap = 12;
const itemPerRow = 4;
const totalGapSize = (itemPerRow - 10) * gap;
const windowWidth = width;
const childWidth = (windowWidth - totalGapSize) / itemPerRow;

const Reports = () => {
  return (
    <Box backgroundColor="mainBackground" flex={1} paddingHorizontal="s">
      <Box style={styles.cardContainer}>
        <Box style={styles.card}>
          <AntDesign name="CodeSandbox" color="#006FFD" size={30} />
          <Text textAlign='center' color="highlight"  fontWeight='bold' marginVertical="xs">
            NOVO PRODUTO
          </Text>
        </Box>
        <Box style={styles.card}>
          <MaterialIcons name="point-of-sale" color="#006FFD" size={30} />
          <Text textAlign='center' color="highlight"  fontWeight='bold' marginVertical="xs">
            LISTAR PRODUCTOS
          </Text>
        </Box>
        <Box style={styles.card}>
          <MaterialIcons name="point-of-sale" color="#006FFD" size={30} />
          <Text textAlign='center' color="highlight"  fontWeight='bold' marginVertical="xs">
            MAIS VENDIDOS
          </Text>
        </Box>
        <Box style={styles.card}>
          <MaterialIcons name="point-of-sale" color="#006FFD" size={30} />
          <Text textAlign='center' color="highlight"  fontWeight='bold' marginVertical="xs">
            COMPRAS E VENDAS
          </Text>
        </Box>
      </Box>

    </Box>
  );
};

export default Reports;

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: -(gap / 2),
    marginHorizontal: -(gap / 2),
  },
  card: {
    backgroundColor: '#EAF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: gap / 2,
    minWidth: childWidth,
    maxWidth: childWidth,
    marginTop:15,
    padding: 10,
  },
});
