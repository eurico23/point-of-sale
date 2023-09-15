import React, {useState} from 'react';
import {View, Modal, StyleSheet, Dimensions} from 'react-native';
import {Text, Box} from '../../styles/theme';
import Button from '../../components/Button';

const PendingModalContent = ({ toggleModal } ) => {


  function deleteItem() {
    console.log('Item deleted');
  }


  return (
    <View>    
          <Text variant="headerLarge">Cuca</Text>
          <Text variant="textMedium" marginBottom='s'>3 Items</Text>
          <Text variant="textMedium" marginBottom='l' textAlign='center'>Tem certeza? Será excluído permanentemente</Text>
         
          <Box  flexDirection="row" gap="m">
            <Button
              title="Sim"
              variant="buttonWarning"
              onPress={deleteItem}
            />
            <Button  title="Não" variant="buttonSuccess" onPress={toggleModal} />
          </Box>
    </View>
  );
};

export default PendingModalContent;
