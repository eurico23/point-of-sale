import React, { useState } from 'react';
import {Box, Text} from '../../styles/theme';
import {View, StyleSheet, TextInput } from 'react-native';
import { globalStyles } from '../../styles/stylesheet';


const EditCategory = () => {
  const [novaCategoria, setNovaCategoria] = useState ("");

  function handleNovaCategoria(){
    const data = {

      novaCategoria,

    }
    console.log(data);
  }

  return (
    <Box backgroundColor="mainBackground" flex={1} paddingHorizontal="s">

            <Box>
        <Text color="black" fontWeight="bold" marginBottom="xs">Categoria</Text>
        <TextInput onChangeText={setNovaCategoria} style={globalStyles.textInput} value="Food"></TextInput>
      </Box>

      
    </Box>
  );
};

export default EditCategory;


