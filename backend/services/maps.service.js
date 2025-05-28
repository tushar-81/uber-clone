const axios = require('axios');
require('dotenv').config();

module.exports.getAddressCordinates = async (address) => {
  try {
    // URL encode the address
    const encodedAddress = encodeURIComponent(address);
    
    // Google Maps Geocoding API endpoint
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
    
    // Make the API request
    const response = await axios.get(url);
    
    // Check if the response contains results
    if (response.data.status === 'OK' && response.data.results.length > 0) {
      const { lat, lng } = response.data.results[0].geometry.location;
      return {
        success: true,
        coordinates: {
          latitude: lat,
          longitude: lng
        },
        formattedAddress: response.data.results[0].formatted_address
      };
    } else {
      return {
        success: false,
        error: 'No results found for the provided address',
        status: response.data.status
      };
    }
  } catch (error) {
    console.error('Error fetching coordinates:', error.message);
    return {
      success: false,
      error: error.message
    };
  }
}


module.exports.getDistanceAndTime = async (origin, destination) => {
  try {
    // Google Maps Distance Matrix API endpoint
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
    
    // Make the API request
    const response = await axios.get(url);
    
    // Check if the response contains results
    if (response.data.status === 'OK' && response.data.rows.length > 0) {
      const { distance, duration } = response.data.rows[0].elements[0];
      return {
        success: true,
        distance: distance.text,
        duration: duration.text
      };
    } else {
      return {
        success: false,
        error: 'No results found for the provided origin and destination',
        status: response.data.status
      };
    }
  } catch (error) {
    console.error('Error fetching distance and time:', error.message);
    return {
      success: false,
      error: error.message
    };
  }
}


module.exports.getSuggestions = async (input) => {
  try {
    // URL encode the address
    const encodedAddress = encodeURIComponent(input);
    
    // Google Maps Places API endpoint for autocomplete
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodedAddress}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
    
    // Make the API request
    const response = await axios.get(url);
    
    // Check if the response contains predictions
    if (response.data.status === 'OK' && response.data.predictions.length > 0) {
      return {
        success: true,
        suggestions: response.data.predictions.map(prediction => prediction.description)
      };
    } else {
      return {
        success: false,
        error: 'No suggestions found for the provided address',
        status: response.data.status
      };
    }
  } catch (error) {
    console.error('Error fetching suggestions:', error.message);
    return {
      success: false,
      error: error.message
    };
  }
} 


