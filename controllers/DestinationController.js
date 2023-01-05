import Destination from "../models/Destination.js";

export const getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createDestination = async (req, res) => {
  const destination = new Destination(req.body);
  try {
    const created = await destination.save();
    res.json(created);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getDestinationById = async (req, res) => {
  try {
    const destinationId = await Destination.findById(req.params.id);
    res.json(destinationId);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateDestination = async (req, res) => {
  const id = await Destination.findById(req.params.id);
  if (!id) return res.status(400).json({ message: "data tidak di temukan" });
  try {
    const updated = await Destination.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteDestination = async (req, res) => {
  const id = await Destination.findById(req.params.id);
  if (!id) return res.status(400).json({ message: "data tidak di temukan" });
  try {
    const deleted = await Destination.deleteOne({ _id: req.params.id });
    res.json(deleted);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
