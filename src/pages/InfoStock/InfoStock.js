import React from 'react';
import {Box} from '../../styles/theme';
import Balance from '../../components/Balance';

const InfoStock = () => {
  return (
    <Box backgroundColor="mainBackground" flex={1}>
      <Balance
        title="Numero De produtos"
        subTitle=""
        totalPrice="100"
        leftSubtitle="Estoque Valor de Custo"
        leftValue="100.000.00"
        righttSubtitle="Estoque Valor de venda"
        rightValue="200.000.00"
      />
    </Box>
  );
};

export default InfoStock;
