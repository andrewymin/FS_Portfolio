// import dotenv from 'dotenv';
// dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import emailRoutes from './routes/emailRoutes.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use(cors());

app.use(bodyParser.json());

let port = process.env.port || 3001;

app.use('/emailer', emailRoutes);


app.get('/', (req, res)=> {
    res.send('Server side running!')
});

app.listen(port, function (){
  console.log(`Server is running on port ${port}`);
});
