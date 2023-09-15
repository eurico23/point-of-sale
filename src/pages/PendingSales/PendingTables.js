import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text, Box} from '../../styles/theme';
import Card from '../../components/Card';
import Button from '../../components/Button';
import PendingModalContent from './PendingModalContent';
import Modal from '../../components/Modal';

export default function PendingTables({data}) {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const navigation = useNavigation();
  const [showContent, setShowContent] = useState(false);



  return (
    <Card>
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
              title="EXCLUIR"
              variant="buttonWarning"
              onPress={toggleModal}
            />
            <Modal modalVisible={modalVisible} toggleModal={toggleModal}>
              <PendingModalContent toggleModal={toggleModal} />
            </Modal>

            <Button title="EDITAR" variant="defaults"  onPress={() => navigation.navigate('EditSale')} />
          </Box>

          <Box>
            <Button
              title="PAGAR"
              variant="buttonSuccess"
              onPress={() => navigation.navigate('PaymentConfirmation')}
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
