import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);// response will be an array of objects, so we initialize state as an empty array
  const [errorMessage, setErrorMessage] = useState('');

  
  const searchApi = async (searchTerm) =>{
    try {
      const response = await yelp.get('/search',{
        params: {
          limit: 50,
          term: searchTerm,
          location: 'los angeles',
        }
      });
      setResults(response.data.businesses);
      setErrorMessage('');
    } catch (err) {
      // console.log(err);
      setErrorMessage('Something went wrong.')
    }
  };

  // `async ()=>{}` allows using `await` instead of chaining promises with `.then().then().catch()`
  // when the GET request resolves, `await` will assign it to `response` variable
  //`data` is the response header containing the search results. `businesses` is the property of the data which contains the array of objects.

  // Call searchApi when component first renders
  useEffect(()=>{
    searchApi('pasta');
  },[]);

  return [searchApi, results, errorMessage];
};