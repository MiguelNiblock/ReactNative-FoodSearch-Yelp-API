import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name='search' style={styles.iconStyle}/>
      <TextInput 
        style={styles.inputStyle} 
        placeholder='Search restaurants' 
        value={term} 
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={onTermChange} // same as newTerm=>onTermChange(newTerm)
        onEndEditing={onTermSubmit} // same as ()=>onTermSubmit()
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  inputStyle: {
    // borderColor: 'black',
    // borderWidth: 1, // (temp) see the screen sizing of textInput
    flex: 1, // make textInput take all horizontal space
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center', // align just the icon, vertically
    // we don't do this for textInput because user would have less area to select textInput
    marginHorizontal: 15,
  }
});

export default SearchBar;
