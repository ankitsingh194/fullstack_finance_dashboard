import express  from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import kpiRoutes from "./routes/kpi.js"
import productRoutes from "./routes/productRoutes.js"
import { products, transactions, kpis } from './data/data.js'
import Transations from "./models/Transations.js";
import transactionsRoutes from "./routes/transationroute.js"
import Product from "./models/Product.js";
import KPI from "./models/KPI.js";

dotenv.config()
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(cors());

/* ROUTES */
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes)
app.use("/transaction", transactionsRoutes);



const MONGOS_URL="mongodb+srv://ankit1602121007:jyqZ54F7wGoXsRMw@cluster0.f71lwn2.mongodb.net/finance"


/* MONGOOSE  SETUP */

const PORT = process.env.PORT || 8000;



mongoose.connect(MONGOS_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(async () => {
    app.listen(PORT, ()=> console.log(`server Port: ${PORT}`));
  // KPI.insertMany(kpis)


}).catch((error) => console.log(`${error} did not connect`));


        // AAD Data //

    
