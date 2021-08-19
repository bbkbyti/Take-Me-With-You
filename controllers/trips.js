import Trip from '../models/trip.js';

export const getTrip = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getOneTrip = async (req, res) => {
  try {
    const { id } = req.params;
    const trip = await Trip.findById(id);
    if (!trip) {
      return res.status(404).send('trip not found');
    }
    res.json(trip);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createTrip = async (req, res) => {
  try {
    const trip = new Trip(req.body);
    await trip.save();
    res.status(201).json(trip);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateTrip = async (req, res) => {
  try {
    const { id } = req.params;
    const trip = await Trip.findByIdAndUpdate(id, req.body);
    res.json(trip);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTrip = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Trip.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Successfully Deleted Trip');
    }
    throw new Error('Trip not found');
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
