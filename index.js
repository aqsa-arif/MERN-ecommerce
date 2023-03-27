import express from 'express';
import dotenv  from 'dotenv';
import cors from 'cors';
import dbConnection from './db/config.js';
import authRoutes from './routes/authRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';


dotenv.config();
const app = express()
const port = process.env.PORT;

// Connect to Database
dbConnection();

// Middlewares
app.use(express.json())
app.use(cors())
app.use(express.static('../frontend/build'))

app.use('/api/auth', authRoutes )
app.use('/api/category', categoryRoutes )
app.use('/api/products', productRoutes )
app.use('/api/paymentIntegration', paymentRoutes  )


app.use('*', (req, res) => {
    res.sendFile("../frontend/build/index.html'")
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})