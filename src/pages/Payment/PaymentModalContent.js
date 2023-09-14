import {StyleSheet} from 'react-native';
import {Text, Box} from '../../styles/theme';
import Button from '../../components/Button';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const PaymentModalContent = ({ toggleModal } ) => {
  return (
    <Box alignItems='center'>    
          <Text variant="headerLarge" textAlign='center' marginBottom='s'>Payment Successfully</Text>
          <FontAwesome5 style={styles.icon} name="check"  />
          <Box flexDirection="row" marginTop='l'>
            <Button title="CLOSE" variant="buttonInfo" onPress={toggleModal} />
          </Box>
    </Box>
  );
};

export default PaymentModalContent;

const styles = StyleSheet.create({
  icon: {
    fontSize:50,
    color: '#006FFD',
    textAlign: 'center',
  },
});
