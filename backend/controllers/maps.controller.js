const mapsService = require('../services/maps.service');
const { validationResult } = require('express-validator');





module.exports.getCoordinate = async (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  try {
    const { address } = req.query;
    
    if (!address) {
      return res.status(400).json({ error: 'Address is required' });
    }

    const coordinates = await mapsService.getCoordinatesByAddress(address);
    return res.status(200).json({ coordinates });
  } catch (error) {
    console.error('Error getting coordinate:', error);
    return res.status(500).json({ error: 'Failed to get coordinate' });
  }
};


module.exports.getDistanceTime = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  try {
    const { origin, destination } = req.query;

    if (!origin || !destination) {
      return res.status(400).json({ error: 'Origin and destination are required' });
    }

    const distanceTime = await mapsService.getDistanceAndTime(origin, destination);
    return res.status(200).json({ distanceTime });
  } catch (error) {
    console.error('Error getting distance and time:', error);
    return res.status(500).json({ error: 'Failed to get distance and time' });
  }
}

module.exports.getSuggestions = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  try {
    const { input } = req.query;

    if (!input) {
      return res.status(400).json({ error: 'input is required' });
    }

    const suggestions = await mapsService.getAddressSuggestions(input);
    return res.status(200).json({ suggestions });
  } catch (error) {
    console.error('Error getting address suggestions:', error);
    return res.status(500).json({ error: 'Failed to get address suggestions' });
  }
}

