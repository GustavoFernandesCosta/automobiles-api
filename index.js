require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

const mongoose = require('mongoose');

const port = process.env.APP_PORT || 3000;

const carRoutes = require('./src/features/car/car.routes');
app.use('/cars', carRoutes);

const driverRoutes = require('./src/features/driver/driver.routes');
app.use('/drivers', driverRoutes);

const useRoutes = require('./src/features/uses/use.routes');
app.use('/uses', useRoutes);

app.listen(port, async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
        });
        console.log(`Listenning at http://localhost:${port}`);
    } catch(err) {
        console.error(err);
    }
});
