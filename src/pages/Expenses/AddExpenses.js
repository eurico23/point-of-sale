
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



const AddExpenses  = () => {
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
    <Box backgroundColor="mainBackground" flex={1} paddingHorizontal="s" paddingBottom='l'>

      <Box>
        <Text color="black" fontWeight="bold" marginBottom="xs">Nome da Despesa *</Text>
        <TextInput onChangeText={setProductName} style={globalStyles.textInput} value="Nome do Produto"></TextInput>
      </Box>


      <Box>
        <Text color="black" fontWeight="bold" marginBottom="xs">Valor</Text>
        <TextInput onChangeText={setProductPrice} keyboardType='numeric' style={globalStyles.textInput} placeholder="Preço de cada Item"></TextInput>
      </Box>

      <Box>
        <Text color="black" fontWeight="bold" marginBottom="xs">Data da despesa</Text>
        <Box >
            <Box style={{position:"relative"}}>

              {showPicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={'date'}
                is24Hour={true}
                display="default"
                onChange={onChange}
                
              />
              )}
              {showPicker && Platform.OS === "ios" && (
                  <Box flexDirection='row' justifyContent='space-around'>
                    <TouchableOpacity onPress={toggleDatePicker} style={[ styles.button, styles.pickerButton, {backgroundColor: "#D4D6DD"}]}>
                      <Text>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={confirmIOSDate} style={[ styles.button, styles.pickerButton, {backgroundColor: "#D4D6DD"}]}>
                      <Text>Confirm</Text>
                    </TouchableOpacity>

                  </Box>
              )}
             
              <Pressable onPress={toggleDatePicker}>
                  <TextInput 
                    style={globalStyles.textInput} 
                    placeholder="dd/mm/YYYY" 
                    editable={false}
                    value={expiryDate}
                    onPressIn={toggleDatePicker}
                    onChangeText={setExpiryDate}

                    />
              </Pressable>
              
     {expiryDate && ( // Conditionally render TouchableOpacity if expiry date has value"

            <TouchableOpacity style={styles.clearDate} onPress={clearDate}>
              <Box >
              <AntDesign name="closecircleo" size={20} />
              </Box>
            </TouchableOpacity>
             )}
            </Box>
        </Box>
      </Box>



      <Box>
        <Text color="black" fontWeight="bold" marginBottom="xs">Categoria</Text>
        <SelectList onChangeText={setProductCategory}  search={false}  placeholder='Selecione Categoria' boxStyles={globalStyles.textInput} inputStyles={{fontSize:12, marginLeft:-15,}} dropdownStyles={{marginBottom:15}} setSelected={(val) => setSelected(val)} data={CategoryData}  save="value"   />
      </Box>

      <Box flexDirection="row" gap="l">
        <Button title="CANCELAR" />
        <Button onPress={handleAddProduct} title="SALVAR" variant="buttonSuccess"
        />
      </Box>



    </Box>
  );
};

export default AddExpenses;

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
});