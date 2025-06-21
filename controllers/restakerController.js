const Restaker = require('../models/restaker');

const getRestakers = async (req, res)=>{
    try{
        const restakers = await Restaker.find().sort({lastUpdated:-1});
        res.status(200).json(restakers);
    }
    catch(err){
        console.error('Error fetching restakers:', err);
        return res.status(500).json({error: 'Internal server error'});
    }

}

module.exports = getRestakers;