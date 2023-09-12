import { useNavigation } from "@react-navigation/native";
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Pressable, Alert} from 'react-native';
import {Text, Box} from '../styles/theme';
import Card from './Card';
import Button from './Button';
import ModalDeleteSale from '../components/ModalDeleteSale';



export default function OpenTables({data}) {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
      setModalVisible(!modalVisible);
    };

  const navigation = useNavigation();
  const [showContent, setShowContent] = useState(false);

  function buttonSuccess() {
    console.log('buttonSuccess');
  }

  function buttonWarning() {
    console.log('Cancel buttonWarning');
  }

  function clickdefault() {
    console.log('default');
  }


  return (
    
    <Card>
      <ModalDeleteSale modalVisible={modalVisible} toggleModal={toggleModal} />
      <TouchableOpacity onPress={() => setShowContent(!showContent)}>
        <View style={styles.row}>
          <Text fontWeight="bold" color="black">
            {data.table}
          </Text>
          <Text>{data.date} ago</Text>
        </View>
        


        <View style={styles.row}>
          <Text>{data.tableItemCount} Items </Text>
          <Text variant="textLarge" color="highlight" textAlign="right">
            {data.total} Kz
          </Text>
        </View>
      </TouchableOpacity>
      {showContent && (
        <Box
          borderColor="greyLightest"
          borderTopWidth={1}
          paddingTop="s"
          marginTop="m">
          {data.tableItems.map((item, index) => (
            <Box key={index} style={[styles.row, styles.rowBorder]}>
              <View style={{flex: 1}}>
                <View style={styles.row}>
                  <Text fontWeight="bold" width="80%">
                    {item.product}
                  </Text>
                  <Text width="20%" textAlign="right">
                    x {item.quantity}
                  </Text>
                </View>

                <View style={styles.row}>
                  <Text>{item.price} Kz</Text>
                  <Text fontWeight="bold">2.000 Kz</Text>
                </View>
              </View>
            </Box>
          ))}

          <Box flexDirection="row" gap="m">
            <Button
              title="DELETE"
              variant="buttonWarning"
              onPress={() => setModalVisible(true)}
            />
            <Button title="EDIT" variant="defaults"  />
          </Box>

          <Box>
            <Button
              title="PAY"
              variant="buttonSuccess"
              onPress={() => navigation.navigate('PaymentMethod')}
            />
          </Box>

          
        </Box>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowBorder: {
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingBottom: 15,
    borderColor: '#D4D6DD',
  },
});
