const mongoose = require('mongoose');
const { Schema } =  mongoose;

const carSchema = new Schema({ 
        licensePlate: {
            type: String,
            required: true,
            unique: true
        },

        color : String,
        
        brand: String
});

module.exports = mongoose.model('cars', carSchema);
