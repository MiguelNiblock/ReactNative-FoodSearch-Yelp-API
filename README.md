# Food Search w/ Yelp API

This react native app allows a user to search for restaurants on Yelp with a search term. When pressing on a restaurant' preview, the user is taken to a new screen that shows more photos of the restaurant.


[Edit on Snack:](https://snack.expo.io/@miguelniblock/github.com-miguelniblock-reactnative-foodsearch-yelp-api) 

### Technical Features:

- Built with `expo-cli`
- Custom hooks are used for `useEffect` to perform an initial search of restaurants with default search terms. This way, the GET request is sent only the first time the component is rendered.
- `axios` is used to send get requests to the Yelp API
- Reusable components `ResultsList` and `ResultsDetail` display lists of restaurant results, grouped by price. ('Affordable', 'Pricier' and 'Big Spender')
- Callback arrow functions are passed to the `SearchBar` component, to update the state, and send the request to Yelp on submit.
- When a particular restaurant is pressed on, react-navigation loads a separate screen `ResultsShowScreen`, which sends an async request to Yelp to obtain the details of that particular business. Photos are then displayed in the screen with a `FlatList`.

---

Note:

To make the app work, a yelp API key is necessary. Create a developer account in Yelp and save your API key. Then create file `apiKey.js` in `src/api/`, and just type `export default 'Bearer <Your_API_Key>'`, and that's it. The import statement in `src/api/yelp.js` will automatically make use of the API Key.