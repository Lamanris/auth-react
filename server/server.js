import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import authRouters from './routes/auth.js'
dotenv.config();


const options = {
     definition: {
         openapi: "3.0.0",
         info: {
             title: "Auth API",
             version: "1.0.0",
             description: "Express Auth API"
         },
         servers: [
             {
                 url: "http://localhost:8000/api"
             }
         ]
     },
     apis: ['./routes/*.js'],
 }

const specs = swaggerJsDoc(options);

const server = express();

server.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB is connected'))
    .catch(() => console.log('error'));


// middlewares
server.use(morgan('dev'));
server.use(express.json());
server.use(cors());


server.use('/api', authRouters);

const port = process.env.PORT || 8000;
server.listen(port, () => {
    console.log(`The server is running on port ${port}`)
});