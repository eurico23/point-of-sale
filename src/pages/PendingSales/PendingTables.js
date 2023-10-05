import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
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
          <Text fontWeight="bold" color="textDefaultColor">
            {data.table}
          </Text>
          <Text>{data.date} ago</Text>
        </View>

        <View style={styles.row}>
          <Text>{data.tableItemCount} Items </Text>
          <Text textAlign="right">
            Total:
            <Text variant="textLarge" color="highlight">
              {' '}
              {data.total} Kz
            </Text>
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
            <Box
              key={index}
              paddingBottom="s"
              marginBottom="s"
              borderBottomColor="greyLightest"
              borderBottomWidth={1}>
              <Text color="black" fontWeight="bold">
                {item.product}
              </Text>

              <Box flex={1} flexDirection="row" justifyContent="space-between">
                <Box>
                  <Text color="textDefaultColor">Unitario</Text>
                  <Text fontWeight="bold" color="textDefaultColor">
                    {item.price}
                  </Text>
                </Box>
                <Box>
                  <Text color="textDefaultColor">Qty</Text>
                  <Text fontWeight="bold" color="textDefaultColor">
                    {item.quantity}
                  </Text>
                </Box>
                <Box>
                  <Text color="textDefaultColor">Desconto</Text>
                  <Text fontWeight="bold" color="textDefaultColor">
                    0.00
                  </Text>
                </Box>
                <Box>
                  <Text textAlign="right" color="textDefaultColor">
                    Total
                  </Text>
                  <Text fontWeight="bold" color="textDefaultColor">
                    {item.price} kz
                  </Text>
                </Box>
              </Box>
            </Box>
          ))}

          <Box flexDirection="row" gap="m">
            <Button
              title="APAGAR"
              variant="buttonWarning"
              onPress={toggleModal}
            />
            <Modal modalVisible={modalVisible} toggleModal={toggleModal}>
              <PendingModalContent toggleModal={toggleModal} />
            </Modal>

            <Button
              title="EDITAR"
              variant="defaults"
              onPress={() => navigation.navigate('EditSale')}
            />
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
