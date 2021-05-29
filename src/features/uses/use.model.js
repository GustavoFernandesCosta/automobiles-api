const mongoose = require('mongoose');
const { Schema } = mongoose;

const useSchema = new Schema({
    useId: {
        type: Number,
        required: true,
        unique: true
    },
    
    driver: {
        driverId: Number,
        name: String
    },
    
    car: {
        licensePlate: String,
        color : String,
        brand: String
    },

    initialDate: Date,

    endDate: Date,

    reason: String
});

module.exports = mongoose.model('uses', useSchema);
