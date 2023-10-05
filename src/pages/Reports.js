import React from 'react';
import { useNavigation } from "@react-navigation/native";
import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Text, Box} from '../styles/theme';


// Card gap
const { width } = Dimensions.get('window');
const gap = 12;
const itemPerRow = 3;
const totalGapSize = (itemPerRow - 1) * gap;
const windowWidth = width;
const childWidth = (windowWidth - totalGapSize - 2 * 10) / itemPerRow;


const Reports = () => {
  const navigation = useNavigation();
  return (
    <Box backgroundColor="mainBackground" flex={1} paddingHorizontal="s">
      <Box style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('OverallBalance')} >
          <AntDesign name="CodeSandbox" color="#006FFD" size={30} />
          <Text textAlign='center' color="highlight"  fontWeight='bold' marginVertical="xs">
            NOVO PRODUTO
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('OverallBalance')} >
          <MaterialIcons name="point-of-sale" color="#006FFD" size={30} />
          <Text textAlign='center' color="highlight"  fontWeight='bold' marginVertical="xs">
            LISTAR PRODUCTOS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('OverallBalance')} >
          <MaterialIcons name="point-of-sale" color="#006FFD" size={30} />
          <Text textAlign='center' color="highlight"  fontWeight='bold' marginVertical="xs">
            MAIS VENDIDOS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('OverallBalance')} >
          <MaterialIcons name="point-of-sale" color="#006FFD" size={30} />
          <Text textAlign='center' color="highlight"  fontWeight='bold' marginVertical="xs">
            COMPRAS E VENDAS
          </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('OverallBalance')} >
          <MaterialIcons name="point-of-sale" color="#006FFD" size={30} />
          <Text textAlign='center' color="highlight"  fontWeight='bold' marginVertical="xs">
            CONTROL DE ESTOQUE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('OverallBalance')} >
          <MaterialIcons name="point-of-sale" color="#006FFD" size={30} />
          <Text textAlign='center' color="highlight"  fontWeight='bold' marginVertical="xs">
            PRODUTO BAIXO ESTOQUE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('InfoStock')} >
          <AntDesign name="codepen" color="#006FFD" size={30} />
          <Text textAlign='center' color="highlight"  fontWeight='bold' marginVertical="xs">
            INFO ESTOQUE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('OverallBalance')} >
            <AntDesign name="codepen" color="#006FFD" size={30} />
            <Text textAlign='center' color="highlight"  fontWeight='bold' marginVertical="xs">
            BALANÇO GERAL
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('CashierClosing')} >
            <AntDesign name="codepen" color="#006FFD" size={30} />
            <Text textAlign='center' color="highlight" fontWeight='bold' marginVertical="xs">
            FECHO DE CAIXA
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('SalesHistory')} >
            <AntDesign name="codepen" color="#006FFD" size={30} />
            <Text textAlign='center' color="highlight" fontWeight='bold' marginVertical="xs">
            VENDAS REALIZADAS
            </Text>
        </TouchableOpacity>
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
