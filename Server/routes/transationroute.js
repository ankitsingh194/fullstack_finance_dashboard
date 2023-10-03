import express from "express";
import Transactions from "../models/Transations.js"

const router = express.Router();

router.get("/transactions", async(req, res) =>{
    try{
        const transaction = await Transactions.find().limit(50);
    
        res.status(200).json(transaction);
    

    }catch(err){
        res.status(404).json({message:err.message});

    }
})

export default router;