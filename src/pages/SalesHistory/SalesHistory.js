import React from 'react';
import {Box, Text} from '../../styles/theme';
import {View, FlatList} from 'react-native';

import Balance from '../../components/Balance';
import Card from '../../components/Card';
import { SalesHistoryData } from '../../data/SalesHistoryData';

const SalesHistory = () => {
  return (
    <Box backgroundColor="mainBackground" flex={1}>
      <FlatList
        data={SalesHistoryData}
        keyExtractor={item => item.id}
        renderItem={({item}) => {

          return (
          <Card>
            <Box>
              <Box flex={1} flexDirection='row' justifyContent='center'>
                <Text variant='textSmall' color="textDefaultColor">{item.date} </Text>
                <Text variant='textSmall' color="textDefaultColor">- {item.time} </Text>
              </Box>

              {item.products.map((products_entry, index) => (
                <Box key={index} paddingBottom="s"
                marginBottom="s"
                borderBottomColor="greyLightest"
                borderBottomWidth={1}>
                  <Text color="highlight" fontWeight='bold'>{products_entry.productname}</Text>

                <Box flex={1} flexDirection='row' justifyContent='space-between'>
                <Box>
                  <Text  color="textDefaultColor">Unitario</Text>
                  <Text fontWeight='bold' color="textDefaultColor">{products_entry.unitario} kz</Text>
                </Box>
                <Box>
                <Text  color="textDefaultColor">Qty</Text>
                <Text fontWeight='bold' color="textDefaultColor">{products_entry.quantity}</Text>
                </Box>
                <Box>
                <Text  color="textDefaultColor">Desconto</Text>
                <Text fontWeight='bold' color="textDefaultColor">{products_entry.desconto}</Text>
                </Box>
                <Box>
                <Text textAlign='right' color="textDefaultColor">Total</Text>
                <Text fontWeight='bold' color="textDefaultColor">{products_entry.subtotal.toFixed(2)} kz</Text>
                </Box>
              </Box>
                </Box>

                ))}
               <Box alignSelf='flex-end' marginTop='s'>
                  <Text textAlign='right' color="textDefaultColor" fontWeight='bold'>Total</Text>
                  <Text fontWeight='bold' color="black">{item.total.toFixed(2)} kz</Text>
                </Box>
            </Box>
          </Card>
          );
        }}
        // Set ListHeaderComponent to add space for the fixed top area
        ListHeaderComponent={
          <Balance
            title="Total"
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

export default SalesHistory;
