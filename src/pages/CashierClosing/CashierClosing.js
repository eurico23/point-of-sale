import React from 'react';
import {Box, Text} from '../../styles/theme';
import {View, FlatList} from 'react-native';

import Balance from '../../components/Balance';
import Card from '../../components/Card';
import {DailyCloseCachier} from '../../data/DailyCloseCachier';

const CashierClosing = () => {
  return (
    <Box backgroundColor="mainBackground" flex={1}>
      <FlatList
        data={DailyCloseCachier}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Card>
            <Box
              paddingBottom="s"
              marginBottom="s"
              borderBottomColor="greyLightest"
              borderBottomWidth={1}
              flexDirection="row"
              justifyContent="space-between">
              <Text color="black">Data</Text>
              <Text color="black" fontWeight="bold">
              {item.date}
              </Text>
            </Box>

            <Box
              paddingBottom="s"
              marginBottom="s"
              borderBottomColor="greyLightest"
              borderBottomWidth={1}
              flexDirection="row"
              justifyContent="space-between">
              <Text color="black">Saldo do caixa total</Text>
              <Text color="success">{item.totalcashier}</Text>
            </Box>

            <Box
              paddingBottom="s"
              marginBottom="s"
              borderBottomColor="greyLightest"
              borderBottomWidth={1}
              flexDirection="row"
              justifyContent="space-between">
              <Text color="black">Despesas do dia</Text>
              <Text color="warning">{item.expenses}</Text>
            </Box>
            <Box flexDirection="row" justifyContent="space-between">
              <Text color="black" fontWeight="bold">
                Total após despesas
              </Text>
              <Text color="black" fontWeight="bold">
              {item.totalcashierafterexpenses}
              </Text>
            </Box>
          </Card>
        )}
        // Set ListHeaderComponent to add space for the fixed top area
        ListHeaderComponent={
          <Balance
            title="Balanço de Setembro"
            subTitle="Divida 500.00 kz"
            totalPrice="9,000.00 Kz"
            leftSubtitle="Despesas do dia"
            leftValue="1.000.00"
            righttSubtitle="Saldo do caixa total"
            rightValue="10.000.00"
          />
        }
        // Set ListFooterComponent if you have a footer below the FlatList
        // ListFooterComponent={<View style={styles.footer} />}
      />

      
    </Box>
  );
};

export default CashierClosing;
