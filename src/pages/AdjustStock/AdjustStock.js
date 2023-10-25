
import React, { useState } from 'react';
import {StyleSheet, TextInput, Pressable, Platform, TouchableOpacity, ScrollView} from 'react-native';
import {Text, Box} from '../../styles/theme';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SelectList } from 'react-native-dropdown-select-list';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../../components/Button';
import { CategoryData } from '../../data/CategoryData';
import { UnidadeCompra } from '../../data/UnidadeCompra';
import { globalStyles } from '../../styles/stylesheet';
import SearchBar from '../../components/SearchBar';
import Card from '../../components/Card';



const AdjustStock  = () => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [selected, setSelected] = React.useState("");

  const [productName, setProductName] = useState ("");
  const [productCategory, setProductCategory] = useState ("");
  const [purchaseUnity, setPurchaseUnity] = useState ("");
  const [productQuantity, setProductQuantity] = useState ("");
  const [productCost, setProductCost] = useState ("");
  const [productTotalCost, setProductTotalCost] = useState ("");
  const [productTotalCostEdit, setProductTotalCostEdit] = useState ("");
  const [productSellUnity, setProductSellUnity] = useState ("");
  const [productPrice, setProductPrice] = useState ("");
  const [expiryDate, setExpiryDate] = useState ("");
  //const [productImage, setexpiryDate] = useState ("");



  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({type}, selectedDate) => {
    if (type == "set") {
      const currentdate = selectedDate;
      setDate(currentdate);
      

      if (Platform.OS === "android"){
        toggleDatePicker();
        setExpiryDate(formatDate(currentdate));
      }
    } else {
      toggleDatePicker();
    }
  };


  const clearDate = () => {
    setExpiryDate(""); // Set the date to an empty string to clear it
  };

    // for IOS
  const confirmIOSDate = () => {
    setExpiryDate(formatDate(currentdate));
    toggleDatePicker();
  };

// change format of the date
  const formatDate = (rawDate) => {
    let date = new Date(rawDate);
    
    let day = date.getDate();
    let month = date.getMonth() + 1; // Months are zero-based
    let year = date.getFullYear();

    // Add leading zeros if needed
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}/${formattedMonth}/${year}`;
  };

  function handleAddProduct(){
    const data = {

      productName,
      productCategory, 
      purchaseUnity, 
      productQuantity, 
      productCost, 
      productTotalCost,
      productTotalCostEdit, 
      productSellUnity, 
      productPrice, 
      expiryDate, 
    }
    console.log(data);
  }


  return (
    <ScrollView style={{ flex:1, backgroundColor:'#fff'}}>
    <Box paddingHorizontal="s">
        <Box paddingHorizontal='s' paddingTop='s'>
            <SearchBar placeholder="Buscar producto" />
        </Box>
        <Card>
              <Box>
                <Box>
                  <Text color="highlight" fontWeight='bold'>Fanta</Text>

                <Box flex={1} flexDirection='row' justifyContent='space-between'>
                <Box>
                  <Text color="textDefaultColor">Data de expiração</Text>
                  <Text fontWeight='bold' color="textDefaultColor">02/10/2024</Text>
                </Box>
                <Box>
                <Text  color="textDefaultColor">Estoque</Text>
                <Text fontWeight='bold' color="textDefaultColor">10 Unidade</Text>
                </Box>
                
                <Box>
                <Text textAlign='right' color="textDefaultColor">Preço</Text>
                <Text fontWeight='bold' color="textDefaultColor">20 kz</Text>
                </Box>
              </Box>
                </Box>
            </Box>
            </Card>

            <Box>
                <Text color="black" fontWeight="bold" marginBottom="xs">Selecione tipo de perca</Text>
                <SelectList onChangeText={setProductCategory}  search={false}  placeholder='Selecione Categoria' boxStyles={globalStyles.textInput} inputStyles={{fontSize:12, marginLeft:-15,}}  setSelected={(val) => setSelected(val)} data={CategoryData}  save="value"   />
            </Box>



      <Box>
        <Text color="black" fontWeight="bold" marginBottom="xs">Novo Tipo de Perca</Text>
        <TextInput onChangeText={setProductName} style={globalStyles.textInput} placeholder="Nome do Produto"></TextInput>
      </Box>



      <Box alignSelf='center' marginBottom='s'>
            <Text alignSelf='center' color="black" fontWeight="bold" marginBottom="xs">Danificado</Text>
        <Box flexDirection="row" justifyContent="space-between" gap="s">
            <Pressable>
                <Box style={styles.minusPlusContainer}>
                    <Pressable style={styles.minusPlus}>
                        <AntDesign name="minus" size={20} color="#006FFD" />
                    </Pressable>
                </Box>
            </Pressable>

            <Pressable style={{paddingVertical: 0, }}>
                <Text variant="headerMedium">2</Text>
            </Pressable>

            <Pressable>
                <Box>
                    <Pressable style={styles.minusPlus}>
                            <AntDesign name="plus" size={20} color="#006FFD" />
                          </Pressable>
                        </Box>
                      </Pressable>
                    </Box>
    
     </Box>

     <Box flexDirection='row' justifyContent='space-around' gap='s'>
        <Box flex={1} >
          <Text textAlign='center' alig color="black" fontWeight="bold" marginBottom="xs">Estoque Original</Text>
          <TextInput textAlign='center' editable = {false} onChangeText={setProductQuantity} style={[globalStyles.textInput, { backgroundColor:'#F8F9FE'}]} value='10' ></TextInput>
        </Box>
        <Box flex={1}>
          <Text textAlign='center' color="black" fontWeight="bold" marginBottom="xs">Estoque Ajustado</Text>
          <TextInput textAlign='center' editable = {false} onChangeText={setProductPrice} style={[globalStyles.textInput, { backgroundColor:'#F8F9FE'}]} value='8' ></TextInput>
        </Box>
      </Box>



      <Box flexDirection="row" gap="l">
        <Button title="CANCELAR" />
        <Button onPress={handleAddProduct} title="SALVAR" variant="buttonSuccess"
        />
      </Box>




     
      







    </Box>
    </ScrollView>
  );
};

export default AdjustStock;

const styles = StyleSheet.create({
  clearDate: {
    position: 'absolute', 
    top: 10, 
    right: 10,  
   // justifyContent:'center',
    alignItems:'center',
  //  backgroundColor: '#000',
    borderRadius:25,
    zIndex:20,
  },


  minusPlus: {
    backgroundColor: '#EAF2FF',
    padding: 5,
    borderRadius: 26,
  },
});