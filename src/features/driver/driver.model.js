const mongoose = require('mongoose');
const { Schema } = mongoose;

const driverSchema = new Schema({
    driverId: {
        type: Number,
        required: true,
        unique: true
    },
    
    name: String
});

module.exports = mongoose.model('drivers', driverSchema);
