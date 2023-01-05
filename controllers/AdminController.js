import Admin from "../models/Admin.js";

export const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createAdmin = async (req, res) => {
  const admin = new Admin(req.body);
  try {
    const created = await admin.save();
    res.json(created);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAdminById = async (req, res) => {
  try {
    const adminId = await Admin.findById(req.params.id);
    res.json(adminId);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateAdmin = async (req, res) => {
  const id = await Admin.findById(req.params.id);
  if (!id) return res.status(400).json({ message: "data tidak di temukan" });
  try {
    const updated = await Admin.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteAdmin = async (req, res) => {
  const id = await Admin.findById(req.params.id);
  if (!id) return res.status(400).json({ message: "data tidak di temukan" });
  try {
    const deleted = await Admin.deleteOne({ _id: req.params.id });
    res.json(deleted);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
