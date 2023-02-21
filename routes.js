const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.get('/api/country-population', async (req, res) => {
  try {
    const data = await prisma.country.findMany({
      include: { population: true }
    });
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

module.exports = router;
