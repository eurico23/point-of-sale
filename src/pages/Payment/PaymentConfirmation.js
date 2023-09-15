import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, Box} from '../../styles/theme';
import Button from '../../components/Button';
import PaymentModalContent from './PaymentModalContent';
import Modal from '../../components/Modal';

const PaymentConfirmation = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);

  // Define a function to handle card selection
  const handleBoxPress = boxIndex => {
    setSelectedBox(boxIndex);
    console.log(boxIndex);
  };
  // Define a function to get the style for each card based on selection
  const getBoxStyle = boxIndex => {
    return {
      ...styles.box,
      backgroundColor: selectedBox === boxIndex ? 'blue' : '#EAF2FF',
      color: selectedBox === boxIndex ? 'white' : 'white',
    };
  };

  // toggle modal
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <Box backgroundColor="mainBackground" flex={1} paddingHorizontal="s">
      <Modal modalVisible={modalVisible} toggleModal={toggleModal}>
        <PaymentModalContent toggleModal={toggleModal} />
      </Modal>

      <Box
        bg="cardPrimaryBackground"
        borderRadius="s"
        paddingHorizontal="s"
        marginBottom="l"
        paddingVertical="m">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          borderBottomColor="greyLightest"
          borderBottomWidth={1}
          marginBottom="l"
          paddingBottom="l">
          <Text verticalAlign='bottom' fontWeight="bold" color="black">
            Table 1
          </Text>
          <Box flexDirection="row">
          <Text variant="textLarge" color='textDefaultColor'  textAlign="right" marginRight='s' verticalAlign='bottom'>
            Total:  
          </Text>
          <Text variant="headerMedium" color="highlight" textAlign="right">
            850,00 Kz
          </Text>
          </Box>
        </Box>
        <Text textAlign="center">Valor recebido</Text>
        <TextInput
          style={styles.textInput}
          value="1,000"
          placeholder="Ammount Received"></TextInput>
        <Text textAlign="center">Troco</Text>
        <TextInput
          editable={false}
          style={styles.textInput}
          backgroundColor="#00000000"
          value="200"
          placeholder="Change"></TextInput>
      </Box>

      <Box flexDirection="row" gap="xl" alignSelf="center" marginBottom="l">
        <TouchableOpacity
          style={{...styles.cards, ...getBoxStyle(1)}}
          onPress={() => handleBoxPress(1)}>
          <FontAwesome
            name="credit-card"
            size={40}
            style={{color: selectedBox === 1 ? '#FFF' : '#006FFD'}}
          />
          <Text
            style={{color: selectedBox === 1 ? 'white' : 'black'}}
            variant="textLarge">
            Cartão
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.cards, ...getBoxStyle(2)}}
          onPress={() => handleBoxPress(2)}>
          <FontAwesome
            name="money"
            size={40}
            color="#006FFD"
            style={{color: selectedBox === 2 ? '#FFF' : '#006FFD'}}
          />
          <Text
            style={{color: selectedBox === 2 ? 'white' : 'black'}}
            variant="textLarge">
            Dinheiro
          </Text>
        </TouchableOpacity>
      </Box>
      <Box flexDirection="row" gap="xl" alignSelf="center" marginBottom="l">
        <TouchableOpacity
          style={{...styles.cards, ...getBoxStyle(3)}}
          onPress={() => handleBoxPress(3)}>
          <MaterialCommunityIcons
            name="bank-transfer"
            size={50}
            style={{color: selectedBox === 3 ? '#FFF' : '#006FFD'}}
          />
          <Text
            style={{color: selectedBox === 3 ? 'white' : 'black'}}
            variant="textLarge">
            Transferência
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.cards, ...getBoxStyle(4)}}
          onPress={() => handleBoxPress(4)}>
          <MaterialCommunityIcons
            name="account-cash-outline"
            size={40}
            style={{color: selectedBox === 4 ? '#FFF' : '#006FFD'}}
          />
          <Text
            style={{color: selectedBox === 4 ? 'white' : 'black'}}
            variant="textLarge">
            Dívida{' '}
          </Text>
        </TouchableOpacity>
      </Box>

      <Box flexDirection="row" gap="l">
        <Button title="CANCELAR" variant="buttonWarning" />
        <Button
          title="CONFIRMAR"
          variant="buttonSuccess"
          onPress={toggleModal}
        />
      </Box>

      <Button title="CONFIRMAR & IMPRIMIR" variant="buttonSuccess" />
    </Box>
  );
};

export default PaymentConfirmation;

const styles = StyleSheet.create({
  textInput: {
    marginTop: 10,
    marginBottom: 15,
    width: '100%',
    borderColor: '#D4D6DD',
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    textAlign: 'center',
    backgroundColor: '#F8F9FE',
    fontSize: 16,
    color: '#71727A',
    textAlign: 'center',
  },

  cards: {
    backgroundColor: '#EAF2FF',
    width: '40%',
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 10,
  },
});
