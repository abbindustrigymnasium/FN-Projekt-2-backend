const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.get('/api/country-population', async (req, res) => {
    try {
      const data = await prisma.country.findMany({
      
      });
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  });
  
  router.post('/users' , async (req, res) => {
    try {
      console.log(req.body);
  
      const data = await prisma.user.create({
        data: {
          Username,
          Password
        }
      });
      
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  });
  
  
  router.get('/users', async (req, res) => {
    try {
      const data = await prisma.user.findMany({
      
      });
      
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  });

module.exports = router;
