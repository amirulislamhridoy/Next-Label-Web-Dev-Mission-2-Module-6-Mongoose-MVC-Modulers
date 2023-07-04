import express, { Application } from 'express';
const app: Application = express()
import mongoose from 'mongoose';

// এখনকার ডকে(documentation) আছে এমন। মানে ফানসন ব্যবহার করে না্ই।
// mongoose.connect('mongodb://127.0.0.1:27017/test')
//   .then(() => console.log('Connected!')).catch(err => console.log(err))

async function main() {
    try {
        // await mongoose.connect('mongodb://127.0.0.1:27017/test')
        mongoose.connect('mongodb://127.0.0.1:27017/test')
        console.log('DB is connected')
    } catch (err) {
        console.log('error ', err);
    }
}
main()

export default app;
