import React from 'react';
import {Box, Text} from '../../styles/theme';
import { FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Balance from '../../components/Balance';
import Card from '../../components/Card';
import { SalesHistoryData } from '../../data/SalesHistoryData';
import Calendar from '../../components/Calendar';

const DevedoresList = () => {
  const navigation = useNavigation();
  return (
    <Box backgroundColor="mainBackground" flex={1} position='relative'>
      
      <FlatList
        data={SalesHistoryData}
        keyExtractor={item => item.id}
        renderItem={({item}) => {

          return (
          <Card>
            <Box flex={1} flexDirection='row' justifyContent='space-between'>
                
                <Box flex={1} flexDirection='row' gap='s' alignItems='center'>
                    <FontAwesome  name="user-circle-o" size={25} color="#006FFD" />
               
                  <Box>  
                    <Text color="highlight" fontWeight='bold'>Pagamento de casa</Text>
                    <Text color="textDefaultColor" variant='textSmall'>Data: 02/10/2022 Hora: 15:21:07</Text>
                  </Box>
                </Box>
                <Box justifyContent='center'>
                  <Text fontWeight='bold' color="warning">100.000 kz</Text>
                </Box>
              </Box>

          </Card>
          );
        }}
        // Set ListHeaderComponent to add space for the fixed top area
        ListHeaderComponent={
          <Box>
            <Calendar  />
            <Balance
              title="Total"
              totalPrice="20,000.00 Kz"
              leftSubtitle=""
              leftValue="02/09/2023"
              righttSubtitle="Data Final"
              rightValue="02/10/2023"
            />
          </Box>
        }
        // Set ListFooterComponent if you have a footer below the FlatList
        // ListFooterComponent={<View style={styles.footer} />}
      />

      
    </Box>
  );
};

export default DevedoresList;



