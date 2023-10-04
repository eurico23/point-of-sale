import React from 'react';
import {useState} from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {Box, Text} from '../../styles/theme';
import Balance from '../../components/Balance';
import CheckBox from '@react-native-community/checkbox';

// Card gap
const {width} = Dimensions.get('window');
const gap = 10;
const itemPerRow = 3;
const totalGapSize = (itemPerRow - 15) * gap;
const windowWidth = width;
const childWidth = (windowWidth - totalGapSize) / itemPerRow;

const OverallBalance = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [toggleCheckBox3, setToggleCheckBox3] = useState(false);
  const [toggleCheckBox4, setToggleCheckBox4] = useState(false);

  return (
    <Box backgroundColor="mainBackground" flex={1}>
      <Balance
        title="Balanço Geral"
        subTitle=""
        totalPrice="8,738,658.82"
        leftSubtitle="Custo dos produto & Despesas"
        leftValue="100.000.00"
        righttSubtitle="Rendimento total"
        rightValue="200.000.00"
      />

      <Box style={styles.cardContainer} paddingHorizontal="l">
        <Box style={styles.card}>
          <Box flexDirection="row" justifyContent="flex-start">
            <CheckBox
              style={{alignSelf: 'center'}}
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
              tintColors={{true: '#006FFD', false: 'black'}}
            />
            <Box paddingLeft='xs'>
              <Text fontWeight='bold' color='black'>Produtos</Text>
              <Text color='warning'>1.00,000 kz</Text>
            </Box>
          </Box>
        </Box>

        <Box style={styles.card}>
          <Box flexDirection="row" justifyContent="flex-start">
            <CheckBox
              style={{alignSelf: 'center'}}
              disabled={false}
              value={toggleCheckBox1}
              onValueChange={newValue => setToggleCheckBox1(newValue)}
              tintColors={{true: '#006FFD', false: 'black'}}
            />
            <Box paddingLeft='xs'>
              <Text fontWeight='bold' color='black'>Salário</Text>
              <Text color='warning'>10,000 kz</Text>
            </Box>
          </Box>
        </Box>

        <Box style={styles.card}>
          <Box flexDirection="row" justifyContent="flex-start">
            <CheckBox
              style={{alignSelf: 'center'}}
              disabled={false}
              value={toggleCheckBox2}
              onValueChange={newValue => setToggleCheckBox2(newValue)}
              tintColors={{true: '#006FFD', false: 'black'}}
            />
            <Box paddingLeft='xs'>
              <Text fontWeight='bold' color='black'>Manutenção </Text>
              <Text color='warning'>10,000 kz</Text>
            </Box>
          </Box>
        </Box>

        <Box style={styles.card}>
          <Box flexDirection="row" justifyContent="flex-start">
            <CheckBox
              style={{alignSelf: 'center'}}
              disabled={false}
              value={toggleCheckBox3}
              onValueChange={newValue => setToggleCheckBox3(newValue)}
              tintColors={{true: '#006FFD', false: 'black'}}
            />
            <Box paddingLeft='xs'>
              <Text fontWeight='bold' color='black'>Transporte</Text>
              <Text color='warning'>10,000 kz</Text>
            </Box>
          </Box>
        </Box>

        <Box style={styles.card}>
          <Box flexDirection="row" justifyContent="flex-start">
            <CheckBox
              style={{alignSelf: 'center'}}
              disabled={false}
              value={toggleCheckBox4}
              onValueChange={newValue => setToggleCheckBox4(newValue)}
              tintColors={{true: '#006FFD', false: 'black'}}
            />
            <Box paddingLeft='xs'>
              <Text fontWeight='bold' color='black'>Água</Text>
              <Text color='warning'>10,000 kz</Text>
            </Box>
          </Box>
        </Box>

        <Box style={styles.card}>
          <Box flexDirection="row" justifyContent="flex-start">
            <CheckBox
              style={{alignSelf: 'center'}}
              disabled={false}
              value={toggleCheckBox2}
              onValueChange={newValue => setToggleCheckBox2(newValue)}
              tintColors={{true: '#006FFD', false: 'black'}}
            />
            <Box paddingLeft='xs'>
              <Text fontWeight='bold' color='black'>Energia</Text>
              <Text color='warning'>10,000 kz</Text>
            </Box>
          </Box>
        </Box>

        <Box style={styles.card}>
          <Box flexDirection="row" justifyContent="flex-start">
            <CheckBox
              style={{alignSelf: 'center'}}
              disabled={false}
              value={toggleCheckBox2}
              onValueChange={newValue => setToggleCheckBox2(newValue)}
              tintColors={{true: '#006FFD', false: 'black'}}
            />
            <Box paddingLeft='xs'>
              <Text fontWeight='bold' color='black'>Imposto</Text>
              <Text color='warning'>10,000 kz</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OverallBalance;

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: -(gap / 2),
    marginHorizontal: -(gap / 2),
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EAF2FF',
    borderRadius: 10,
    marginHorizontal: gap / 2,
    minWidth: childWidth,
    maxWidth: childWidth,
    marginTop: 15,
    padding: 10,
  },
});
