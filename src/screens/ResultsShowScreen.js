import React,{useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation})=> {

  const id = navigation.getParam('id');
  const [result, setResult] = useState(null);

  const getResult = async (id)=>{
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(()=>{
    getResult(id);
  }, []);

  // console.log(result)

  if (result === null){
    return <Text>Please wait...</Text>
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo)=>photo}
        renderItem={({item})=>{
          return <Image source={{uri: item}} style={styles.image}/>;
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 250,
  }
});

export default ResultsShowScreen;