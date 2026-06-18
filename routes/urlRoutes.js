const express = require("express");
const router = express.Router();

const shortid = require("shortid");
const Url = require("../models/Url");

// Create short URL
router.post("/shorten", async (req, res) => {
  try {
    const { originalUrl } = req.body;

    const shortCode = shortid.generate();

    await Url.create({
      originalUrl,
      shortCode,
      clicks: 0,
    });

    res.json({
      shortUrl: `http://localhost:5000/${shortCode}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

// Redirect
router.get("/:code", async (req, res) => {
  try {
    const url = await Url.findOne({
      shortCode: req.params.code,
    });

    if (!url) {
      return res.status(404).json({
        message: "URL not found",
      });
    }

    url.clicks++;

    await url.save();

    res.redirect(url.originalUrl);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

// Analytics
router.get("/analytics/:code", async (req, res) => {
  try {
    const url = await Url.findOne({
      shortCode: req.params.code,
    });

    if (!url) {
      return res.status(404).json({
        message: "Not found",
      });
    }

    res.json({
      originalUrl: url.originalUrl,
      shortCode: url.shortCode,
      clicks: url.clicks,
      createdAt: url.createdAt,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;