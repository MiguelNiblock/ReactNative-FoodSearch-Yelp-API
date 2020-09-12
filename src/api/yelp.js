import axios from 'axios';

try {
  const key = import('./apiKey');
} catch (error) {
  const key = ''
}

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: key
  }
});
