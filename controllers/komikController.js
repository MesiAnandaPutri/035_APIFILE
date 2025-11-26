const db = require("../models");
const komikService = require("../services/komikService");

async function createKomik(req, res) {
  try {
    const komikData = req.body;

    if (req.file) {
      komikData.ImageType = req.file.mimetype;
      komikData.ImageName = req.file.originalname;
      komikData.ImageData = req.file.buffer;
    }

    const result = await komikService.createKomik(db, komikData);
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
}

async function getAllKomik(req, res) {
  try {
    const result = await komikService.getAllKomik(db);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
