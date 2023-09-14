import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text, Box} from '../../styles/theme';
import {ProductsDummy} from '../../components/ProductsDummy';
import {FlatList} from 'react-native-gesture-handler';
import Button from '../../components/Button';
import EditForm from './EditForm';
import Modal from "../../components/Modal";

const EditSale = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
      setModalVisible(!modalVisible);
    console.log("Modal")
    };


    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerTitle: () => (
            <Text variant='headerMedium'>
              Table 1
            </Text>
          ),
          headerTitleAlign: 'center',
          headerStyle: {
          //  backgroundColor: '#F8F9FE', //Set Header color
          borderBottomColor:'#D4D6DD',
          borderBottomWidth:1,
          shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
          
        });
      }, [navigation]);
  const navigation = useNavigation();

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
    <Box backgroundColor="mainBackground" flex={1} paddingHorizontal="s">  


<Modal modalVisible={modalVisible} toggleModal={toggleModal}>
                    <EditForm toggleModal={toggleModal} />
              </Modal>


      <View style={{marginBottom: 180}}>
        <FlatList
          data={ProductsDummy}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <Box
                borderBottomColor="greyLightest"
                borderBottomWidth={1}
                style={styles.productListing}>
                <Box flex={1} paddingHorizontal="s">
                  <Text
                    marginBottom="s"
                    fontWeight="bold"
                    color="black"
                    numberOfLines={4}>
                    {item.productname}
                  </Text>
                  <Box flexDirection="row" justifyContent="space-between">
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
                        <Text variant="headerMedium">10</Text>
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
                  <Text marginLeft="xl" color="textDefaultColor" fontSize={14}>
                    x {item.price} Kz
                  </Text>
                </Box>
                <Box>
                  <Pressable  onPress={toggleModal}>
                    <Text color="black" fontWeight="bold" variant="textLarge">
                      100.00 Kz
                    </Text>

                    <MaterialCommunityIcons
                      style={{textAlign: 'right'}}
                      name="square-edit-outline"
                      size={30}
                      color="#006FFD"
                    />
                    <Text textAlign='right'>
                        Edit
                      </Text>
                  </Pressable>
                 
                </Box>
              </Box>
            );
          }}
        />
      </View>
      <Box style={styles.buttonArea}>
          <TouchableOpacity style={{marginTop:6,marginBottom:-16, }} onPress={() => navigation.navigate('NewSale')}>
          <Text   variant="textLarge" textAlign='center' >Add new Item </Text>
        <AntDesign
                      style={{textAlign: 'center',  }}
                      name="codepen"
                      size={30}
                      color="#000"
                     
                    />
          </TouchableOpacity>
        
        <Box
          
          flex={1}
          flexDirection="row"
          justifyContent="flex-end"
          gap="m"
          paddingVertical="s">
            
          <Text variant="textLarge" color="textDefaultColor">
            Total:
          </Text>
          <Text variant="textLarge" color="highlight">10.00.000 Kz</Text>
        </Box>
        <Box flexDirection="row" gap="m">
          <Button
            title="CLEAR"
            variant="buttonWarning"
            onPress={buttonWarning}
          />
          <Button
            title="SAVE"
            variant="defaults"
            onPress={() => navigation.navigate('PendingSales')}
          />
        </Box>

        <Box>
          <Button title="PAY" variant="buttonSuccess" onPress={buttonSuccess} />
        </Box>
      </Box>
    </Box>
  );
};

export default EditSale;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#F8F9FE',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#D4D6DD',
    marginBottom: 10,
  },
  productListing: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'space-between',
    marginBottom: 15,
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  productImg: {
    width: 95,
    height: 95,
    padding: 20,
    borderRadius: 15,
    marginBottom: 10,
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: '#D4D6DD',
  },

  minusPlus: {
    backgroundColor: '#EAF2FF',
    padding: 5,
    borderRadius: 26,
  },

  buttonArea: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 10,
    backgroundColor:'#F8F9FE',
  },
 
});
