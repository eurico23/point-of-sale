import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, TextInput} from 'react-native';
import {Text, Box} from '../styles/theme';
import Button from '../components/Button';

const PaymentConfirmation = () => {
  return (
    <Box flex={1} backgroundColor="mainBackground"  paddingHorizontal="s">
      <Box>
        <Box
          bg="cardPrimaryBackground"
          borderRadius="s"
          paddingHorizontal="s"
          marginBottom='l'
          paddingVertical="m">
          <Box flexDirection="row" justifyContent="space-between" borderBottomColor='greyLightest' borderBottomWidth={1} marginBottom='l' paddingBottom='l'>
            <Text fontWeight="bold" color="black">
              Table 1
            </Text>
            <Text variant="textLarge" color="highlight" textAlign="right">
              AOA 850.00
            </Text>
            
          </Box>
          <Text textAlign='center'>Ammount Received</Text>
          <TextInput style={styles.textInput} value='1000' placeholder="Ammount Received"></TextInput>
          <Text textAlign='center'>Change</Text>
          <TextInput editable={false}  style={styles.textInput} backgroundColor='#00000000' value='200' placeholder="Change"></TextInput>

        </Box>

  <Box>
        <Box flexDirection="row">
            <Button
              title="CONFIRMED"
              variant="buttonSuccess"
            />
          </Box>
          <Box flexDirection="row">
          <Button title="CONFIRMED & PRINT" variant="buttonSuccess" />
          </Box>
          <Box flexDirection="row">
            <Button
              title="CANCEL"
              variant="buttonWarning" />
          </Box>
          </Box>    
      </Box>
    </Box>
  );
};

export default PaymentConfirmation;

const styles = StyleSheet.create({

  textInput:{
    marginTop:10,
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

});
