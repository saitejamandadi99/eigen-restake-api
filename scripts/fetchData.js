const express = require('express');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');

const Restaker = require('../models/restaker');

const fetchData = async ()=>{
    const query = `
    {
      restakers(first: 1000) {
        id
        userAddress
        amountRestakedStETH
        targetAVSOperatorAddress
      }
    }
    `;
    try{
        
    }



}