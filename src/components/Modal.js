import {View, Modal as RNModal, StyleSheet, Dimensions} from 'react-native';

const Modal = ({ modalVisible, toggleModal, children }) => {
    
  return (

<RNModal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={toggleModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
            {children}
        </View>
      </View>
    </RNModal>
  );
};

export default Modal;


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