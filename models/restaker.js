const mongoose = require('mongoose');
const RestakerSchema = new mongoose.Schema({
    userAddress:{
        type:String,
        required: true,
        unique: true
    },
    amountRestakedStETH:{
        type:String,
        required:true
    },
    targetAVSOperatorAddress:{
        type:String,
        required:true
    },
    lastUpdated:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Restaker', RestakerSchema);