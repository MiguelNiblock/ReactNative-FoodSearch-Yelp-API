import React, {useState} from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../Components/ResultsList';

const SearchScreen = () => {

  // console.log(props) // to see navigation object
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  
  // console.log(results)

  const filterResultsByPrice = (price) => {
    // price === '$'|'$$'|'$$$'
    return results.filter(result=>{
      return result.price === price;
    });
  };

  return (
    // <View style={{flex:1}}> // same as `<></>`
    <>
      <SearchBar 
        term={term} 
        onTermChange={setTerm}// === `newTerm=>setTerm(newTerm)`
        onTermSubmit={()=>searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>We have found: {results.length} results</Text> */}
      <ScrollView>
        <ResultsList 
          title='Cost Effective'
          results={filterResultsByPrice('$')}
        />
        <ResultsList 
          title='Bit Pricier'
          results={filterResultsByPrice('$$')}
        />
        <ResultsList 
          title='Big Spender'
          results={filterResultsByPrice('$$$')}
        />
      </ScrollView>
    </>
    
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
