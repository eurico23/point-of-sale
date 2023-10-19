
import React, { useState } from 'react';
import {StyleSheet, TextInput, Button, Pressable, Platform} from 'react-native';
import {Text, Box} from '../../styles/theme';
import DateTimePicker from '@react-native-community/datetimepicker';

const NewProduct  = () => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState ("");

  const toggleDatePicker = () => {
    console.log("inside toggleDatePicker before");
    setShowPicker(!showPicker);
  };

  const onChange = ({type}, selectedDate) => {
    if (type == "set") {
      const currentdate = selectedDate;
      setDate(currentdate);

      if (Platform.OS === "android"){
        toggleDatePicker();
        setDateOfBirth(formatDate(currentdate));
      }
    } else {
     // toggleDatePicker();
    }
  };


  const clearDate = () => {
    setDateOfBirth(""); // Set the date to an empty string to clear it
  };

    // for IOS
  const confirmIOSDate = () => {
    setDateOfBirth(formatDate(currentdate));
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


  return (
    <Box backgroundColor="mainBackground" flex={1} paddingHorizontal="s">


      <Box>
        <Text color="black" fontWeight="bold" marginBottom="xs">Nome do Produto *</Text>
        <TextInput style={styles.textInput} ></TextInput>
      </Box>

      <Box>
        <Text color="black" fontWeight="bold" marginBottom="xs">Data de expiração</Text>
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
        {!showPicker && (
        <Pressable onPress={toggleDatePicker}>
            <TextInput 
              style={styles.textInput} 
              placeholder="dd/mm/YYYY" 
              editable={false}
              value={dateOfBirth}
              onPressIn={toggleDatePicker}
              />
        </Pressable>
        )}

    <Button  title="Reset Date" onPress={clearDate} /> 

      </Box>

      <Box>
        <Text color="black" fontWeight="bold" marginBottom="xs">Quantidade*</Text>
        <TextInput style={styles.textInput} placeholder="Quantidade"></TextInput>
      </Box>

      <Box>
        <Text color="black" fontWeight="bold" marginBottom="xs">Preço de venda</Text>
        <TextInput style={styles.textInput} placeholder="Preço de venda"></TextInput>
      </Box>

      <Box>
        <Text color="black" fontWeight="bold" marginBottom="xs">Preço de compra</Text>
        <TextInput style={styles.textInput} ></TextInput>
      </Box>

    </Box>
  );
};

export default NewProduct;

const styles = StyleSheet.create({


  textInput: {
    marginBottom: 15,
    width: '100%',
    borderColor: '#D4D6DD',
    borderWidth: 1,
    borderRadius: 6,
    padding: 6,
    backgroundColor: '#F8F9FE',
    fontSize: 12,
    color: '#000',
  },
  
});