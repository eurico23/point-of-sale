import {useNavigation} from '@react-navigation/native';
import {StyleSheet,  TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, Box} from '../styles/theme';


const PaymentMethod = () => {
  return (
    <Box backgroundColor="mainBackground" flex={1}  justifyContent='center'>
      <Box flexDirection="row" gap="l" alignSelf='center'>
        <TouchableOpacity style={styles.cards}> 
                <FontAwesome name="credit-card" size={30} color="#006FFD"  />
              <Text variant='textLarge'>Card</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cards}> 
              <FontAwesome name="money" size={30} color="#006FFD"  />
              <Text variant='textLarge'>Cash</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cards}> 
              <MaterialCommunityIcons name="account-cash-outline" size={30} color="#006FFD"  />
              <Text variant='textLarge'>Debt</Text>
            </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  cards:{
    backgroundColor:'#EAF2FF', 
    width:100, 
    borderRadius:12, 
    alignItems:'center', 
    paddingVertical:10,
  }
  

});
