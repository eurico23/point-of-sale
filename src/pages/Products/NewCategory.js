import React, { useState } from 'react';
import {Box, Text} from '../../styles/theme';
import {View, StyleSheet, TextInput } from 'react-native';
import { globalStyles } from '../../styles/stylesheet';


const NewCategory = () => {
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
        <Text color="black" fontWeight="bold" marginBottom="xs">Nome da categoria</Text>
        <TextInput onChangeText={setNovaCategoria} style={globalStyles.textInput} placeholder="Nome da categoria"></TextInput>
      </Box>

      
    </Box>
  );
};

export default NewCategory;


