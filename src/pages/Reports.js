import React from 'react';
import {StyleSheet} from 'react-native';
import Card from '../components/Card';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Text, Box} from '../styles/theme';
const Reports = () => {
  return (
    <Box backgroundColor="mainBackground" flex={1} paddingHorizontal="s">
      <Box flexDirection="row" gap="l" justifyContent="space-around">
        <Box style={styles.card}>
          <AntDesign name="CodeSandbox" color="#006FFD" size={30} />
          <Text textAlign='center' color="highlight" variant="textMedium" fontWeight='bold' marginVertical="xs">
            NOVO PRODUTO
          </Text>
        </Box>
        <Box style={styles.card}>
          <MaterialIcons name="point-of-sale" color="#006FFD" size={30} />
          <Text textAlign='center' color="highlight" variant="textMedium" fontWeight='bold' marginVertical="xs">
            LISTAR PRODUCTOS
          </Text>
        </Box>
        <Box style={styles.card}>
          <MaterialIcons name="point-of-sale" color="#006FFD" size={30} />
          <Text textAlign='center' color="highlight" variant="textMedium" fontWeight='bold' marginVertical="xs">
            MAIS VENDIDOS
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Reports;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EAF2FF',
    width: '50%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
  },
});
