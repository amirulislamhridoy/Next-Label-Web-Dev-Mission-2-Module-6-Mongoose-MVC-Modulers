import express, { urlencoded } from 'express';
import app from './app';
const port = process.env.PORT || 5000;
import cors from 'cors';;
import userRouters from './modules/user/user.router';

// middlewares
app.use(cors());
// parse data
app.use(express.json());
// url encoded
app.use(urlencoded({ extended: true }));

// main function / router
app.use('/api/v1/user', userRouters);
// inserting a test data into mongodb
/*
Step 1: Interface
Step 2: Schema
Step 3: Model
Step 4: Database Query
*/
/************************************/
/*
******moduler patter*****
route => router
route function => controller

Schema, model => model
interface => interface

********all work of main function work**** => service file 
*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
