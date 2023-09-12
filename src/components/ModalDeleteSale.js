import {View, Modal, StyleSheet, Dimensions} from 'react-native';
import {Text, Box} from '../styles/theme';
import Button from './Button';

const ModalDeleteSale = ({modalVisible, toggleModal}) => {



  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={toggleModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text variant="headerLarge">Cuca</Text>
          <Text variant="textMedium" marginBottom='s'>3 Items</Text>
          <Text variant="textMedium" marginBottom='l' textAlign='center'>Are you sure? It will delete Permanently</Text>
         
          <Box  flexDirection="row" gap="m">
            <Button
              title="Yes Delete"
              variant="buttonWarning"
            />
            <Button title="No" variant="buttonSuccess"  onPress={toggleModal} />
          </Box>




        </View>
      </View>
    </Modal>
  );
};

export default ModalDeleteSale;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    width: '90%',
    height: Dimensions.get('window').height * 0.3,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },


});
