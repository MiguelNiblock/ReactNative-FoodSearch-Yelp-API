import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer rN17um8oCTLTwYnS2g1yVCwXcRnOqrrMvA_i7tEOd0UlVVr7wdejPTZwU_zr1AIcVi52JX5YxJIOiIz1VB_Rr9BxKKCW1U0SjHRIA0M-9E3HA74lL7ll-o9K6zpUX3Yx'
  }
});