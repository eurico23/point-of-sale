import { useState } from 'react';
import {View, Modal, StyleSheet, Pressable, TextInput, Dimensions} from 'react-native';
import {Text, Box} from '../styles/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import Button from './Button';

const ModalEditItem = ({modalVisible, toggleModal}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false)


  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={toggleModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text variant="headerLarge" marginBottom='l'>Cuca</Text>

          <Box marginBottom='l' flexDirection="row" justifyContent="space-between">
            <Box
              marginBottom="xs"
              flexDirection="row"
              justifyContent="space-between"
              gap="s">
              <Pressable>
                <Box style={styles.minusPlusContainer}>
                  <Pressable
                    // onPress={() => deleteItem(item)}
                    style={styles.minusPlus}>
                    <AntDesign name="minus" size={20} color="#006FFD" />
                  </Pressable>
                </Box>
              </Pressable>

              <Pressable
                style={{
                  paddingVertical: 0,
                }}>
                <Text variant="headerMedium">5</Text>
              </Pressable>

              <Pressable>
                <Box>
                  <Pressable
                    // onPress={() => deleteItem(item)}
                    style={styles.minusPlus}>
                    <AntDesign name="plus" size={20} color="#006FFD" />
                  </Pressable>
                </Box>
              </Pressable>
            </Box>
          </Box>
          <Text color="black" fontWeight="bold" marginBottom='s'>
            Enter Price
          </Text>
          <TextInput  style={styles.textInput} value='1000'  placeholder="Search"></TextInput>

                <Box flexDirection='row' gap='xl'>

                    <Box style={{width:'50%'}} alignItems='center'>
                        <Text color="black" fontWeight="bold" marginBottom='s'>
                            Discount (%)
                        </Text>
                        <TextInput style={styles.textInput}  placeholder="Discount"></TextInput>
                    </Box>

                    <Box style={{width:'50%'}} alignItems='center'>
                        <Text color="black" fontWeight="bold" marginBottom='s'>
                            Discount Per Item
                        </Text>
                        <TextInput style={styles.textInput}  placeholder="Discount"></TextInput>
                    </Box>

                </Box>

                <Box  flexDirection='row' gap='xl' marginBottom='l'>
                    <Box flexDirection='row'>
                        <CheckBox 
                        disabled={false}
                        value={toggleCheckBox2}
                        onValueChange={(newValue) => setToggleCheckBox2(newValue)}
                        tintColors={{ true: '#006FFD', false: 'black' }}
                        /><Text style={{alignSelf:'center'}} color="black" fontWeight="bold">Give as Free</Text>
                    </Box>
                    
                    <Box >
                    <Box flexDirection='row'>
                        <CheckBox
                         style={styles.checkBox}
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        tintColors={{ true: '#006FFD', false: 'black' }}
                        /><Text style={{alignSelf:'center'}} color="black" fontWeight="bold">Give as Gift</Text>
                    </Box>
                </Box>

                
           
                </Box>


                <Box  flexDirection="row" gap="m">
            <Button
              title="Remove"
              variant="buttonWarning"
            />
            <Button title="UPDATE" variant="buttonSuccess" />
          </Box>



          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={toggleModal}>
            <Text style={styles.textStyle}>Hide Modal</Text>
            <AntDesign
                      style={{textAlign: 'center'}}
                      name="closecircle"
                      size={30}
                      color="#006FFD"
                    />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ModalEditItem;

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
    height: Dimensions.get('window').height * 0.7,
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

  minusPlus: {
    backgroundColor: '#EAF2FF',
    padding: 5,
    borderRadius: 26,
  },
  textInput:{
    marginBottom:15, 
    width: '100%',
    borderColor:'#D4D6DD',
    borderWidth:1,
    borderRadius:12,
    padding:10,
    textAlign:'center',
    backgroundColor:'#F8F9FE',
    fontSize:16,
    color:'#71727A',
    textAlign: 'center',
  },
  checkBox:{
    alignSelf: 'center',
  }
});
