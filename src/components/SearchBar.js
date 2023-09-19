import React, {useState} from 'react';
import { Box } from '../styles/theme';
import { TextInput, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SearchBar = (props) => {
  return (
    <Box style={styles.searchBar}>
    <FontAwesome5 name="search" size={20} color="#2F3036" />
    <TextInput
    color="#1E1E1E"
    style={{height:40, width:'100%'}}
      placeholder={props.placeholder}
      value={props.searchProduct}
      onChangeText={props.setSearchProduct}></TextInput>
  </Box>
  );
};

export default SearchBar;


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
  });
  

